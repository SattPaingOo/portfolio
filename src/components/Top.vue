<template>
  <div id="top">
    <div id="pctop">
      <div class="container">
        <v-app-bar fixed elevation="5" class="nav" dark>
          <v-toolbar-title class="textbox">Satt Paing</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn text class="btnlink" @click="click('top')">home</v-btn>
          <v-btn text class="btnlink" @click="click('skills')">Skills</v-btn>
          <v-btn text class="btnlink" @click="click('experience')"
            >Experience</v-btn
          >
          <v-btn text class="btnlink" @click="click('project')">Projects</v-btn>
          <v-btn text class="btnlink" @click="click('contact')">Contact</v-btn>
          <v-btn text class="btnlink" @click="downloadfile">Resume</v-btn>
        </v-app-bar>
        <div class="left">
          <div>
            <v-img
              src="../assets/img/sattpaing.png"
              class="img"
              lazy-src="../assets/img/sattpaing.png"
            ></v-img>
            <div class="name">Satt Paing</div>
            <div class="jobtitle">Senior Web Developer</div>
          </div>
        </div>
        <div class="right">
          <div class="upper">
            <div class="titletext">Biography</div>
            <p class="intro-para">{{ biography.introduction }}</p>

            <!-- Compact Biography Grid -->
            <div class="biography-grid">
              <div
                v-for="section in biography.sections"
                :key="section.title"
                class="bio-card"
              >
                <div class="card-header">
                  <v-icon color="#FF6A4D" size="18">{{ section.icon }}</v-icon>
                  <span class="card-title">{{ section.title }}</span>
                </div>
                <p class="card-content">{{ section.content }}</p>
              </div>
            </div>

            <!-- Compact Bottom Section -->
            <div class="bottom-section">
              <!-- 3D Portfolio Link -->
              <div class="portfolio-highlight">
                <v-icon color="#FF6A4D" size="16">mdi-cube-outline</v-icon>
                <a
                  :href="biography.portfolio3D.url"
                  target="_blank"
                  class="portfolio-link"
                >
                  {{ biography.portfolio3D.description }}
                </a>
              </div>

              <!-- Education & Interests Row -->
              <div class="info-row">
                <div class="info-section">
                  <h4 class="info-title">Education</h4>
                  <div class="compact-chips">
                    <v-chip
                      v-for="edu in education"
                      :key="edu.institution"
                      class="education-chip"
                      x-small
                      label
                    >
                      {{ edu.institution }}
                    </v-chip>
                  </div>
                </div>
                <div class="info-section">
                  <h4 class="info-title">Interests</h4>
                  <div class="compact-chips">
                    <v-chip
                      v-for="interest in interests.slice(0, 4)"
                      :key="interest.name"
                      class="interest-chip"
                      x-small
                      label
                    >
                      <v-icon left x-small>{{ interest.icon }}</v-icon>
                      {{ interest.name }}
                    </v-chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="phonetop">
      <v-app-bar fixed class="mobile-nav" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title class="textbox">Satt Paing</v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" fixed temporary class="drawer">
        <v-list nav dense class="navlist">
          <v-list-item-group v-model="group" active-class="draweractive">
            <v-list-item class="navbox">
              <v-list-item-title class="navtext" @click="click('top')"
                >HOME</v-list-item-title
              >
            </v-list-item>
            <v-list-item class="navbox">
              <v-list-item-title class="navtext" @click="click('skills')"
                >SKILLS</v-list-item-title
              >
            </v-list-item>
            <v-list-item class="navbox">
              <v-list-item-title class="navtext" @click="click('experience')"
                >EXPERIENCE</v-list-item-title
              >
            </v-list-item>
            <v-list-item class="navbox">
              <v-list-item-title class="navtext" @click="click('project')"
                >PROJECTS</v-list-item-title
              >
            </v-list-item>
            <v-list-item class="navbox">
              <v-list-item-title class="navtext" @click="click('contact')"
                >CONTACT</v-list-item-title
              >
            </v-list-item>
            <v-list-item class="navbox">
              <v-list-item-title class="navtext" @click="downloadfile"
                >RESUME</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div class="imgbox">
        <div>
          <v-img
            src="../assets/img/sattpaing.png"
            class="img"
            lazy-src="../assets/img/sattpaing.png"
          ></v-img>
          <div class="name">Satt Paing</div>
          <div class="jobtitle">Senior Web Developer</div>
        </div>
      </div>
    </div>
    <div id="phonebio">
      <div class="ftitle">Biography</div>
      <p class="intro-para">{{ biography.introduction }}</p>

      <!-- Biography Sections for Mobile -->
      <div class="mobile-biography">
        <div
          v-for="section in biography.sections"
          :key="section.title"
          class="mobile-bio-section"
        >
          <div class="mobile-section-header">
            <v-icon color="#FF6A4D" size="18">{{ section.icon }}</v-icon>
            <h4 class="mobile-section-title">{{ section.title }}</h4>
          </div>
          <p class="mobile-section-content">{{ section.content }}</p>
        </div>
      </div>

      <!-- 3D Portfolio Link Mobile -->
      <div class="mobile-portfolio-highlight">
        <v-icon color="#FF6A4D" class="mr-2">mdi-cube-outline</v-icon>
        <span>{{ biography.portfolio3D.description }}: </span>
        <a
          :href="biography.portfolio3D.url"
          target="_blank"
          class="portfolio-link"
        >
          {{ biography.portfolio3D.url }}
        </a>
      </div>

      <div class="titletext">Education & Certifications</div>
      <div class="mobile-education">
        <div
          class="mobile-education-item"
          v-for="edu in education"
          :key="edu.institution"
        >
          <v-chip class="mobile-education-chip" label small>
            <v-icon left x-small>mdi-school</v-icon>
            {{ edu.institution }}
          </v-chip>
        </div>
      </div>
      <div class="mobile-certifications">
        <v-chip
          v-for="cert in certifications"
          :key="cert.name"
          class="mobile-cert-chip"
          x-small
          outlined
        >
          <v-icon left x-small>mdi-certificate</v-icon>
          {{ cert.name }}
        </v-chip>
      </div>

      <div class="titletext">Interests</div>
      <div class="mobile-interests">
        <v-chip
          v-for="interest in interests"
          :key="interest.name"
          class="mobile-interest-chip"
          small
          label
        >
          <v-icon left x-small>{{ interest.icon }}</v-icon>
          {{ interest.name }}
        </v-chip>
      </div>
    </div>
  </div>
</template>
<script src="../js/top.js"></script>
<style lang="scss" src="../style/top.scss"></style>
