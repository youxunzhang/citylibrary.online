// Render city list
const cityListDiv = document.getElementById('city-list');
const libraryListDiv = document.getElementById('library-list');
const modal = document.getElementById('library-modal');
const modalContent = document.getElementById('library-details');
const closeBtn = document.querySelector('.close-btn');

let currentCityIndex = 0;

function renderCities() {
  // Keep title
  const title = cityListDiv.querySelector('h2');
  cityListDiv.innerHTML = '';
  cityListDiv.appendChild(title);
  
  germanyLibraryData.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = 'city-btn' + (idx === currentCityIndex ? ' active' : '');
    btn.textContent = item.city;
    btn.onclick = () => {
      currentCityIndex = idx;
      renderCities();
      renderLibraries();
    };
    cityListDiv.appendChild(btn);
  });
}

function renderLibraries() {
  libraryListDiv.innerHTML = '';
  const libraries = germanyLibraryData[currentCityIndex].libraries;
  
  if (libraries.length === 0) {
    libraryListDiv.innerHTML = '<p style="text-align: center; color: #718096; font-size: 1.1rem;">No library information available for this city</p>';
    return;
  }
  
  libraries.forEach((lib, idx) => {
    const card = document.createElement('div');
    card.className = 'library-card';
    card.innerHTML = `
      <h3>${lib.name}</h3>
      <p>📍 ${lib.address}</p>
      <p>📞 ${lib.phone}</p>
    `;
    card.onclick = () => showLibraryDetails(lib);
    libraryListDiv.appendChild(card);
  });
}

function showLibraryDetails(lib) {
  modalContent.innerHTML = `
    <h2>${lib.name}</h2>
    <p><strong>📍 Address: </strong>${lib.address}</p>
    <p><strong>📞 Phone: </strong>${lib.phone}</p>
    <p><strong>🌐 Website: </strong><a href="${lib.website}" target="_blank">${lib.website}</a></p>
    <p><strong>📖 Description: </strong>${lib.description}</p>
  `;
  
  // Add animation effect
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

closeBtn.onclick = function() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
};

window.onclick = function(event) {
  if (event.target === modal) {
    closeBtn.onclick();
  }
};

// Keyboard events
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeBtn.onclick();
  }
});

// Initialize
renderCities();
renderLibraries(); 