// Lab 4: Projects page - Dynamic project rendering from JSON

import { fetchJSON, renderProjects } from '../global.js';

// Fetch project data from JSON file
const projects = await fetchJSON('../lib/projects.json');

// Select the projects container
const projectsContainer = document.querySelector('.projects');

// Render all projects with h2 heading level
renderProjects(projects, projectsContainer, 'h2');

// Step 1.6: Count and display number of projects
const projectsTitle = document.querySelector('.projects-title');
if (projectsTitle) {
  projectsTitle.textContent = `My Projects (${projects.length})`;
}
