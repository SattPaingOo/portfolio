<template>
  <div id="experience">
    <div class="container">
      <div class="ftitle">Experience</div>

      <!-- Experience Timeline -->
      <div class="experience-timeline">
        <div
          v-for="(experience, index) in experiences"
          :key="experience.id"
          class="experience-item reveal"
          :class="{ current: experience.current }"
        >
          <!-- Timeline connector -->
          <div class="timeline-connector">
            <div class="timeline-dot">
              <v-icon
                :color="experience.current ? '#FF6A4D' : '#666'"
                size="20"
              >
                {{ getExperienceIcon(experience.type) }}
              </v-icon>
            </div>
            <div
              v-if="index < experiences.length - 1"
              class="timeline-line"
            ></div>
          </div>

          <!-- Experience Card -->
          <div class="experience-card">
            <!-- Header -->
            <div class="experience-header">
              <div class="experience-title">
                <h3 class="position">{{ experience.position }}</h3>
                <div class="company-info">
                  <span class="company">{{ experience.company }}</span>
                  <v-chip
                    v-if="experience.current"
                    small
                    color="#FF6A4D"
                    dark
                    class="current-chip"
                  >
                    Current
                  </v-chip>
                </div>
              </div>
              <div class="experience-meta">
                <div class="duration">
                  <v-icon small color="#FF6A4D">mdi-calendar</v-icon>
                  <span>{{ experience.duration }}</span>
                </div>
                <div class="location">
                  <v-icon small color="#FF6A4D">mdi-map-marker</v-icon>
                  <span>{{ experience.location }}</span>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="experience-content">
              <p class="description">{{ experience.description }}</p>

              <!-- Team Info -->
              <div class="team-info">
                <v-icon small color="#666">mdi-account-group</v-icon>
                <span>{{ experience.team }}</span>
              </div>

              <!-- Technologies -->
              <div class="technologies">
                <h4>Technologies & Skills</h4>
                <div class="tech-chips">
                  <v-chip
                    v-for="tech in experience.technologies"
                    :key="tech"
                    small
                    outlined
                    class="tech-chip"
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </div>

              <!-- Achievements -->
              <div class="achievements">
                <h4>Key Achievements</h4>
                <ul class="achievement-list">
                  <li
                    v-for="achievement in experience.achievements"
                    :key="achievement"
                  >
                    <v-icon small color="#FF6A4D">mdi-check-circle</v-icon>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../js/experience.js"></script>
<script>
import experienceData from "../js/experience.js";

export default {
  ...experienceData,
};
</script>
<style lang="scss" src="../style/experience.scss"></style>
