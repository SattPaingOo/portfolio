export default {
  name: "Top",
  data: () => ({
    drawer: false,
    group: null,
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
      window.open("https://s3.amazonaws.com/sattpaing.tk/SattPaingOo_CV.docx");
    },
  },
};
