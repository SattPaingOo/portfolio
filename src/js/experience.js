export default {
  data() {
    return {
      experiences: [
        {
          id: 1,
          position: "Front-End Developer",
          company: "Genki System Japan",
          location: "Shin-Yokohama, Japan",
          duration: "07/2024 - Present",
          type: "Full-time",
          team: "Japan Dev team",
          description:
            "Built customer projects with team using React, Next.js, Vue, Nuxt.js (Frontend), and WordPress. Focused on creating responsive and user-friendly web applications.",
          technologies: [
            "React",
            "Next.js",
            "Vue.js",
            "Nuxt.js",
            "WordPress",
            "JavaScript",
            "CSS3",
          ],
          achievements: [
            "Delivered 5+ customer projects on time",
            "Improved frontend performance by 30%",
            "Collaborated with international team members",
          ],
          current: true,
        },
        {
          id: 2,
          position: "Full Stack Developer",
          company: "Shingenki Company",
          location: "Yangon, Myanmar",
          duration: "06/2018 - 06/2024",
          type: "Full-time",
          team: "Myanmar Dev team",
          description:
            "Built customer projects with team using React, Vue (Frontend) and Java SpringBoot (Backend) with AWS. Also developed shop projects using Shopify platform.",
          technologies: [
            "React",
            "Vue.js",
            "Java",
            "Spring Boot",
            "AWS",
            "Shopify",
            "MySQL",
            "PostgreSQL",
          ],
          achievements: [
            "Led development of 10+ web applications",
            "Implemented CI/CD pipelines with AWS",
            "Mentored junior developers",
            "Reduced application load time by 40%",
          ],
          current: false,
        },
        {
          id: 3,
          position: "Student - System Creator",
          company: "Metro IT and Japanese Language Center",
          location: "Yangon, Myanmar",
          duration: "2015 - 2017",
          type: "Education",
          team: "Academic Studies",
          description:
            "Learned Networking, Strategy, Programming, and Japanese. Completed assignments and school projects with focus on system development and Japanese language proficiency.",
          technologies: [
            "Networking",
            "Programming Fundamentals",
            "Japanese Language",
            "System Design",
          ],
          achievements: [
            "ITPEC(IP) - Information Processing",
            "ITPEC(FE) - Fundamental Information Technology Engineer",
            "JLPT N4 - Japanese Language Proficiency",
          ],
          current: false,
        },
      ],
    };
  },
  methods: {
    getExperienceIcon(type) {
      switch (type) {
        case "Full-time":
          return "mdi-briefcase";
        case "Education":
          return "mdi-school";
        case "Freelance":
          return "mdi-account-tie";
        default:
          return "mdi-briefcase";
      }
    },
    getExperienceColor(current) {
      return current ? "#FF6A4D" : "#666";
    },
  },
};
