var map = L.map('map').setView([39.9334, 32.8597], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    {lat: 38.676963089350345, lon: 26.750876194015795, popup: "<strong>Summer Training Camp</strong> (Participant)<br> Turkish Chamber of Survey and Cadastre Engineers <br>(29.08.2022-4.09.2022)"},
    {lat: 39.95844334077721, lon: 32.770208195165765, popup: "<strong>Remote Sensing and Geographic Information Systems Symposium</strong> (Participant)<br> T.C. Ministry of Environment, Urbanisation and Climate Change<br>(17, 18.09.2022)"},    
    {lat: 39.899309296779826, lon: 32.82082328861557, popup: "<strong>Geographic Information Systems Congress</strong> (Participant)<br> Turkish Chamber of Survey and Cadastre Engineers <br>(03 - 05.10.2022)"},      
    {lat: 39.8987851367644,  lon: 32.8197069369165, popup: "<strong>Türkiye Mapping Scientific and Technical Congress</strong> (Participant)<br> Turkish Chamber of Survey and Cadastre Engineers <br>(04 - 06.10.2023)"},
    {lat: 36.91854094582638, lon: 30.713464178505017, popup: "<strong>Software Camp</strong> (Participant)<br> Turkish Chamber of Survey and Cadastre Engineers <br>(05 - 10.02.2024)"}
];

locations.forEach(function(location, index) {
    var marker = L.marker([location.lat, location.lon]).addTo(map);
    marker.bindPopup(location.popup);

    var li = document.createElement('li');
    li.textContent = location.popup.split('<strong>')[1].split('</strong>')[0];
    li.onclick = function() {
        map.setView([location.lat, location.lon], 10); 
        marker.openPopup(); 
    };
    document.getElementById('locations').appendChild(li);
});

const header   = document.querySelector('.header');
const headerH  = header.offsetHeight;
const sections = Array.from(document.querySelectorAll('section[id]'))
                      .sort((a, b) => a.offsetTop - b.offsetTop);
const navLinks = document.querySelectorAll('.navbar a');

function updateActiveNav() {
  const scrollPos = window.pageYOffset + headerH + 1;
  let currentId = sections[0].id;

  for (let sec of sections) {
    if (sec.offsetTop <= scrollPos) {
      currentId = sec.id;
    } else {
      break;
    }
  }

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${currentId}`
    );
  });
}

// Yüklendiğinde ve kaydırıldıkça çalıştır
window.addEventListener('load',  updateActiveNav);
window.addEventListener('scroll', updateActiveNav);
