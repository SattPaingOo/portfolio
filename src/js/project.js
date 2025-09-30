export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "E-Commerce Dashboard",
          description:
            "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking.",
          technologies: ["Vue.js", "Vuetify", "Node.js", "MongoDB"],
          category: "Web Application",
          status: "Completed",
          image:
            "https://via.placeholder.com/400x250/FF6A4D/FFFFFF?text=E-Commerce+Dashboard",
          demoUrl: "#",
          githubUrl: "#",
          featured: true,
        },
        {
          id: 2,
          title: "Task Management App",
          description:
            "A collaborative task management application with real-time updates, team collaboration features, and project timeline tracking.",
          technologies: ["React", "Redux", "Express.js", "PostgreSQL"],
          category: "Productivity",
          status: "Completed",
          image:
            "https://via.placeholder.com/400x250/4CAF50/FFFFFF?text=Task+Manager",
          demoUrl: "#",
          githubUrl: "#",
          featured: true,
        },
        {
          id: 3,
          title: "Weather Forecast App",
          description:
            "A responsive weather application providing detailed forecasts, interactive maps, and location-based weather alerts.",
          technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
          category: "Utility",
          status: "Completed",
          image:
            "https://via.placeholder.com/400x250/2196F3/FFFFFF?text=Weather+App",
          demoUrl: "#",
          githubUrl: "#",
          featured: false,
        },
        {
          id: 4,
          title: "Social Media Analytics",
          description:
            "Analytics platform for social media performance tracking with data visualization and automated reporting features.",
          technologies: ["Next.js", "TypeScript", "D3.js", "Firebase"],
          category: "Analytics",
          status: "In Progress",
          image:
            "https://via.placeholder.com/400x250/9C27B0/FFFFFF?text=Social+Analytics",
          demoUrl: "#",
          githubUrl: "#",
          featured: true,
        },
        {
          id: 5,
          title: "Portfolio Website",
          description:
            "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
          technologies: ["Vue.js", "SCSS", "Vuetify", "GitHub Pages"],
          category: "Portfolio",
          status: "Completed",
          image:
            "https://via.placeholder.com/400x250/FF9800/FFFFFF?text=Portfolio+Site",
          demoUrl: "#",
          githubUrl: "#",
          featured: false,
        },
        {
          id: 6,
          title: "Recipe Sharing Platform",
          description:
            "A community-driven platform for sharing and discovering recipes with user ratings, comments, and meal planning features.",
          technologies: ["Nuxt.js", "Vuex", "Strapi", "MySQL"],
          category: "Social Platform",
          status: "Completed",
          image:
            "https://via.placeholder.com/400x250/795548/FFFFFF?text=Recipe+Platform",
          demoUrl: "#",
          githubUrl: "#",
          featured: false,
        },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      switch (status) {
        case "Completed":
          return "#4CAF50";
        case "In Progress":
          return "#FF9800";
        case "Planning":
          return "#2196F3";
        default:
          return "#9E9E9E";
      }
    },
    filterByCategory(category) {
      if (category === "All") {
        return this.projects;
      }
      return this.projects.filter((project) => project.category === category);
    },
    getFeaturedProjects() {
      return this.projects.filter((project) => project.featured);
    },
  },
};
