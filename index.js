// Lab 4: Homepage - Display latest projects and GitHub stats

import { fetchJSON, renderProjects, fetchGitHubData } from './global.js';

// Step 2: Fetch and display latest 3 projects
const projects = await fetchJSON('./lib/projects.json');
const latestProjects = projects.slice(0, 3);

const projectsContainer = document.querySelector('.projects');
if (projectsContainer) {
  renderProjects(latestProjects, projectsContainer, 'h3');
}

// Step 3: Fetch and display GitHub data
const githubData = await fetchGitHubData('rvasappa-ucsd');
const profileStats = document.querySelector('#profile-stats');

if (profileStats && githubData) {
  profileStats.innerHTML = `
    <dl>
      <div><dt>Public Repos</dt><dd>${githubData.public_repos}</dd></div>
      <div><dt>Public Gists</dt><dd>${githubData.public_gists}</dd></div>
      <div><dt>Followers</dt><dd>${githubData.followers}</dd></div>
      <div><dt>Following</dt><dd>${githubData.following}</dd></div>
    </dl>
  `;
  console.log('✓ GitHub stats loaded successfully');
}
