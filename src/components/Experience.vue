<template>
  <div id="experience">
    <div class="container">
      <div class="ftitle">Experience</div>
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="#303030" fill-dot class="reveal">
          <v-card color="#303030" dark hover>
            <v-card-title>Front-End Developer</v-card-title>
            <v-card-subtitle style="font-size: 16px; color: #ff6a4d"
              >Genki System Japan</v-card-subtitle
            >
            <v-card-text class="white text--primary">
              <br />
              <h3>07/2024 - Present ( Japan , Shin-Yokohama )</h3>
              <br />
              <h3>Team : Japan Dev team</h3>
              <br />
              <h3>
                About : Built an Customer Project with team using React , Next ,
                Vue , Nuxt ( Frontend) , Wordpress.
              </h3>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="#303030" fill-dot class="reveal">
          <v-card color="#303030" dark hover>
            <v-card-title>Full Stack Developer</v-card-title>
            <v-card-subtitle style="font-size: 16px; color: #ff6a4d"
              >Shingenki Company</v-card-subtitle
            >
            <v-card-text class="white text--primary">
              <br />
              <h3>06/2018 - 06/2024 ( Myanmar , Yangon )</h3>
              <br />
              <h3>Team : Myanmar Dev team</h3>
              <br />
              <h3>
                About : Built an Customer Project with team using React , Vue (
                Frontend) and Java SpringBoot (Backend) and AWS.Built Shop
                project using shopify.
              </h3>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item color="#303030" fill-dot class="reveal">
          <v-card color="#303030" dark hover>
            <v-card-title>Student</v-card-title>
            <v-card-subtitle style="font-size: 16px; color: #ff6a4d"
              >Metro IT and japanese Language Center</v-card-subtitle
            >
            <v-card-text class="white text--primary">
              <br />
              <h3>2015 - 2017 ( Myanmar , Yangon )</h3>
              <br />
              <h3>Course : System Creator</h3>
              <br />
              <h3>
                About : Learnt Networking , Strategy , Programming and
                Japanese.Made a Assignment and School Project.
              </h3>
              <br />
              <h3>Achievements : ITPEC(IP) , ITPEC(FE) and N4 (Japanese)</h3>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>
<script src="../js/experience.js"></script>
<style lang="scss" src="../style/experience.scss"></style>
