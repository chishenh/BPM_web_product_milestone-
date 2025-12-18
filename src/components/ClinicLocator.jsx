
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// --- Data ---
const clinicsData = {
    "台北市": [
        {
            name: "台北美兆診所",
            address: "台北市中正區忠孝西路一段66號44、45樓",
            phone: "02-2361-1500",
            website: "https://www.majorhealth.ai/branch/taipei",
            lat: 25.04709,
            lng: 121.51268
        },
        {
            name: "民生承安診所",
            address: "臺北市中山區民生東路三段90號",
            phone: "02 2503 2633",
            website: "http://www.cheng-an.com.tw/",
            lat: 25.06010,
            lng: 121.54284
        },
        {
            name: "育睿診所",
            address: "臺北市內湖區內湖路一段217巷35號",
            phone: "02 2656 0801",
            website: "https://www.facebook.com/yourrayclinic",
            lat: 25.08272,
            lng: 121.56930
        },
        {
            name: "欣奕檢驗所",
            address: "新北市永和區中山路一段 172號 8樓",
            phone: "(02) 8660-3316",
            website: "https://newcllab.tw/",
            lat: 25.00645,
            lng: 121.51465,
            note: "另有二部：新北市永和區中山路一段168號11樓 (02-2920-9181)"
        }
    ],
    "新北市": [
        {
            name: "耕莘醫院總院",
            address: "新北市新店區中正路362號",
            phone: "02-2219-3391",
            website: "https://www.cth.org.tw/",
            lat: 24.96821,
            lng: 121.53677
        },
        {
            name: "耕莘醫院安康院區",
            address: "新北市新店區車子路15號",
            phone: "02 2212 3066",
            website: "https://www.cth.org.tw/?aid=ankang",
            lat: 24.95460,
            lng: 121.50501
        }
    ],
    "新竹市": [
        {
            name: "億安診所",
            address: "新竹市東區民族路112號",
            phone: "03 535 3256",
            website: "https://www.i-an-clinic.com.tw/",
            lat: 24.80980,
            lng: 120.97630
        }
    ],
    "台中市": [
        {
            name: "台中美兆診所",
            address: "台中市西屯區工業區一路 2巷 3號 12樓之1",
            phone: "04-23598686",
            website: "https://www.majorhealth.ai/",
            lat: 24.17060,
            lng: 120.60830
        },
        {
            name: "安東診所",
            address: "台中市東區樂業路226號",
            phone: "(04) 2215-5788",
            website: "https://www.facebook.com/anton.drfu.clinic/",
            lat: 24.13530,
            lng: 120.69740
        },
        {
            name: "舒民診所",
            address: "臺中市西屯區福科二路8號1樓",
            phone: "(04)2452-9690",
            website: "http://www.shuming-clinic.com/",
            lat: 24.18520,
            lng: 120.64320
        },
        {
            name: "康普頓診所",
            address: "臺中市南屯區向上路一段658號1F",
            phone: "04-2322-6766",
            website: "https://www.kpt-antiaging.com.tw/",
            lat: 24.14810,
            lng: 120.64570
        },
        {
            name: "台宗檢驗所",
            address: "台中市中區三民路二段59號",
            phone: "04-22223216",
            website: "https://taizonglab.com/",
            lat: 24.14240,
            lng: 120.67890
        },
        {
            name: "民安中醫診所",
            address: "臺中市東區進化路185號",
            phone: "04 2213 1199",
            website: "https://alleasetcm.com/",
            lat: 24.14650,
            lng: 120.69530
        }
    ],
    "彰化縣": [
        {
            name: "謝立偉診所",
            address: "彰化縣和美鎮和西里道周路720號",
            phone: "(04) 756-8909",
            website: "http://meta-clinic.com.tw",
            lat: 24.11300,
            lng: 120.49650
        }
    ],
    "南投縣": [
        {
            name: "陳宏麟診所",
            address: "南投縣埔里鎮南昌街221號",
            phone: "(049) 2900303",
            website: "https://www.facebook.com/SamuelChenClinic/",
            lat: 23.96540,
            lng: 120.96630
        }
    ],
    "嘉義市": [
        {
            name: "曾良達診所",
            address: "嘉義市西區八德路338號",
            phone: "(05)233-3928",
            website: "http://www.dm100family.com/",
            lat: 23.48310,
            lng: 120.43670
        },
        {
            name: "安家診所",
            address: "嘉義市東區台林街221號",
            phone: "05-2775367",
            website: "https://anchia-clinic.tw",
            lat: 23.49620,
            lng: 120.45780
        }
    ],
    "高雄市": [
        {
            name: "立人檢驗所",
            address: "高雄市三民區信國路1號",
            phone: "(07) 389-0011",
            website: "http://www.lezen.com.tw/",
            lat: 22.64550,
            lng: 120.32340
        },
        {
            name: "高雄美兆診所",
            address: "高雄市新興區中正二路182號14樓之3",
            phone: "07 226 2288",
            website: "https://www.majorhealth.ai/",
            lat: 22.63050,
            lng: 120.31230
        },
        {
            name: "正峯診所",
            address: "高雄市三民區陽明路107號1樓",
            phone: "(07) 370-7290",
            website: "https://www.instagram.com/tsaopro/",
            lat: 22.64680,
            lng: 120.33950
        },
        {
            name: "健仁醫院",
            address: "高雄市楠梓區楠陽路136號",
            phone: "(07) 351-7166",
            website: "http://www.jiannren.org.tw/jiannren/index.php",
            lat: 22.72381,
            lng: 120.32907
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
            map.flyTo(coords, 16);
        }
    }, [coords, map]);
    return null;
}

