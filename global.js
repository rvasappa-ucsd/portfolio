// Portfolio JavaScript - Labs 3 & 4
// Author: Raghav Vasappanavara

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
  { url: 'projects/', title: 'Projects' },
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

// Function to set color scheme
function setColorScheme(colorScheme) {
  // Set the color-scheme CSS property on the root element
  document.documentElement.style.colorScheme = colorScheme;
  
  // Add data attribute for CSS targeting
  if (colorScheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (colorScheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
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
  // Load saved preference on page load
  if ('colorScheme' in localStorage) {
    let savedScheme = localStorage.colorScheme;
    setColorScheme(savedScheme);
    select.value = savedScheme;
  } else {
    // Set default to automatic
    setColorScheme('light dark');
  }

  // Listen for theme changes
  select.addEventListener('change', function (event) {
    setColorScheme(event.target.value);
    // Save preference to localStorage
    localStorage.colorScheme = event.target.value;
  });
}

// ===== LAB 4: Modular JavaScript and API Integration =====

// Step 1.2: Function to fetch JSON data
export async function fetchJSON(url) {
  try {
    // Fetch the JSON file from the given URL
    const response = await fetch(url);
    
    // Check if the fetch was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    
    // Parse and return the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching or parsing JSON data:', error);
    throw error;
  }
}

// Step 1.4: Function to render projects dynamically
export function renderProjects(projects, containerElement, headingLevel = 'h2') {
  // Validate container element
  if (!containerElement) {
    console.error('Container element is null or undefined');
    return;
  }
  
  // Clear existing content
  containerElement.innerHTML = '';
  
  // Handle empty projects array
  if (!projects || projects.length === 0) {
    containerElement.innerHTML = '<p class="no-projects">No projects to display at this time.</p>';
    return;
  }
  
  // Validate heading level
  const validHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  if (!validHeadings.includes(headingLevel.toLowerCase())) {
    console.warn(`Invalid heading level: ${headingLevel}. Using h2 instead.`);
    headingLevel = 'h2';
  }
  
  // Loop through each project and create an article element
  for (let project of projects) {
    // Create article element
    const article = document.createElement('article');
    article.className = 'project-card';
    
    // Populate article with project data using template literals
    article.innerHTML = `
      <${headingLevel}>${project.title}</${headingLevel}>
      <img src="${project.image}" alt="${project.title}">
      <div class="project-info">
        <p class="project-description">${project.description}</p>
        <p class="project-year">${project.year}</p>
      </div>
    `;
    
    // Append article to container
    containerElement.appendChild(article);
  }
  
  console.log(`✓ Rendered ${projects.length} projects`);
}

// Step 3.2: Function to fetch GitHub data
export async function fetchGitHubData(username) {
  return fetchJSON(`https://api.github.com/users/${username}`);
}
