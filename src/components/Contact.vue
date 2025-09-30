<template>
  <div id="contact">
    <div class="container">
      <div class="ftitle">Contact</div>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="4" class="contactcard reveal">
          <div>
            <div>
              <a href="tel:+81070902834118"
                ><v-icon size="60" class="contacticon">mdi-phone</v-icon></a
              >
            </div>
            <div class="contacttitle">Phone</div>
            <div class="subcontacttitle">
              <a href="tel:+81070902834118">07090283418</a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="contactcard reveal">
          <div>
            <div><v-icon size="60" class="contacticon">mdi-home</v-icon></div>
            <div class="contacttitle">Address</div>
            <div class="subcontacttitle">
              〒222-0033 1-19-23 Shin-Yokohama, Kohoku-ku, Yokohama, Kanagawa
              Prefecture
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="contactcard reveal">
          <div>
            <div>
              <a href="mailto:sattpaing72@gmail.com"
                ><v-icon size="60" class="contacticon">mdi-email</v-icon></a
              >
            </div>
            <div class="contacttitle">Email</div>
            <div class="subcontacttitle">
              <a href="mailto:sattpaing72@gmail.com">sattpaing72@gmail.com</a>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script src="../js/contact.js"></script>
<style lang="scss" src="../style/contact.scss"></style>
