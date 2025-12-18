import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'flag-icons/css/flag-icons.min.css';
import L from 'leaflet';

// --- Data ---
const certificationsData = {
    "Asia": [
        { country: "Taiwan", acronym: "TFDA", agency: "Taiwan Food and Drug Administration", iso: "tw", lat: 23.6978, lng: 120.9605, logo: "/logos/tfda_logo.jpg" },
        { country: "Malaysia", acronym: "MDA", agency: "Medical Device Authority", iso: "my", lat: 4.2105, lng: 101.9758, logo: "/logos/mda_logo.png" },
        { country: "Thailand", acronym: "Thai FDA", agency: "Food and Drug Administration", iso: "th", lat: 15.8700, lng: 100.9925, logo: "/logos/thailand.svg" },
        { country: "Vietnam", acronym: "MoH", agency: "Ministry of Health", iso: "vn", lat: 14.0583, lng: 108.2772, logo: "/logos/vietnam.svg" },
        { country: "Indonesia", acronym: "MoH", agency: "Ministry of Health", iso: "id", lat: -0.7893, lng: 113.9213, logo: "/logos/indonesia.svg" },
        { country: "Singapore", acronym: "HSA", agency: "Health Sciences Authority", iso: "sg", lat: 1.3521, lng: 103.8198, logo: "/logos/hsa_logo.png" }
    ],
    "Middle East": [
        { country: "Saudi Arabia", acronym: "SFDA", agency: "Saudi Food and Drug Authority", iso: "sa", lat: 23.8859, lng: 45.0792, logo: "/logos/sfda_logo.png" },
        { country: "UAE", acronym: "MoHAP", agency: "Ministry of Health and Prevention", iso: "ae", lat: 23.4241, lng: 53.8478, logo: "/logos/mohap_logo.png" },
        { country: "Kuwait", acronym: "MoH", agency: "Ministry of Health", iso: "kw", lat: 29.3117, lng: 47.4818, logo: "/logos/kuwait_moh_logo.png" },
        { country: "Turkey", acronym: "TİTCK", agency: "Turkish Medicines and Medical Devices Agency", iso: "tr", lat: 38.9637, lng: 35.2433, logo: "/logos/titck_logo.png" }
    ],
    "Europe": [
        { country: "EU", acronym: "CA/NB", agency: "Competent Authority / Notified Body", iso: "eu", lat: 50.8503, lng: 4.3517, logo: "/logos/eu_ivdr_logo.png" }
    ],
    "Central & South America": [
        { country: "Mexico", acronym: "COFEPRIS", agency: "Comisión Federal para la Protección contra Riesgos Sanitarios", iso: "mx", lat: 23.6345, lng: -102.5528, logo: "/logos/mexico.png" },
        { country: "Guatemala", acronym: "MSPAS", agency: "Ministerio de Salud Pública y Asistencia Social", iso: "gt", lat: 15.7835, lng: -90.2308, logo: "/logos/guatemala.png" },
        { country: "Brazil", acronym: "ANVISA", agency: "Agência Nacional de Vigilância Sanitária", iso: "br", lat: -14.2350, lng: -51.9253, logo: "/logos/brazil.png" }
    ],
    "Oceania": [
        { country: "Australia", acronym: "TGA", agency: "Therapeutic Goods Administration", iso: "au", lat: -25.2744, lng: 133.7751, logo: "/logos/tga_logo.png" }
    ]
};

// --- Components ---

function MapUpdater({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

function FlyToMarker({ coords }) {
    const map = useMap();
    useEffect(() => {
        if (coords) {
            map.flyTo(coords, 5);
        }
    }, [coords, map]);
    return null;
}

const createCustomIcon = (flagCode) => {
    return L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md border border-slate-200">
                <span class="fi fi-${flagCode} rounded-sm" style="font-size: 1.25em;"></span>
               </div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        popupAnchor: [0, -16]
    });
};

