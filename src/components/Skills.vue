<template>
  <div id="skills">
    <div class="container">
      <div class="ftitle">Skills</div>

      <!-- Category Filter -->
      <div class="category-filter">
        <v-btn
          :class="{ active: selectedCategory === 'all' }"
          class="filter-btn"
          @click="selectedCategory = 'all'"
          outlined
          small
        >
          All Skills
        </v-btn>
        <v-btn
          v-for="category in skillCategories"
          :key="category.id"
          :class="{ active: selectedCategory === category.id }"
          class="filter-btn"
          @click="selectedCategory = category.id"
          outlined
          small
        >
          {{ category.title }}
        </v-btn>
      </div>

      <!-- Skills Categories -->
      <div
        v-for="category in filteredSkills"
        :key="category.id"
        class="skills-category reveal"
      >
        <h3 class="category-title">{{ category.title }}</h3>

        <v-row no-gutters class="skills-grid">
          <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="skill in category.skills"
            :key="skill.name"
            class="skill-col"
          >
            <div class="skill-card">
              <!-- Skill Header -->
              <div class="skill-header">
                <div class="skill-icon-container">
                  <a
                    v-if="skill.link"
                    :href="skill.link"
                    target="_blank"
                    @click.stop
                  >
                    <v-icon
                      size="50"
                      class="skill-icon"
                      :style="{ color: skill.color }"
                    >
                      {{ skill.icon }}
                    </v-icon>
                  </a>
                  <v-icon
                    v-else
                    size="50"
                    class="skill-icon"
                    :style="{ color: skill.color }"
                  >
                    {{ skill.icon }}
                  </v-icon>
                </div>

                <div class="skill-info">
                  <h4 class="skill-name">{{ skill.name }}</h4>
                  <div class="skill-meta">
                    <v-chip
                      :color="getLevelColor(skill.level)"
                      small
                      dark
                      class="level-chip"
                    >
                      {{ getLevelText(skill.level) }}
                    </v-chip>
                    <span class="experience">{{ skill.experience }}</span>
                  </div>
                </div>
              </div>

              <!-- Skill Content -->
              <div class="skill-content">
                <p class="skill-description">{{ skill.description }}</p>

                <!-- Skill Level Progress -->
                <div class="skill-level">
                  <div class="level-label">
                    <span>Proficiency</span>
                    <span class="level-text">{{
                      getLevelText(skill.level)
                    }}</span>
                  </div>
                  <v-progress-linear
                    :value="skill.level * 20"
                    :color="getLevelColor(skill.level)"
                    background-color="#555"
                    height="8"
                    rounded
                  ></v-progress-linear>
                </div>

                <!-- Technologies -->
                <div class="technologies">
                  <h5>Technologies</h5>
                  <div class="tech-chips">
                    <v-chip
                      v-for="tech in skill.technologies"
                      :key="tech"
                      x-small
                      outlined
                      class="tech-chip"
                    >
                      {{ tech }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script src="../js/skills.js"></script>
<script>
import skillsData from "../js/skills.js";

export default {
  ...skillsData,
};
</script>
<style lang="scss" src="../style/skills.scss"></style>
