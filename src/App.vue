<template>
  <v-app>
    <!-- Navigation overlay -->
    <nav class="app-navigation" :class="{ 'nav-visible': showNav }">
      <div class="nav-container">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="scrollToSection(section.id)"
          :class="['nav-btn', { active: activeSection === section.id }]"
        >
          <span class="nav-icon">{{ section.icon }}</span>
          <span class="nav-text">{{ section.name }}</span>
        </button>
      </div>
    </nav>

    <!-- Main content with smooth transitions -->
    <main class="app-main">
      <section id="top" class="section-wrapper">
        <Top />
      </section>

      <section id="skills" class="section-wrapper reveal">
        <Skills />
      </section>

      <section id="experience" class="section-wrapper reveal">
        <Experience />
      </section>

      <section id="projects" class="section-wrapper reveal">
        <Project />
      </section>

      <section id="contact" class="section-wrapper reveal">
        <Contact />
      </section>

      <section id="footer" class="section-wrapper">
        <Footer />
      </section>
    </main>

    <!-- Scroll progress indicator -->
    <div class="scroll-progress" :style="{ width: scrollProgress + '%' }"></div>
  </v-app>
</template>

<script>
import Top from "@/components/Top";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Project from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Top,
    Skills,
    Experience,
    Project,
    Contact,
    Footer,
  },

  data: () => ({
    showNav: false,
    activeSection: "top",
    scrollProgress: 0,
    sections: [
      { id: "top", name: "Home", icon: "🏠" },
      { id: "skills", name: "Skills", icon: "⚡" },
      { id: "experience", name: "Experience", icon: "💼" },
      { id: "projects", name: "Projects", icon: "🚀" },
      { id: "contact", name: "Contact", icon: "📧" },
    ],
  }),

  mounted() {
    this.initScrollListeners();
    this.initIntersectionObserver();
  },

  methods: {
    initScrollListeners() {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("scroll", this.updateScrollProgress);
    },

    handleScroll() {
      // Show/hide navigation after scrolling past hero
      this.showNav = window.scrollY > 100;

      // Reveal animations
      this.revealSections();
    },

    updateScrollProgress() {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (scrollTop / docHeight) * 100;
    },

    revealSections() {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    },

    initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      // Observe all sections
      this.sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.updateScrollProgress);
  },
};
</script>

<style lang="scss">
/* Global styles */
html {
  scroll-behavior: smooth;
  font-family: "JetBrains Mono", monospace;
  background: #303030 !important;
}

body {
  margin: 0;
  padding: 0;
  background: #303030 !important;
  overflow-x: hidden;
}

/* Ensure all elements maintain dark background */
* {
  box-sizing: border-box;
}

.v-application__wrap {
  background: #303030 !important;
}

/* App main container */
.app-main {
  position: relative;
  width: 100%;
}

/* Section wrappers for smooth transitions */
.section-wrapper {
  position: relative;
  width: 100%;
  background: #303030 !important;
}

/* Ensure Vuetify components don't override our background */
.v-application {
  background: #303030 !important;
}

.v-main {
  background: #303030 !important;
}

/* Remove any white backgrounds from child components */
.section-wrapper > * {
  background: #303030 !important;
}

/* Navigation overlay */
.app-navigation {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.nav-visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .nav-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-family: "JetBrains Mono", monospace;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 100px;

    &:hover {
      background: rgba(255, 106, 77, 0.2);
      border-color: rgba(255, 106, 77, 0.5);
      color: #ff6a4d;
      transform: translateX(-5px);
    }

    &.active {
      background: rgba(255, 106, 77, 0.3);
      border-color: #ff6a4d;
      color: #ff6a4d;
      box-shadow: 0 0 15px rgba(255, 106, 77, 0.3);
    }

    .nav-icon {
      font-size: 14px;
    }

    .nav-text {
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;

    .nav-container {
      padding: 10px;
      gap: 6px;
    }

    .nav-btn {
      padding: 6px 8px;
      font-size: 11px;
      min-width: 80px;

      .nav-text {
        display: none;
      }
    }
  }
}

/* Scroll progress indicator */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #ff6a4d, #ff8f7a);
  z-index: 1001;
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 106, 77, 0.5);
}

/* Reveal animations */
.reveal {
  position: relative;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Staggered reveal for child elements */
.reveal.active {
  .v-card,
  .skill-card,
  .experience-card,
  .project-card,
  .contact-card {
    animation: slideUpStagger 0.6s ease forwards;
  }

  .v-card:nth-child(1) {
    animation-delay: 0.1s;
  }
  .v-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  .v-card:nth-child(3) {
    animation-delay: 0.3s;
  }
  .v-card:nth-child(4) {
    animation-delay: 0.4s;
  }
  .v-card:nth-child(5) {
    animation-delay: 0.5s;
  }
  .v-card:nth-child(6) {
    animation-delay: 0.6s;
  }
}

@keyframes slideUpStagger {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Section transition effects */
.section-wrapper {
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.01);
  }
}

/* Enhanced scroll behavior */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .reveal,
  .nav-btn,
  .scroll-progress {
    transition: none;
  }
}

/* Global focus styles */
*:focus {
  outline: 2px solid #ff6a4d;
  outline-offset: 2px;
}

/* Loading state for dynamic content */
.loading-skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Enhanced card hover effects for all sections */
.v-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(64, 64, 64, 0.8) !important;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 106, 77, 0.1);
  }
}

/* Ensure no white backgrounds anywhere */
.v-content,
.v-main__wrap,
.v-application,
.v-app,
div[data-app="true"] {
  background: #303030 !important;
}

/* Override any component backgrounds */
.experience-timeline,
.contact-grid,
.project-grid,
.skills-grid {
  background: transparent !important;
}

/* Section spacing consistency */
#top {
  min-height: 100vh;
  background: #303030 !important;
}
#skills,
#experience,
#projects,
#contact {
  padding: 60px 0;
  background: #303030 !important;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #303030;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff6a4d, #ff8f7a);
  border-radius: 4px;

  &:hover {
    background: linear-gradient(180deg, #ff8f7a, #ff6a4d);
  }
}

/* Firefox scrollbar */
html {
  scrollbar-width: thin;
  scrollbar-color: #ff6a4d #303030;
}
</style>
