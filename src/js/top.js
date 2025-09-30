export default {
  name: "Top",
  data: () => ({
    drawer: false,
    group: null,
    mouseX: 0,
    mouseY: 0,
    biography: {
      introduction:
        "Hi, I am Satt Paing, currently working as a Front-End Developer at Genki System Japan. I have a Diploma of IT from Metro IT & Japanese Language Center and Certificate of ITPEC (FE).",
      sections: [
        {
          title: "Strengths",
          icon: "mdi-trending-up",
          content:
            "Quick learner with strong communication skills and deep focus when exploring new technologies.",
        },
        {
          title: "Professional Journey",
          icon: "mdi-briefcase",
          content:
            "Started at ShinGenki Development Co., Ltd., learned project workflows, Git usage, and best practices for high-quality code.",
        },
        {
          title: "Current Focus",
          icon: "mdi-code-tags",
          content:
            "Developing front-end projects using React and Vue. Also studying 3D technologies and UI/UX in free time.",
        },
        {
          title: "Future Vision",
          icon: "mdi-rocket-launch",
          content:
            "Want to keep learning and eventually manage projects as a bridge engineer, leading teams using Agile approach.",
        },
      ],
      portfolio3D: {
        url: "https://3d.sattpaing.dev",
        description: "Check out my 3D website",
      },
    },
    personalInfo: {
      name: "Satt Paing",
      title: "Senior Web Developer",
      currentCompany: "Genki System Japan",
      location: "Shin-Yokohama, Japan",
    },
    education: [
      {
        institution: "Metro IT and Japanese Language Center",
        degree: "Diploma of IT",
        focus: "System Creator Course",
      },
      {
        institution: "Dagon University Distance",
        degree: "BA (History)",
        type: "Distance Learning",
      },
    ],
    certifications: [
      {
        name: "ITPEC (IP)",
        description: "Information Processing",
        year: "2017",
      },
      {
        name: "ITPEC (FE)",
        description: "Fundamental Information Technology Engineer",
        year: "2017",
      },
      {
        name: "JLPT N4",
        description: "Japanese Language Proficiency",
        year: "2017",
      },
    ],
    interests: [
      {
        name: "3D Technologies",
        icon: "mdi-cube-outline",
      },
      {
        name: "UI/UX Design",
        icon: "mdi-palette",
      },
      {
        name: "Cloud Computing",
        icon: "mdi-cloud",
      },
      {
        name: "Learning Languages",
        icon: "mdi-translate",
      },
      {
        name: "Listening Music",
        icon: "mdi-music",
      },
      {
        name: "Reading",
        icon: "mdi-book-open",
      },
    ],
  }),
  methods: {
    handleMouseMove(event) {
      if (window.innerWidth > 1350) {
        this.mouseX = (event.clientX / window.innerWidth) * 100;
        this.mouseY = (event.clientY / window.innerHeight) * 100;

        // Apply subtle parallax effect to background elements
        const shapes = document.querySelectorAll(".floating-shape");
        const lines = document.querySelectorAll(".flowing-line");
        const orbs = document.querySelectorAll(".gradient-orb");

        shapes.forEach((shape, index) => {
          const factor = (index + 1) * 0.02;
          const moveX = (this.mouseX - 50) * factor;
          const moveY = (this.mouseY - 50) * factor;
          shape.style.transform += ` translate(${moveX}px, ${moveY}px)`;
        });

        lines.forEach((line, index) => {
          const factor = (index + 1) * 0.01;
          const moveX = (this.mouseX - 50) * factor;
          line.style.transform += ` translateX(${moveX}px)`;
        });

        orbs.forEach((orb, index) => {
          const factor = (index + 1) * 0.005;
          const moveX = (this.mouseX - 50) * factor;
          const moveY = (this.mouseY - 50) * factor;
          orb.style.transform += ` translate(${moveX}px, ${moveY}px)`;
        });
      }
    },
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    click(val) {
      var elmnt = document.getElementById(val);
      this.drawer = false;
      elmnt.scrollIntoView(true);
    },
    downloadfile() {
      // Create a link to download the resume file from public folder
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "SattPaing_Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  mounted() {
    // Add mouse move listener for interactive background
    if (window.innerWidth > 1350) {
      window.addEventListener("mousemove", this.handleMouseMove);
    }
  },
  beforeDestroy() {
    // Clean up event listener
    window.removeEventListener("mousemove", this.handleMouseMove);
  },
};
