export default {
  data() {
    return {
      skillCategories: [
        {
          id: 1,
          title: "Frontend Development",
          skills: [
            {
              name: "React & Next.js",
              icon: "mdi-react",
              level: 4,
              experience: "3+ years",
              technologies: [
                "React Router",
                "Redux",
                "Context API",
                "Next.js",
                "TypeScript",
              ],
              description:
                "Building modern, responsive web applications with React ecosystem",
              link: "https://reactjs.org/",
              color: "#61DAFB",
            },
            {
              name: "Vue & Nuxt.js",
              icon: "mdi-vuejs",
              level: 4,
              experience: "4+ years",
              technologies: [
                "Vue Router",
                "Vuex",
                "Composition API",
                "Nuxt.js",
                "Vuetify",
              ],
              description:
                "Creating dynamic user interfaces with Vue.js framework",
              link: "https://vuejs.org/",
              color: "#4FC08D",
            },
            {
              name: "Web Technologies",
              icon: "mdi-code-braces",
              level: 4,
              experience: "5+ years",
              technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "jQuery",
                "SCSS",
                "Responsive Design",
              ],
              description:
                "Core web development technologies and modern practices",
              link: null,
              color: "#F7DF1E",
            },
          ],
        },
        {
          id: 2,
          title: "Backend & Cloud",
          skills: [
            {
              name: "Java Development",
              icon: "mdi-language-java",
              level: 3,
              experience: "3+ years",
              technologies: [
                "Spring Boot",
                "Spring MVC",
                "JUnit",
                "Maven",
                "Hibernate",
              ],
              description:
                "Enterprise-level backend development with Java ecosystem",
              link: "https://www.java.com/en/",
              color: "#ED8B00",
            },
            {
              name: "AWS Cloud",
              icon: "mdi-aws",
              level: 3,
              experience: "2+ years",
              technologies: [
                "S3",
                "Route53",
                "CloudFront",
                "Lambda",
                "Cognito",
                "EC2",
              ],
              description: "Cloud infrastructure and serverless applications",
              link: "https://aws.amazon.com/",
              color: "#FF9900",
            },
            {
              name: "Database",
              icon: "mdi-database",
              level: 3,
              experience: "4+ years",
              technologies: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Database Design",
              ],
              description: "Database design, optimization, and management",
              link: "https://www.mysql.com/",
              color: "#4479A1",
            },
          ],
        },
        {
          id: 3,
          title: "Tools & Others",
          skills: [
            {
              name: "Version Control",
              icon: "mdi-git",
              level: 4,
              experience: "5+ years",
              technologies: ["Git", "GitHub", "GitLab", "Bitbucket", "CI/CD"],
              description:
                "Source code management and collaborative development",
              link: null,
              color: "#F05032",
            },
            {
              name: "CMS & E-commerce",
              icon: "mdi-shopping",
              level: 3,
              experience: "2+ years",
              technologies: ["WordPress", "Shopify", "Strapi", "Custom CMS"],
              description: "Content management and e-commerce solutions",
              link: null,
              color: "#95BF47",
            },
            {
              name: "Development Tools",
              icon: "mdi-tools",
              level: 4,
              experience: "4+ years",
              technologies: [
                "VS Code",
                "Docker",
                "Webpack",
                "Vite",
                "ESLint",
                "Prettier",
              ],
              description: "Modern development tools and workflow optimization",
              link: null,
              color: "#007ACC",
            },
          ],
        },
      ],
      selectedCategory: "all",
    };
  },
  computed: {
    filteredSkills() {
      if (this.selectedCategory === "all") {
        return this.skillCategories;
      }
      return this.skillCategories.filter(
        (category) => category.id === this.selectedCategory
      );
    },
  },
  methods: {
    getLevelText(level) {
      const levels = {
        1: "Beginner",
        2: "Intermediate",
        3: "Advanced",
        4: "Expert",
        5: "Master",
      };
      return levels[level] || "Unknown";
    },
    getLevelColor(level) {
      const colors = {
        1: "#f44336",
        2: "#ff9800",
        3: "#2196f3",
        4: "#4caf50",
        5: "#9c27b0",
      };
      return colors[level] || "#666";
    },
  },
};
