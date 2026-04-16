document.addEventListener('DOMContentLoaded', () => {
    // Sidebar menu toggle
    const brailleBtn = document.querySelector('.header-toggle i');
    const sidebarMenu = document.getElementById('sidebarPanel');
    brailleBtn.style.cursor = 'pointer';
    brailleBtn.addEventListener('click', () => {
        sidebarMenu.classList.toggle('active');
        document.querySelector('.header').classList.toggle('move-right', sidebarMenu.classList.contains('active'));
    });

    // 1. Inicializar el mapa
    // Coordenadas de San Rámon, Santiago de Chile
    let  initLat = -33.5532855;
    let initLng = -70.6528958;
    const map = L.map('map').setView([initLat, initLng], 17);

    // 2. Añadir una capa de tiles (mapa base) de OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // 3. Crear iconos personalizados para los marcadores
    const markerIcon = (imageUrl) => L.divIcon({
        className: 'custom-marker',
        html: `<img src="${imageUrl}" style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover;">`,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [0, -45]
    });

    // 4. Datos dummy para los puntos de interés cerca de San Ramón
    const iconImage = "data/images/icons/coso_sin_fondo.png";
    const locations = [
  {
    coords: [-33.5532855, -70.6528958],
    name: 'Punto de Interés Central',
    image: iconImage,
    description: 'Punto de referencia inicial para el área.'
  },
  {
    coords: [-33.5489123, -70.6657432],
    name: 'Farmacia El Ahorro',
    image: iconImage,
    description: 'Farmacia con gran variedad de medicamentos y productos de cuidado personal. Ofrecen descuentos especiales.'
  },
  {
    coords: [-33.5617890, -70.6419876],
    name: 'Taller Mecánico El Motor',
    image: iconImage,
    description: 'Servicios de reparación y mantenimiento para todo tipo de vehículos. ¡Expertos en motores y frenos!'
  },
  {
    coords: [-33.5555432, -70.6784567],
    name: 'Tienda de Ropa La Moda',
    image: iconImage,
    description: 'Las últimas tendencias en moda para hombres y mujeres. Ven a renovar tu guardarropa.'
  },
  {
    coords: [-33.5428765, -70.6501234],
    name: 'Café La Taza Dorada',
    image: iconImage,
    description: 'Un lugar acogedor para disfrutar de un buen café y deliciosos pasteles. Ambiente tranquilo para trabajar o leer.'
  },
  {
    coords: [-33.5678901, -70.6587654],
    name: 'Supermercado El Mercado',
    image: iconImage,
    description: 'Amplio surtido de productos frescos, lácteos y abarrotes. ¡Todo lo que necesitas en un solo lugar!'
  },
  {
    coords: [-33.5501987, -70.6456789],
    name: 'Pizzería El Horno',
    image: iconImage,
    description: 'Pizzas artesanales con ingredientes frescos y el toque de la casa. ¡La mejor pizza de la zona!'
  },
  {
    coords: [-33.5587654, -70.6689012],
    name: 'Gimnasio El Músculo',
    image: iconImage,
    description: 'Modernas instalaciones y entrenadores personales para ayudarte a alcanzar tus metas de fitness.'
  },
  {
    coords: [-33.5456789, -70.6623456],
    name: 'Librería El Saber',
    image: iconImage,
    description: 'Gran selección de libros de todos los géneros, artículos de papelería y mucho más para los amantes de la lectura.'
  },
  {
    coords: [-33.5643210, -70.6554321],
    name: 'Heladería El Glaciar',
    image: iconImage,
    description: 'Los helados más refrescantes y con sabores únicos. ¡Perfecto para un día caluroso!'
  }
];

    // 5. Añadir los marcadores al mapa
    locations.forEach(location => {
        L.marker(location.coords, { icon: markerIcon(location.image) })
            .addTo(map)
            .bindPopup(`
        <b>${location.name}</b><br>${location.description}
    `);
    });

    // Localización en tiempo real del usuario
    let userMarker = null;
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (pos) => {
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                if (!userMarker) {
                    userMarker = L.marker([lat, lng], {
                        icon: L.icon({
                            iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
                            iconSize: [32, 32],
                            iconAnchor: [16, 32],
                            popupAnchor: [0, -32]
                        })
                    }).addTo(map).bindPopup('¡Tu ubicación actual!').openPopup();
                    map.setView([lat, lng], 16);
                } else {
                    userMarker.setLatLng([lat, lng]);
                }
            },
            (err) => {
                console.warn('Error obteniendo ubicación:', err);
            },
            { enableHighAccuracy: true, maximumAge: 10000, timeout: 20000 }
        );
    } else {
        console.warn('Geolocalización no soportada por este navegador.');
    }

});