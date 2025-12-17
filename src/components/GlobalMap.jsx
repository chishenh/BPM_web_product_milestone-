import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Polyline, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'flag-icons/css/flag-icons.min.css';
import L from 'leaflet';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Regions Definition
const regions = {
    seAsia: ['TWN', 'MYS', 'THA', 'VNM', 'IDN', 'SGP', 'PHL', 'KHM', 'LAO', 'MMR', 'BRN'],
    middleEast: ['SAU', 'ARE', 'TUR', 'KWT', 'QAT', 'OMN', 'BHR', 'ISR', 'JOR', 'LBN', 'IRQ', 'IRN', 'YEM'],
    latinAmerica: ['BRA', 'GTM', 'MEX', 'ARG', 'CHL', 'COL', 'PER', 'ECU', 'VEN', 'BOL', 'PRY', 'URY', 'PAN', 'CRI', 'HND', 'SLV', 'NIC'],
    eu: ['AUT', 'BEL', 'BGR', 'HRV', 'CYP', 'CZE', 'DNK', 'EST', 'FIN', 'FRA', 'DEU', 'GRC', 'HUN', 'IRL', 'ITA', 'LVA', 'LTU', 'LUX', 'MLT', 'NLD', 'POL', 'PRT', 'ROU', 'SVK', 'SVN', 'ESP', 'SWE']
};

// Labels Configuration with Leader Lines
// coords: The actual geographic point
// labelPos: Where the label (Flag + Name) should be placed
const labels = [
    { name: "Taiwan", iso: 'tw', coords: [23.5, 121], labelPos: [29, 140] },
    { name: "Malaysia", iso: 'my', coords: [4, 102], labelPos: [4, 80] },
    { name: "Thailand", iso: 'th', coords: [15, 101], labelPos: [28, 101] },
    { name: "Vietnam", iso: 'vn', coords: [14, 108], labelPos: [14, 128] },
    { name: "Singapore", iso: 'sg', coords: [1.3, 103.8], labelPos: [-5, 82] }, // Moved below Malaysia
    { name: "Indonesia", iso: 'id', coords: [-2, 118], labelPos: [-16, 118] },
    { name: "Saudi Arabia", iso: 'sa', coords: [24, 45], labelPos: [24, 22] }, // Pull Left
    { name: "Kuwait", iso: 'kw', coords: [29.3, 47.5], labelPos: [40, 47.5] }, // Pull Top
    { name: "UAE", iso: 'ae', coords: [23.4, 54], labelPos: [23.4, 75] }, // Pull Right
    { name: "Turkey", iso: 'tr', coords: [39, 35], labelPos: [52, 22] }, // Pull Top Left
    // EU Pull Top + IVDR
    { name: "EU", iso: 'eu', coords: [50, 10], labelPos: [66, 10], customImg: '/ivdr_logo.png' },
    { name: "Australia", iso: 'au', coords: [-25, 133], labelPos: [-42, 133] }, // Pull Bottom
    { name: "Brazil", iso: 'br', coords: [-14, -52], labelPos: [-14, -25] }, // Pull Right
    { name: "Mexico", iso: 'mx', coords: [23, -102], labelPos: [23, -125] }, // Pull Left
    { name: "Guatemala", iso: 'gt', coords: [15.8, -90], labelPos: [-2, -90] }, // Pull Bottom
];

// Region Colors
const colors = {
    seAsia: '#38bdf8',
    middleEast: '#fbbf24',
    latinAmerica: '#f472b6',
    eu: '#818cf8',
    default: '#e2e8f0'
};

// Custom DivIcon generator
const createLabelIcon = (iso, name, customImg) => L.divIcon({
    className: '', // No default class to avoid Leaflet's square box
    html: `<div class="flex items-center gap-2 bg-white/95 px-2 py-1 rounded shadow-md border border-slate-300 w-max transform -translate-x-1/2 -translate-y-1/2">
             <span class="fi fi-${iso} rounded-sm shadow-sm"></span>
             <span class="text-xs font-bold text-slate-800">${name}</span>
             ${customImg ? `<img src="${customImg}" class="h-4 w-auto ml-1" alt="Badge" />` : ''}
           </div>`,
    iconSize: [0, 0], // Let content dictate size
    iconAnchor: [0, 0] // Centered via CSS transform (handled in html class if needed, or offset here)
});

export default function GlobalMap() {
    const [geoJsonData, setGeoJsonData] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
            .then(response => response.json())
            .then(data => setGeoJsonData(data))
            .catch(err => console.error("Error loading map data:", err));
    }, []);

    const styleFeature = (feature) => {
        const id = feature.id;
        let fillColor = colors.default;

        if (regions.seAsia.includes(id)) fillColor = colors.seAsia;
        else if (regions.middleEast.includes(id)) fillColor = colors.middleEast;
        else if (regions.latinAmerica.includes(id)) fillColor = colors.latinAmerica;
        // EU removed from highlighting as per request
        // else if (regions.eu.includes(id)) fillColor = colors.eu;

        if (feature.properties.name === "Taiwan") fillColor = colors.seAsia;

        return {
            fillColor: fillColor,
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: fillColor === colors.default ? 0.3 : 0.6
        };
    };

    return (
        <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 z-0 relative bg-slate-50">
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%", background: '#f8fafc' }}
                attributionControl={false}
            >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />

                {geoJsonData && <GeoJSON data={geoJsonData} style={styleFeature} />}

                {labels.map((label, idx) => (
                    <React.Fragment key={idx}>
                        {/* 1. The Dot at the actual country location */}
                        <CircleMarker
                            center={label.coords}
                            radius={3}
                            pathOptions={{ color: '#0f172a', fillColor: '#0f172a', fillOpacity: 1, weight: 1 }}
                        />

                        {/* 2. The Leader Line connecting Dot to Label */}
                        <Polyline
                            positions={[label.coords, label.labelPos]}
                            pathOptions={{ color: '#64748b', weight: 1.5 }}
                        />

                        {/* 3. The Label (Flag + Name) at the offset position */}
                        <Marker
                            position={label.labelPos}
                            icon={createLabelIcon(label.iso, label.name, label.customImg)}
                        />
                    </React.Fragment>
                ))}
            </MapContainer>

            {/* Region Color Legend */}
            <div className="absolute bottom-6 left-6 bg-white/95 p-4 rounded-xl shadow-lg border border-slate-200 text-xs backdrop-blur-sm z-[1000] flex flex-col gap-2">
                <h4 className="font-bold text-slate-800 mb-1 text-sm">高DKD盛行率地區</h4>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full shadow-sm" style={{ background: colors.seAsia }}></div>
                    <span className="font-semibold text-slate-600">South-Eastern Asia</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full shadow-sm" style={{ background: colors.middleEast }}></div>
                    <span className="font-semibold text-slate-600">Middle East</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full shadow-sm" style={{ background: colors.latinAmerica }}></div>
                    <span className="font-semibold text-slate-600">Latin America</span>
                </div>
            </div>
        </div>
    );
}
