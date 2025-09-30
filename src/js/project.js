export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "3D Showcase Website",
          description:
            "An interactive 3D showcase website where I upload and display my 3D models created with Blender. Visitors can view and interact with 3D models in real-time using WebGL technology.",
          technologies: [
            "Three.js",
            "Next.js",
            "JavaScript",
            "WebGL",
            "Blender",
            "HTML5",
            "CSS3",
          ],
          category: "3D/WebGL",
          status: "Completed",
          image: require("@/assets/img/Project1.png"),
          demoUrl: "https://3d.sattpaing.dev/",
          githubUrl: "https://github.com/SattPaingDtn/my-3D-model",
          featured: true,
        },
        {
          id: 2,
          title: "Study with Me Website",
          description:
            "A productive study environment website featuring panoramic study spaces, ambient background music, and customizable study timers to enhance focus and productivity.",
          technologies: [
            "JavaScript",
            "Next.js",
            "HTML5",
            "CSS3",
            "Web Audio API",
            "Timer APIs",
          ],
          category: "Educational",
          status: "Completed",
          image: require("@/assets/img/Project2.png"),
          demoUrl: "https://study-with-me.sattpaing.dev/",
          githubUrl: "https://github.com/SattPaingDtn/study-with-me",
          featured: true,
        },
        {
          id: 3,
          title: "Octahedron 3D Model",
          description:
            "A pure Three.js implementation showcasing a rotating octahedron 3D model with interactive controls and smooth animations. Perfect demonstration of WebGL and 3D mathematics.",
          technologies: ["Three.js", "JavaScript", "WebGL", "Mathematics"],
          category: "3D/WebGL",
          status: "Completed",
          image: require("@/assets/img/Project3.png"),
          demoUrl: "https://sattpaingdtn.github.io/Octahedron/",
          githubUrl: "https://github.com/SattPaingDtn/Octahedron",
          featured: false,
        },
        {
          id: 4,
          title: "Company Website Landing Page",
          description:
            "A professional company profile landing page designed for my Myanmar branch office. Created with comprehensive UI/UX design process using Figma, featuring modern design principles and responsive layout.",
          technologies: [
            "Figma",
            "UI/UX Design",
            "Next.js",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive Design",
          ],
          category: "Web Design",
          status: "Completed",
          image: require("@/assets/img/Project4.png"),
          demoUrl: "https://mm.genkisystem.com/",
          githubUrl: "#",
          featured: true,
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