function ClinicMarker({ clinic, isSelected, onSelect }) {
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
        }, 150); // Small delay to allow moving to popup
    };

    return (
        <Marker
            ref={markerRef}
            position={[clinic.lat, clinic.lng]}
            eventHandlers={{
                click: () => onSelect(clinic),
                mouseover: handleMouseOver,
                mouseout: handleMouseOut
            }}
        >
            <Popup className="clinic-popup" interactive={true}>
                <div
                    className="p-1"
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                >
                    <h3 className="font-bold text-base mb-2 text-primary">{clinic.name}</h3>
                    <p className="text-sm text-slate-600 mb-1">
                        <span className="font-medium">地址：</span>{clinic.address}
                    </p>
                    <p className="text-sm text-slate-600 mb-1">
                        <span className="font-medium">電話：</span>{clinic.phone}
                    </p>
                    {clinic.website && (
                        <p className="text-sm truncate">
                            <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                前往官網
                            </a>
                        </p>
                    )}
                    {clinic.note && (
                        <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-100">
                            {clinic.note}
                        </p>
                    )}
                </div>
            </Popup>
        </Marker>
    );
}

export default function ClinicLocator() {
    const [selectedCity, setSelectedCity] = useState("台北市");
    const [selectedClinic, setSelectedClinic] = useState(null);

    // Default centers for cities
    const cityCenters = {
        "台北市": [25.0330, 121.5654],
        "新北市": [25.0170, 121.4625],
        "新竹市": [24.8138, 120.9675],
        "台中市": [24.1477, 120.6736],
        "彰化縣": [24.0816, 120.5385],
        "南投縣": [23.9037, 120.6865],
        "嘉義市": [23.4755, 120.4473],
        "高雄市": [22.6273, 120.3014]
    };

    const currentClinics = clinicsData[selectedCity] || [];
    const allClinics = Object.values(clinicsData).flat();
    const mapCenter = cityCenters[selectedCity] || [25.0330, 121.5654];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <h3 className="text-2xl font-bold text-primary mb-6">全台特約診所</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
                {/* Left Column */}
                <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-slate-100 bg-slate-50">
                        <label className="block text-sm font-medium text-slate-700 mb-2">選擇縣市</label>
                        <select
                            className="w-full p-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            value={selectedCity}
                            onChange={(e) => {
                                setSelectedCity(e.target.value);
                                setSelectedClinic(null);
                            }}
                        >
                            {Object.keys(clinicsData).map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {currentClinics.map((clinic, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedClinic(clinic)}
                                className={`p-4 rounded-lg cursor-pointer transition-all hover:bg-slate-50 border ${selectedClinic?.name === clinic.name
                                    ? 'bg-primary/5 border-primary/30 ring-1 ring-primary/30'
                                    : 'bg-white border-transparent'
                                    }`}
                            >
                                <h4 className="font-bold text-slate-800">{clinic.name}</h4>
                                <div className="text-sm text-slate-500 mt-1 flex items-start gap-2">
                                    <span className="shrink-0">📍</span>
                                    <span>{clinic.address}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column - Map */}
                <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-sm border border-slate-100 relative h-full z-0">
                    <MapContainer
                        center={mapCenter}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MapUpdater center={mapCenter} zoom={13} />
                        {selectedClinic && <FlyToMarker coords={[selectedClinic.lat, selectedClinic.lng]} />}

                        {/* Render all markers for ALL cities, map view limits focus but all markers exist */}
                        {allClinics.map((clinic, idx) => (
                            <ClinicMarker
                                key={idx}
                                clinic={clinic}
                                isSelected={selectedClinic?.name === clinic.name}
                                onSelect={setSelectedClinic}
                            />
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
