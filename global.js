// Lab 3: Introduction to JS

console.log("IT'S ALIVE!");

// Helper function to get array of elements
function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Step 3: Automatic navigation menu
const BASE_PATH =
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? '/'
    : '/portfolio/'; // GitHub Pages repo name

let pages = [
  { url: '', title: 'Home' },
  { url: '#about', title: 'About' },
  { url: '#experience', title: 'Experience' },
  { url: '#skills', title: 'Skills' },
  { url: '#contact', title: 'Contact' },
  { url: 'https://github.com/rvasappa-ucsd', title: 'GitHub' },
];

// Create navigation menu
let nav = document.createElement('nav');
let navContainer = document.createElement('div');
navContainer.className = 'nav-container';

// Add logo
let logo = document.createElement('div');
logo.className = 'logo';
logo.textContent = 'RV';
navContainer.appendChild(logo);

// Create navigation links container
let navLinks = document.createElement('ul');
navLinks.className = 'nav-links';

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  // Add BASE_PATH to relative URLs
  if (!url.startsWith('http') && !url.startsWith('#')) {
    url = BASE_PATH + url;
  }

  // Create list item
  let li = document.createElement('li');
  
  // Create link
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;

  // Step 3.2: Highlight current page
  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('active');
  }

  // Step 3.2: Open external links in new tab
  if (a.host !== location.host) {
    a.target = '_blank';
  }

  li.appendChild(a);
  navLinks.appendChild(li);
}

navContainer.appendChild(navLinks);
nav.appendChild(navContainer);

// Prepend navigation to body
document.body.prepend(nav);

// Step 4: Dark Mode Implementation

// Step 4.4: Function to set color scheme
function setColorScheme(colorScheme) {
  console.log('setColorScheme called with:', colorScheme);
  
  // Set the color-scheme CSS property on the root element
  document.documentElement.style.colorScheme = colorScheme;
  
  // Also add a data attribute for CSS targeting
  if (colorScheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (colorScheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  
  console.log('✓ Color scheme set to:', colorScheme);
  console.log('✓ data-theme attribute:', document.documentElement.getAttribute('data-theme'));
  console.log('✓ style.colorScheme:', document.documentElement.style.colorScheme);
}

// Step 4.2: Add dark mode switcher
document.body.insertAdjacentHTML(
  'afterbegin',
  `<label class="color-scheme">
    🎨 Theme:
    <select id="theme-select">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>`
);

// Step 4.4: Make dark mode switcher work
// Query the select element after it's been added to the DOM
let select = document.getElementById('theme-select');

if (select) {
  console.log('✓ Theme select found!');
  
  // Step 4.5: Load saved preference on page load
  if ('colorScheme' in localStorage) {
    let savedScheme = localStorage.colorScheme;
    console.log('Loading saved scheme:', savedScheme);
    setColorScheme(savedScheme);
    select.value = savedScheme;
  } else {
    // Set default to automatic
    setColorScheme('light dark');
  }

  // Step 4.4: Listen for changes
  select.addEventListener('change', function (event) {
    console.log('Select changed to:', event.target.value);
    setColorScheme(event.target.value);
    
    // Step 4.5: Save preference to localStorage
    localStorage.colorScheme = event.target.value;
  });
  
  console.log('✓ Event listener attached');
} else {
  console.error('✗ Theme select element NOT found!');
}

// Step 5: Better contact form (Optional)
let form = document.querySelector('form');

form?.addEventListener('submit', function (event) {
  event.preventDefault();
  
  let data = new FormData(form);
  let params = [];
  
  for (let [name, value] of data) {
    params.push(`${name}=${encodeURIComponent(value)}`);
  }
  
  let url = form.action + '?' + params.join('&');
  location.href = url;
});