function CertificationMarker({ item, isSelected, onSelect, createIcon }) {
    const markerRef = React.useRef(null);
    const timeoutRef = React.useRef(null);

    useEffect(() => {
        if (isSelected && markerRef.current) {
            markerRef.current.openPopup();
        }
    }, [isSelected]);

    const handleMouseOver = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        if (markerRef.current) {
            markerRef.current.openPopup();
        }
    };

    const handleMouseOut = () => {
        timeoutRef.current = setTimeout(() => {
            if (markerRef.current) {
                markerRef.current.closePopup();
            }
        }, 150);
    };

    return (
        <Marker
            ref={markerRef}
            position={[item.lat, item.lng]}
            icon={createIcon(item.iso)}
            eventHandlers={{
                click: () => onSelect(item),
                mouseover: handleMouseOver,
                mouseout: handleMouseOut
            }}
        >
            <Popup className="certification-popup" interactive={true}>
                <div
                    className="p-3 min-w-[300px]"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                >
                    <div className="flex items-center gap-4">
                        {/* Left Column: Text Info */}
                        <div className="flex-1 min-w-0">
                            {/* Flag + Country */}
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className={`fi fi-${item.iso} rounded-sm shadow-sm text-base`}></span>
                                <h3 className="font-bold text-base text-slate-800 leading-tight">{item.country}</h3>
                            </div>

                            {/* Regulatory Info */}
                            <div>
                                <p className="font-bold text-sm text-secondary mb-0.5">{item.acronym}</p>
                                <p className="text-xs text-slate-600 leading-snug line-clamp-2">
                                    {item.agency}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Logo */}
                        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg border border-slate-100 shadow-sm shrink-0 p-1">
                            {item.logo ? (
                                <img src={item.logo} alt={`${item.acronym} Logo`} className="w-full h-full object-contain" />
                            ) : (
                                <span className={`fi fi-${item.iso} text-3xl rounded-sm opacity-20`}></span>
                            )}
                        </div>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default function GlobalMap() {
    const [selectedRegion, setSelectedRegion] = useState("Asia");
    const [selectedItem, setSelectedItem] = useState(null);

    // Default centers for regions
    const regionCenters = {
        "Asia": [15, 105],
        "Middle East": [25, 45],
        "Europe": [50, 15],
        "Central & South America": [-10, -60],
        "Oceania": [-25, 135]
    };

    const currentItems = certificationsData[selectedRegion] || [];
    const allItems = Object.values(certificationsData).flat();
    const mapCenter = regionCenters[selectedRegion] || [20, 0];

    return (
        <div className="w-full h-[600px] bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 z-0 relative">
            <div className="flex flex-col lg:flex-row h-full">
                {/* Left Column - List */}
                <div className="w-full lg:w-auto lg:min-w-[300px] lg:max-w-[40%] shrink-0 border-r border-slate-100 flex flex-col bg-slate-50/50">
                    <div className="p-4 border-b border-slate-100 bg-white">
                        <label className="block text-sm font-medium text-slate-700 mb-2">選擇地區 (Region)</label>
                        <select
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            value={selectedRegion}
                            onChange={(e) => {
                                setSelectedRegion(e.target.value);
                                setSelectedItem(null);
                            }}
                        >
                            {Object.keys(certificationsData).map(region => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {currentItems.map((item, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedItem(item)}
                                className={`p-3 min-w-[280px] rounded-lg cursor-pointer transition-all hover:bg-white hover:shadow-sm border ${selectedItem?.country === item.country
                                    ? 'bg-white border-secondary/30 ring-1 ring-secondary/30 shadow-sm'
                                    : 'bg-transparent border-transparent'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    {/* Left Column: Text Info */}
                                    <div className="flex-1 min-w-0">
                                        {/* Flag + Country */}
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className={`fi fi-${item.iso} rounded-sm shadow-sm text-base`}></span>
                                            <h3 className="font-bold text-base text-slate-800 leading-tight">{item.country}</h3>
                                        </div>

                                        {/* Regulatory Info */}
                                        <div>
                                            <p className="font-bold text-sm text-secondary mb-0.5">{item.acronym}</p>
                                            <p className="text-xs text-slate-600 leading-snug line-clamp-2">
                                                {item.agency}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Column: Logo */}
                                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg border border-slate-100 shadow-sm shrink-0 p-1">
                                        {item.logo ? (
                                            <img src={item.logo} alt={`${item.acronym} Logo`} className="w-full h-full object-contain" />
                                        ) : (
                                            <span className={`fi fi-${item.iso} text-3xl rounded-sm opacity-20`}></span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Map */}
                <div className="flex-1 h-[400px] lg:h-full relative bg-slate-50 z-0">
                    <MapContainer
                        center={mapCenter}
                        zoom={3}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                        attributionControl={false}
                    >
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        />
                        <MapUpdater center={mapCenter} zoom={3} />
                        {selectedItem && <FlyToMarker coords={[selectedItem.lat, selectedItem.lng]} />}

                        {allItems.map((item, idx) => (
                            <CertificationMarker
                                key={idx}
                                item={item}
                                isSelected={selectedItem?.country === item.country}
                                onSelect={setSelectedItem}
                                createIcon={createCustomIcon}
                            />
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
