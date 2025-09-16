// Render city list
const cityListDiv = document.getElementById('city-list');
const bookClubListDiv = document.getElementById('bookclub-list');
const modal = document.getElementById('bookclub-modal');
const modalContent = document.getElementById('bookclub-details');
const closeBtn = document.querySelector('.close-btn');

let currentCityIndex = 0;

function renderCities() {
  // Keep title
  const title = cityListDiv.querySelector('h2');
  cityListDiv.innerHTML = '';
  cityListDiv.appendChild(title);
  
  bookClubData.forEach((item, idx) => {
    const btn = document.createElement('button');
    btn.className = 'city-btn' + (idx === currentCityIndex ? ' active' : '');
    btn.textContent = item.city;
    btn.onclick = () => {
      currentCityIndex = idx;
      renderCities();
      renderBookClubs();
    };
    cityListDiv.appendChild(btn);
  });
}

function renderBookClubs() {
  bookClubListDiv.innerHTML = '';
  const bookClubs = bookClubData[currentCityIndex].bookClubs;
  
  if (bookClubs.length === 0) {
    bookClubListDiv.innerHTML = '<p style="text-align: center; color: #718096; font-size: 1.1rem;">No book club information available for this city</p>';
    return;
  }
  
  bookClubs.forEach((club, idx) => {
    const card = document.createElement('div');
    card.className = 'library-card';
    card.innerHTML = `
      <div class="library-image">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop&crop=center" alt="${club.name}">
      </div>
      <div class="library-info">
        <h3>${club.name}</h3>
        <p>📍 ${club.address}</p>
        <p>📞 ${club.phone}</p>
        <p>📅 ${club.meetingTime}</p>
        <p>💰 ${club.membershipFee}</p>
        <p>📖 Currently Reading: ${club.currentBook}</p>
      </div>
    `;
    card.onclick = () => showBookClubDetails(club);
    bookClubListDiv.appendChild(card);
  });
}

function showBookClubDetails(club) {
  modalContent.innerHTML = `
    <div class="modal-header">
      <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=80&h=80&fit=crop&crop=center" alt="${club.name}">
      <h2>${club.name}</h2>
    </div>
    <div class="modal-body">
      <p><strong>📍 Address: </strong>${club.address}</p>
      <p><strong>📞 Phone: </strong>${club.phone}</p>
      <p><strong>🌐 Website: </strong><a href="${club.website}" target="_blank">${club.website}</a></p>
      <p><strong>📅 Meeting Time: </strong>${club.meetingTime}</p>
      <p><strong>💰 Membership Fee: </strong>${club.membershipFee}</p>
      <p><strong>📖 Currently Reading: </strong>${club.currentBook}</p>
      <p><strong>📖 Description: </strong>${club.description}</p>
    </div>
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
renderBookClubs();
