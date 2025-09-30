<template>
  <div id="contact">
    <div class="container">
      <div class="ftitle">Contact</div>

      <!-- Contact Methods Grid -->
      <v-row no-gutters class="contact-grid">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="contact in contactInfo"
          :key="contact.id"
          class="contact-col"
        >
          <div class="contact-card reveal">
            <!-- Card Header -->
            <div class="contact-header">
              <div class="icon-container">
                <a
                  v-if="contact.link"
                  :href="contact.link"
                  target="_blank"
                  @click.stop
                >
                  <v-icon
                    size="45"
                    class="contact-icon"
                    :style="{ color: contact.color }"
                  >
                    {{ contact.icon }}
                  </v-icon>
                </a>
                <v-icon
                  v-else
                  size="45"
                  class="contact-icon"
                  :style="{ color: contact.color }"
                >
                  {{ contact.icon }}
                </v-icon>
              </div>

              <div class="contact-info">
                <h3 class="contact-title">{{ contact.title }}</h3>
                <p class="contact-description">{{ contact.description }}</p>
              </div>
            </div>

            <!-- Card Content -->
            <div class="contact-content">
              <div class="contact-value">
                <a
                  v-if="contact.link && contact.type !== 'address'"
                  :href="contact.link"
                  class="contact-link"
                >
                  {{ contact.value }}
                </a>
                <span v-else class="contact-text">{{ contact.value }}</span>
              </div>

              <!-- Full address for location -->
              <div v-if="contact.type === 'address'" class="full-address">
                <small>{{ contact.fullAddress }}</small>
              </div>

              <!-- Availability -->
              <div class="availability">
                <v-icon small :color="contact.color">mdi-clock-outline</v-icon>
                <span>{{ contact.available }}</span>
              </div>

              <!-- Copy button for phone and email -->
              <div
                v-if="contact.type === 'phone' || contact.type === 'email'"
                class="action-button"
              >
                <v-btn
                  @click="copyToClipboard(contact.value)"
                  :color="contact.color"
                  small
                  outlined
                  class="copy-btn"
                >
                  <v-icon left small>mdi-content-copy</v-icon>
                  Copy
                </v-btn>
              </div>

              <!-- Map button for address -->
              <div v-if="contact.type === 'address'" class="action-button">
                <v-btn
                  @click="openLink(contact.link)"
                  :color="contact.color"
                  small
                  outlined
                  class="map-btn"
                >
                  <v-icon left small>mdi-map</v-icon>
                  View Map
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Social Links Section -->
      <div class="social-section">
        <h3 class="section-title">Connect With Me</h3>
        <div class="social-links">
          <div
            v-for="social in socialLinks"
            :key="social.id"
            class="social-card"
            @click="openLink(social.url)"
          >
            <v-icon
              size="30"
              :style="{ color: social.color }"
              class="social-icon"
            >
              {{ social.icon }}
            </v-icon>
            <div class="social-info">
              <span class="social-name">{{ social.name }}</span>
              <small class="social-description">{{ social.description }}</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Working Hours -->
      <div class="hours-section">
        <h3 class="section-title">Availability</h3>
        <div class="hours-info">
          <div class="timezone">
            <v-icon color="#FF6A4D" class="mr-2">mdi-earth</v-icon>
            <span>{{ workingHours.timezone }}</span>
          </div>
          <div class="hours-list">
            <div
              v-for="schedule in workingHours.available"
              :key="schedule.day"
              class="hours-item"
            >
              <span class="day">{{ schedule.day }}</span>
              <span class="hours">{{ schedule.hours }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../js/contact.js"></script>
<script>
import contactData from "../js/contact.js";

export default {
  ...contactData,
};
</script>
<style lang="scss" src="../style/contact.scss"></style>
