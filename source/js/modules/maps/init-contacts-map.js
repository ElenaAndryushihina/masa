const L = window.L;

const initContactsMap = () => {
  // указание координат
  const geoLat = 55.028527396640804; /* Широта, Latitude, lat */
  const geoLon = 82.92824989073691; /* Долгота, Longitude, lng */

  // Где вывести карту.
  const element = document.getElementById('os-map');

  // Создание карты Leaflet.
  const map = new L.Map(element, {scrollWheelZoom: false}).setView([geoLat, geoLon], 14);
  L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="copyright">Openstreetmap</a>',
    maxZoom: 18,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
  }).addTo(map);

  // Создание своей метки для карты.
  const myIcon = L.icon({
    iconUrl: 'img/svg/map-pin.svg',
    iconSize: [51, 70],
    iconAnchor: [10, 75],
  });

  // Координаты GPS для метки.
  const target = L.latLng([geoLat, geoLon]);

  // Установка центра карты с масштабом 19.
  map.setView(target, 19);

  // Установка маркера в том же месте.
  L.marker(target, {icon: myIcon}).addTo(map);

};

export {initContactsMap};
