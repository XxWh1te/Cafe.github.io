const sidebar = document.getElementById('sidebar');
const toggleTheme = document.getElementById('theme-toggle');
const collapseBtn = document.querySelector('.toggle-sidebar');
const collapseIcon = document.getElementById('collapse-icon');

toggleTheme.addEventListener('change', () => {
  sidebar.classList.toggle('dark');
  document.body.classList.toggle('dark');
});

collapseBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  if(sidebar.classList.contains('collapsed')) {
    collapseIcon.classList.remove('fa-angle-double-left');
    collapseIcon.classList.add('fa-angle-double-right');
  } else {
    collapseIcon.classList.remove('fa-angle-double-right');
    collapseIcon.classList.add('fa-angle-double-left');
  }
});

// Selecciona todos los ítems del menú
const menuItems = document.querySelectorAll('.menu-item');

// Asigna el evento click a cada uno
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remueve 'active' de todos
    menuItems.forEach(i => i.classList.remove('active'));
    // Agrega 'active' al que fue clicado
    item.classList.add('active');
  });
});

