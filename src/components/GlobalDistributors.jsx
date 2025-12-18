
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'flag-icons/css/flag-icons.min.css';
import L from 'leaflet';

// --- Data ---
const distributorsData = {
    "Asia": [
        {
            country: "Taiwan",
            distributor: "瑞博企業有限公司",
            address: "11F, No. 174 Chung Shan Rd., Sec.1, Young-Ho City, New Taipei City",
            phone: "+886-2-89232153",
            website: "http://ditech.com.tw/index.html",
            lat: 25.0118,
            lng: 121.5114,
            flag: "tw"
        },
        {
            country: "Japan",
            distributor: "PreMedica",
            address: "Minato-ku, Tokyo, Japan",
            phone: null,
            website: "https://www.premedica.co.jp/",
            lat: 35.6586,
            lng: 139.7454,
            flag: "jp"
        },
        {
            country: "Singapore",
            distributor: "Weavegen",
            address: "21 Tan Quee Lan Street, #02-04 Heritage Place, Singapore 188108",
            phone: null,
            website: "https://www.weavegen.com/",
            lat: 1.2976,
            lng: 103.8556,
            flag: "sg"
        },
        {
            country: "Malaysia",
            distributor: "Weavegen, Biomed Global",
            address: "Kuala Lumpur, Malaysia",
            phone: "+603-6287 0066",
            website: "https://www.biomedglobal.com/",
            lat: 3.1390,
            lng: 101.6869,
            flag: "my"
        },
        {
            country: "Hong Kong",
            distributor: "Bridgeway",
            address: "Kowloon Bay, Hong Kong",
            phone: null,
            website: null,
            lat: 22.3232,
            lng: 114.2148,
            flag: "hk"
        },
        {
            country: "Sri Lanka",
            distributor: "GEORGE STEUART HEALTH",
            address: "Colombo, Sri Lanka",
            phone: null,
            website: "https://georgesteuart.lk/",
            lat: 6.9271,
            lng: 79.8612,
            flag: "lk"
        }
    ],
    "Middle East": [
        {
            country: "Kuwait",
            distributor: "Advanced Medical German company",
            address: "Kuwait City, Kuwait",
            phone: null,
            website: "http://amgkwt.com/",
            lat: 29.3759,
            lng: 47.9774,
            flag: "kw"
        },
        {
            country: "Qatar",
            distributor: "Advanced Medical German company",
            address: "Doha, Qatar",
            phone: null,
            website: "http://amgkwt.com/",
            lat: 25.2854,
            lng: 51.5310,
            flag: "qa"
        },
        {
            country: "United Arab Emirates",
            distributor: "Advanced Medical German company",
            address: "Dubai, UAE",
            phone: null,
            website: "http://amgkwt.com/",
            lat: 25.2048,
            lng: 55.2708,
            flag: "ae"
        }
    ],
    "Europe": [
        {
            country: "Nordic (Sweden/Norway/Finland)",
            distributor: "Xboxlab",
            address: "Stockholm, Sweden (Regional HQ)",
            phone: null,
            website: "https://xboxlab.se/",
            lat: 59.3293,
            lng: 18.0686,
            flag: "se"
        },
        {
            country: "Czech Republic",
            distributor: "Promedeus Lab",
            address: "Maříkova 1899/1, 621 00 Brno",
            phone: "+420 606 640 992",
            website: "https://www.promedeuslab.cz/",
            lat: 49.2323,
            lng: 16.5756,
            flag: "cz"
        },
        {
            country: "Romania",
            distributor: "Prolabdx",
            address: "Șoseaua Fabrica de Glucoză 17, building A1, Bucharest",
            phone: "+40 (722) 325 342",
            website: "https://prolabdx.com/",
            lat: 44.4735,
            lng: 26.1264,
            flag: "ro"
        },
        {
            country: "Republic of Croatia",
            distributor: "Teamed",
            address: "Varaždin, Croatia",
            phone: null,
            website: "http://www.teamed.hr/",
            lat: 46.3121,
            lng: 16.3370,
            flag: "hr"
        }
    ],
    "Americas": [
        {
            country: "United States",
            distributor: "Precision Diabetes",
            address: "Raleigh, NC, USA",
            phone: null,
            website: "https://precisiondiabetesinc.com/",
            lat: 35.7796,
            lng: -78.6382,
            flag: "us"
        },
        {
            country: "Mexico",
            distributor: "Flores Medical",
            address: "Mexico City, Mexico",
            phone: null,
            website: null,
            lat: 19.4326,
            lng: -99.1332,
            flag: "mx"
        },
        {
            country: "Guatemala",
            distributor: "Flores Medical",
            address: "Guatemala City, Guatemala",
            phone: null,
            website: null,
            lat: 14.6349,
            lng: -90.5069,
            flag: "gt"
        },
        {
            country: "Brazil",
            distributor: "Flores Medical",
            address: "São Paulo, Brazil",
            phone: null,
            website: null,
            lat: -23.5505,
            lng: -46.6333,
            flag: "br"
        }
    ],
    "Africa": [
        {
            country: "Egypt",
            distributor: "Advanced Medical German company",
            address: "Cairo, Egypt",
            phone: null,
            website: "http://amgkwt.com/",
            lat: 30.0444,
            lng: 31.2357,
            flag: "eg"
        }
    ],
    "Oceania": [
        {
            country: "Australia & New Zealand",
            distributor: "In Vitro Technologies",
            address: "Noble Park North, VIC, Australia",
            phone: "1300 552 003",
            website: "https://www.invitro.com.au/",
            lat: -37.9547,
            lng: 145.1866,
            flag: "au"
        }
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

function DistributorMarker({ dist, isSelected, onSelect, createIcon }) {
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
            position={[dist.lat, dist.lng]}
            icon={createIcon(dist.flag)}
            eventHandlers={{
                click: () => onSelect(dist),
                mouseover: handleMouseOver,
                mouseout: handleMouseOut
            }}
        >
            <Popup className="distributor-popup" interactive={true}>
                <div
                    className="p-1"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                >
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`fi fi-${dist.flag} text-xl rounded-sm`}></span>
                        <h3 className="font-bold text-base text-slate-800">{dist.country}</h3>
                    </div>
                    <p className="font-bold text-secondary mb-2">{dist.distributor}</p>
                    <p className="text-sm text-slate-600 mb-1">
                        <span className="font-medium">Address: </span>{dist.address}
                    </p>
                    {dist.phone && (
                        <p className="text-sm text-slate-600 mb-1">
                            <span className="font-medium">Tel: </span>{dist.phone}
                        </p>
                    )}
                    {dist.website && (
                        <p className="text-sm truncate mt-2">
                            <a href={dist.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                Visit Website
                            </a>
                        </p>
                    )}
                </div>
            </Popup>
        </Marker>
    );
}

export default function GlobalDistributors() {
    const [selectedRegion, setSelectedRegion] = useState("Asia");
    const [selectedDistributor, setSelectedDistributor] = useState(null);

    // Default centers for regions
    const regionCenters = {
        "Asia": [20, 100],
        "Middle East": [25, 45],
        "Europe": [50, 15],
        "Americas": [10, -80],
        "Africa": [10, 20],
        "Oceania": [-25, 135]
    };

    const currentDistributors = distributorsData[selectedRegion] || [];
    const allDistributors = Object.values(distributorsData).flat();
    const mapCenter = regionCenters[selectedRegion] || [20, 0];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16 border-t border-slate-100">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                    Global Partners
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">全球經銷商據點</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    我們的合作夥伴遍布全球，為您提供最即時的服務與支援。
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                {/* Left Column */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-slate-100 bg-slate-50">
                        <label className="block text-sm font-medium text-slate-700 mb-2">選擇地區 (Region)</label>
                        <select
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            value={selectedRegion}
                            onChange={(e) => {
                                setSelectedRegion(e.target.value);
                                setSelectedDistributor(null);
                            }}
                        >
                            {Object.keys(distributorsData).map(region => (
                                <option key={region} value={region}>{region}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {currentDistributors.map((dist, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedDistributor(dist)}
                                className={`p-4 rounded-lg cursor-pointer transition-all hover:bg-slate-50 border ${selectedDistributor?.country === dist.country
                                    ? 'bg-secondary/5 border-secondary/30 ring-1 ring-secondary/30'
                                    : 'bg-white border-transparent'
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`fi fi-${dist.flag} text-2xl rounded-sm shadow-sm`}></span>
                                    <h4 className="font-bold text-slate-800">{dist.country}</h4>
                                </div>
                                <div className="pl-[2.75rem]">
                                    <p className="font-medium text-secondary">{dist.distributor}</p>
                                    <p className="text-sm text-slate-500 mt-1">{dist.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Map */}
                <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-sm border border-slate-100 relative h-full bg-slate-50 z-0">
                    <MapContainer
                        center={mapCenter}
                        zoom={3}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapUpdater center={mapCenter} zoom={3} />
                        {selectedDistributor && <FlyToMarker coords={[selectedDistributor.lat, selectedDistributor.lng]} />}

                        {/* Render all markers for ALL regions, but map limits view to selected region via MapUpdater */}
                        {allDistributors.map((dist, idx) => (
                            <DistributorMarker
                                key={idx}
                                dist={dist}
                                isSelected={selectedDistributor?.country === dist.country}
                                onSelect={setSelectedDistributor}
                                createIcon={createCustomIcon}
                            />
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
