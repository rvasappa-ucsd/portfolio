// Lab 5: Projects page with D3 visualizations

import { fetchJSON, renderProjects } from '../global.js';
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';

// Fetch project data from JSON file
const projects = await fetchJSON('../lib/projects.json');

// Select the projects container
const projectsContainer = document.querySelector('.projects');

// Global variables
let query = '';
let selectedIndex = -1;

// D3 Arc and Slice Generators
let arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
let sliceGenerator = d3.pie().value((d) => d.value);
let colors = d3.scaleOrdinal(d3.schemeTableau10);

// Function to render the pie chart and legend
function renderPieChart(projectsGiven) {
  // Calculate projects per year
  let rolledData = d3.rollups(
    projectsGiven,
    (v) => v.length,
    (d) => d.year
  );

  // Transform to the format we need
  let data = rolledData.map(([year, count]) => {
    return { value: count, label: year.toString() };
  });

  // Generate arc data
  let arcData = sliceGenerator(data);
  let arcs = arcData.map((d) => arcGenerator(d));

  // Clear existing paths and legend items
  let svg = d3.select('#projects-pie-plot');
  svg.selectAll('path').remove();
  
  let legend = d3.select('.legend');
  legend.selectAll('li').remove();

  // Render pie chart wedges
  arcs.forEach((arc, i) => {
    svg
      .append('path')
      .attr('d', arc)
      .attr('fill', colors(i))
      .attr('class', selectedIndex === i ? 'selected' : '')
      .on('click', () => {
        // Toggle selection
        selectedIndex = selectedIndex === i ? -1 : i;

        // Update all paths
        svg
          .selectAll('path')
          .attr('class', (_, idx) => (selectedIndex === idx ? 'selected' : ''));

        // Update all legend items
        legend
          .selectAll('li')
          .attr('class', (_, idx) => 
            selectedIndex === idx ? 'legend-item selected' : 'legend-item'
          );

        // Filter projects
        if (selectedIndex === -1) {
          // No selection - show filtered projects based on search query
          let filteredProjects = filterProjects(projects, query);
          renderProjects(filteredProjects, projectsContainer, 'h2');
        } else {
          // Show projects from selected year
          let selectedYear = data[selectedIndex].label;
          let filteredByYear = projects.filter((p) => p.year.toString() === selectedYear);
          
          // Also apply search filter
          let filteredProjects = filterProjects(filteredByYear, query);
          renderProjects(filteredProjects, projectsContainer, 'h2');
        }
      });
  });

  // Render legend
  data.forEach((d, idx) => {
    legend
      .append('li')
      .attr('style', `--color:${colors(idx)}`)
      .attr('class', selectedIndex === idx ? 'legend-item selected' : 'legend-item')
      .html(`<span class="swatch"></span> ${d.label} <em>(${d.value})</em>`)
      .on('click', () => {
        // Trigger the same click behavior as the pie slice
        svg.selectAll('path').nodes()[idx].dispatchEvent(new Event('click'));
      });
  });
}

// Function to filter projects
function filterProjects(projectList, searchQuery) {
  if (!searchQuery) {
    return projectList;
  }
  
  return projectList.filter((project) => {
    let values = Object.values(project).join('\n').toLowerCase();
    return values.includes(searchQuery.toLowerCase());
  });
}

// Initial render
renderProjects(projects, projectsContainer, 'h2');
renderPieChart(projects);

// Update title with count
const projectsTitle = document.querySelector('.projects-title');
if (projectsTitle) {
  projectsTitle.textContent = `My Projects (${projects.length})`;
}

// Search functionality
let searchInput = document.querySelector('.searchBar');
searchInput.addEventListener('input', (event) => {
  query = event.target.value;
  
  // Reset selection when searching
  selectedIndex = -1;
  
  // Filter projects
  let filteredProjects = filterProjects(projects, query);
  
  // Render filtered projects and update pie chart
  renderProjects(filteredProjects, projectsContainer, 'h2');
  renderPieChart(filteredProjects);
});
