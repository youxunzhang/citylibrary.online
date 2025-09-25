// 渲染城市列表
const cityListDiv = document.getElementById('city-list');
const libraryListDiv = document.getElementById('library-list');
const modal = document.getElementById('library-modal');
const modalContent = document.getElementById('library-details');
const closeBtn = document.querySelector('.close-btn');

if (!cityListDiv || !libraryListDiv || !modal || !modalContent || !closeBtn) {
  return;
}

let currentCityIndex = 0;

function renderCities() {
  // 保留标题
  const title = cityListDiv.querySelector('h2');
  cityListDiv.innerHTML = '';
  cityListDiv.appendChild(title);
  
  libraryData.forEach((item, idx) => {
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
  const libraries = libraryData[currentCityIndex].libraries;
  
  if (libraries.length === 0) {
    libraryListDiv.innerHTML = '<p style="text-align: center; color: #718096; font-size: 1.1rem;">该城市暂无图书馆信息</p>';
    return;
  }
  
  libraries.forEach((lib, idx) => {
    const card = document.createElement('div');
    card.className = 'library-card';
    card.innerHTML = `
      <div class="library-image">
        <img src="${lib.image}" alt="${lib.name}" onerror="this.src='images/default-library.svg'">
      </div>
      <div class="library-info">
        <h3>${lib.name}</h3>
        <p>📍 ${lib.address}</p>
        <p>📞 ${lib.phone}</p>
      </div>
    `;
    card.onclick = () => showLibraryDetails(lib);
    libraryListDiv.appendChild(card);
  });
}

function showLibraryDetails(lib) {
  modalContent.innerHTML = `
    <div class="modal-header">
      <img src="${lib.image}" alt="${lib.name}" onerror="this.src='images/default-library.svg'">
      <h2>${lib.name}</h2>
    </div>
    <div class="modal-body">
      <p><strong>📍 地址：</strong>${lib.address}</p>
      <p><strong>📞 电话：</strong>${lib.phone}</p>
      <p><strong>🌐 官网：</strong><a href="${lib.website}" target="_blank">${lib.website}</a></p>
      <p><strong>📖 简介：</strong>${lib.description}</p>
    </div>
  `;
  
  // 添加动画效果
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

// 键盘事件
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeBtn.onclick();
  }
});

// 初始化
renderCities();
renderLibraries(); 