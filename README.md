# Raghav Vasappanavara - Portfolio Website

Welcome to my personal portfolio website! This is a modern, interactive portfolio showcasing data science, machine learning, and software development projects with dynamic content loading, GitHub API integration, and responsive design.

## 🌐 Live Site

Visit the live site at: [https://rvasappa-ucsd.github.io/portfolio/](https://rvasappa-ucsd.github.io/portfolio/)

## 📋 Features

### Core Functionality
- **Dynamic Navigation**: Auto-generated navigation menu across all pages
- **Home Page**: Hero section, skills, experience timeline, latest projects, and live GitHub stats
- **Projects Page**: 12 public GitHub projects displayed in responsive 4-column grid
- **Resume**: Comprehensive CV with education, experience, and skills
- **Contact**: Professional contact form with URL encoding

### Lab 1 Implementation (HTML Foundation)
- ✅ **Multi-Page Structure**: Four main pages (Home, Projects, Resume, Contact)
- ✅ **Semantic HTML5**: Proper document structure with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
- ✅ **Form Design**: Contact form with input validation
- ✅ **Basic Styling**: Foundation CSS with professional layout
- ✅ **Git Repository**: Version control setup and GitHub hosting

### Lab 2 Enhancements (Advanced CSS)
- ✅ **Responsive Max-Width**: 100ch constraint for optimal readability
- ✅ **Flexbox Navigation**: Modern, flexible menu layout
- ✅ **CSS Grid Forms**: Organized field layout with proper spacing
- ✅ **Typography Hierarchy**: Improved heading sizes and line-height
- ✅ **Enhanced Visual Design**: Better spacing, alignment, and layout systems

### Lab 3 Enhancements (JavaScript Enhancement)
- ✅ **Automatic Navigation Generation**: Dynamic menu from centralized data source
- ✅ **External Link Handling**: Smart detection with `target="_blank"` for external links
- ✅ **Enhanced Contact Form**: URL encoding for special characters
- ✅ **Dark Mode Theme Switcher**: Three options (Automatic/Light/Dark) with LocalStorage persistence
- ✅ **Complete Dark Mode Styling**: GitHub-inspired dark theme for all components

### Lab 4 Enhancements (Modular JavaScript & API Integration)
- ✅ **JSON Data Management**: Centralized project data in `lib/projects.json`
- ✅ **Modular JavaScript**: ES6 modules with reusable functions
- ✅ **Dynamic Project Rendering**: Data-driven UI with `renderProjects()` function
- ✅ **GitHub API Integration**: Live statistics (repos, gists, followers, following)
- ✅ **Responsive Grid Layout**: 4-column layout with responsive breakpoints
- ✅ **Latest Projects Display**: Featured projects on homepage

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup with modern structure
- **CSS3**: Custom properties, Grid, Flexbox, responsive design
- **JavaScript (ES6+)**: Modules, async/await, Fetch API, DOM manipulation

### APIs & Data
- **GitHub REST API**: Real-time profile statistics
- **JSON**: Structured project data storage
- **LocalStorage API**: Theme preference persistence

### Tools & Hosting
- **Git & GitHub**: Version control and collaboration
- **GitHub Pages**: Automated deployment
- **Python HTTP Server**: Local development testing

## 📱 Responsive Design

The website features a fully responsive design with multiple breakpoints:
- **Desktop (>1400px)**: 4-column project grid
- **Laptop (1024-1400px)**: 3-column project grid
- **Tablet (768-1024px)**: 2-column project grid
- **Mobile (<768px)**: Single-column layout

All components are optimized for touch and mouse interactions.

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rvasappa-ucsd/portfolio.git
   cd portfolio
   ```

2. **Start a local server** (required for ES6 modules):
   ```bash
   python -m http.server 8080
   ```
   Then visit: `http://localhost:8080`

3. **Make changes** to any files (HTML, CSS, JS, JSON)

4. **Test thoroughly** with hard refresh (Ctrl+Shift+R) to clear cache

5. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

## 🌐 GitHub Pages Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup (one-time):**
- Go to repository Settings → Pages
- Select "main" branch as source
- Save and wait for deployment
- Site will be live at: `https://rvasappa-ucsd.github.io/portfolio/`

## 📂 Project Structure

```
portfolio/
├── index.html              # Home page with hero, skills, latest projects, GitHub stats
├── style.css               # Main stylesheet (1194 lines) with dark mode and grid layouts
├── global.js               # Shared JavaScript: navigation, theme switcher, reusable functions
├── index.js                # Homepage-specific: latest projects and GitHub stats
├── .gitignore              # Git ignore configuration
├── README.md               # This file - project documentation
├── lib/
│   └── projects.json       # Centralized project data (12 projects)
├── projects/
│   ├── index.html          # Projects page with dynamic loading
│   └── projects.js         # Projects page logic
├── resume/
│   └── index.html          # Resume/CV page
├── contact/
│   └── index.html          # Contact page with enhanced form
└── images/
    └── README.md           # Image assets directory
```

## 🔧 Key Components

### JavaScript Architecture

**global.js** - Shared functionality (196 lines)
- `fetchJSON(url)` - Fetch and parse JSON data
- `renderProjects(projects, container, headingLevel)` - Dynamic project card generation
- `fetchGitHubData(username)` - GitHub API integration
- Navigation generation
- Dark mode theme switcher
- Contact form handler

**index.js** - Homepage logic (29 lines)
- Fetch latest 3 projects
- Display GitHub profile statistics
- Dynamic content population

**projects/projects.js** - Projects page logic (18 lines)
- Fetch all projects from JSON
- Render project grid
- Update project count

### Data Structure

**lib/projects.json** - Project data
```json
[
  {
    "title": "Project Name",
    "year": 2025,
    "image": "images/project.jpg",
    "description": "Project description",
    "github": "https://github.com/username/repo"
  }
]
```

### CSS Architecture

**style.css** - Comprehensive styling
- CSS Variables for theming
- Responsive grid layouts (4/3/2/1 columns)
- Dark mode with `[data-theme="dark"]` selectors
- Flexbox for card alignment
- Media queries for breakpoints
- Smooth transitions and hover effects

## � Project Statistics

- **Total Projects**: 12 public GitHub repositories
- **JavaScript Files**: 3 modular files
- **Total Code**: ~440 JavaScript lines, 1194 CSS lines
- **API Integration**: GitHub REST API
- **Responsive Breakpoints**: 4 layouts (mobile to desktop)
- **Theme Options**: 3 (Automatic, Light, Dark)

## 🎓 Lab Implementations

### Lab 3: JavaScript Enhancement
- Automatic navigation generation
- External link detection
- Enhanced contact form with URL encoding
- Dark mode theme switcher with LocalStorage
- **Documentation**: See `lab3.md`

### Lab 4: Modular JavaScript & API Integration
- JSON-based project data management
- Modular ES6 JavaScript architecture
- Dynamic content rendering
- GitHub API integration for live stats
- Responsive 4-column grid layout
- **Documentation**: See `lab4.md`

## 🔗 Links

- **Live Site**: [https://rvasappa-ucsd.github.io/portfolio/](https://rvasappa-ucsd.github.io/portfolio/)
- **GitHub Repository**: [https://github.com/rvasappa-ucsd/portfolio](https://github.com/rvasappa-ucsd/portfolio)
- **GitHub Profile**: [https://github.com/rvasappa-ucsd](https://github.com/rvasappa-ucsd)
- **Secondary GitHub**: [https://github.com/rvasappa](https://github.com/rvasappa)

## �📧 Contact

- **Email**: rvasappa@ucsd.edu
- **LinkedIn**: [linkedin.com/in/rvasappa](https://linkedin.com/in/rvasappa)
- **GitHub**: [github.com/rvasappa-ucsd](https://github.com/rvasappa-ucsd)

## 📝 License

© 2025 Raghav Vasappanavara. All rights reserved.

---

**Built with ❤️ using modern web technologies**
