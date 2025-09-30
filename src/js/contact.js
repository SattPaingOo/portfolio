export default {
  data() {
    return {
      contactInfo: [
        {
          id: 1,
          type: "phone",
          icon: "mdi-phone",
          title: "Phone",
          value: "+81 070-9028-3418",
          link: "tel:+81070902834118",
          description: "Feel free to call me",
          available: "Mon-Fri 9AM-6PM JST",
          color: "#4CAF50",
        },
        {
          id: 2,
          type: "email",
          icon: "mdi-email",
          title: "Email",
          value: "sattpaing72@gmail.com",
          link: "mailto:sattpaing72@gmail.com",
          description: "Send me an email",
          available: "24/7 Response within 24hrs",
          color: "#FF6A4D",
        },
        {
          id: 3,
          type: "address",
          icon: "mdi-map-marker",
          title: "Location",
          value: "Shin-Yokohama, Yokohama",
          fullAddress:
            "〒222-0033 1-19-23 Shin-Yokohama, Kohoku-ku, Yokohama, Kanagawa Prefecture",
          link: "https://maps.google.com/?q=Shin-Yokohama,Yokohama,Japan",
          description: "Visit or meet me",
          available: "Available for meetings",
          color: "#2196F3",
        },
      ],
      socialLinks: [
        {
          id: 1,
          name: "LinkedIn",
          icon: "mdi-linkedin",
          url: "https://linkedin.com/in/sattpaing",
          color: "#0077B5",
          description: "Professional networking",
        },
        {
          id: 2,
          name: "GitHub",
          icon: "mdi-github",
          url: "https://github.com/SattPaingOo",
          color: "#333",
          description: "Code repositories",
        },
        {
          id: 3,
          name: "Portfolio 3D",
          icon: "mdi-cube-outline",
          url: "https://3d.sattpaing.dev",
          color: "#FF6A4D",
          description: "3D showcase",
        },
      ],
      workingHours: {
        timezone: "JST (Japan Standard Time)",
        available: [
          { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
          { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
          { day: "Sunday", hours: "Not available" },
        ],
      },
      preferredContact: "email",
    };
  },
  methods: {
    getContactIcon(type) {
      const icons = {
        phone: "mdi-phone",
        email: "mdi-email",
        address: "mdi-map-marker",
        linkedin: "mdi-linkedin",
        github: "mdi-github",
        website: "mdi-web",
      };
      return icons[type] || "mdi-contact-mail";
    },
    openLink(url) {
      if (url) {
        window.open(url, "_blank");
      }
    },
    copyToClipboard(text) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        // You can add a toast notification here
      }
    },
  },
};
