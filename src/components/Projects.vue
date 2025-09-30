<template>
  <div id="project">
    <div class="container">
      <div class="ftitle">Projects</div>

      <!-- Filter Buttons -->
      <div class="filter-container">
        <v-btn
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          class="filter-btn"
          @click="selectedCategory = category"
          outlined
          small
        >
          {{ category }}
        </v-btn>
      </div>

      <!-- Projects Grid -->
      <v-row no-gutters class="projects-grid">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-col"
        >
          <div class="project-card reveal">
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-actions">
                  <v-btn
                    icon
                    color="white"
                    :href="project.demoUrl"
                    target="_blank"
                    class="action-btn"
                  >
                    <v-icon>mdi-eye</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="white"
                    :href="project.githubUrl"
                    target="_blank"
                    class="action-btn"
                  >
                    <v-icon>mdi-github</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>

            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <v-chip
                  :color="getStatusColor(project.status)"
                  small
                  dark
                  class="status-chip"
                >
                  {{ project.status }}
                </v-chip>
              </div>

              <p class="project-description">{{ project.description }}</p>

              <div class="technologies">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  small
                  outlined
                  class="tech-chip"
                >
                  {{ tech }}
                </v-chip>
              </div>

              <div class="project-category">
                <v-icon small color="#FF6A4D">mdi-folder</v-icon>
                <span>{{ project.category }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- No projects message -->
      <div v-if="filteredProjects.length === 0" class="no-projects">
        <v-icon size="60" color="#555">mdi-folder-open</v-icon>
        <h3>No projects found in this category</h3>
        <p>Try selecting a different category or check back later!</p>
      </div>
    </div>
  </div>
</template>
<script src="../js/project.js"></script>
<script>
import projectData from "../js/project.js";

export default {
  ...projectData,
  data() {
    return {
      ...projectData.data(),
      selectedCategory: "All",
      categories: [
        "All",
        "Web Application",
        "Productivity",
        "Utility",
        "Analytics",
        "Portfolio",
        "Social Platform",
      ],
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === "All") {
        return this.projects;
      }
      return this.projects.filter(
        (project) => project.category === this.selectedCategory
      );
    },
  },
};
</script>
<style lang="scss" src="../style/project.scss"></style>
