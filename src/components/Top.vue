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
            <p class="para">
              Hi , I am Satt Paing , Currenty working as a Web Developer at
              Shingenki Company . I have a (Diploma of IT ) of
              <a href="http://metro-myanmar.com/mic/" target="_blank"
                >Metro IT & Japanese Language Center</a
              >
              and Certificate of
              <a
                href="https://itpec.org/about/itpec-common-exam.html"
                target="_blank"
                >ITPEC (FE)</a
              >
              .
            </p>
            <p class="para">
              Senior Web Developer specializing in front end development.
              Experienced with all stages of the development cycle for dynamic
              web projects. Well-versed in numerous programming languages
              including HTML5, Java , JavaScript , CSS , MySQL and knowledge in
              Rest API . I am developing React and Vue Js
              Framework.Well-Knowledge in Version Control System (Git) , Agile
              Project Management Framework (Scrum,Board) . Now I trying to good
              as 10x Programmer.
            </p>
            <div class="lower">
              <div class="child">
                <div class="titletext">Education</div>
                <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
                  >Metro IT and Japanese Language Center
                </v-chip>
                <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
                  >BA : Dagon University Distance (History)
                </v-chip>
              </div>
              <div class="child">
                <div class="titletext">Interest</div>
                <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
                  >Learning new languages</v-chip
                >
                <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
                  >Listening Music</v-chip
                >
                <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
                  >Cloud Computing</v-chip
                >
                <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label>Reading</v-chip>
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
      <p class="para">
        Hi , I am Satt Paing , Currenty working as a Web Developer at Shingenki
        Company . I have a (Diploma of IT ) of
        <a href="http://metro-myanmar.com/mic/" target="_blank"
          >Metro IT & Japanese Language Center</a
        >
        and Certificate of
        <a href="https://itpec.org/about/itpec-common-exam.html" target="_blank"
          >ITPEC (FE)</a
        >
        .
      </p>
      <p class="para">
        Senior Web Developer specializing in front end development. Experienced
        with all stages of the development cycle for dynamic web projects.
        Well-versed in numerous programming languages including HTML5, Java ,
        JavaScript , CSS , MySQL and knowledge in Rest API . I am developing
        React and Vue Js Framework.Well-Knowledge in Version Control System
        (Git) , Agile Project Management Framework (Scrum,Board) . Now I trying
        to good as 10x Programmer.
      </p>
      <div class="titletext">Education</div>
      <div class="chipgp">
        <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
          >Metro IT and Japanese Language Center
        </v-chip>
        <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
          >BA : Dagon University Distance (History)
        </v-chip>
      </div>
      <div class="titletext">Interest</div>
      <div class="chipgp">
        <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label
          >Learning new languages</v-chip
        >
        <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label>Listening Music</v-chip>
        <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label>Cloud Computing</v-chip>
        <v-chip class="mt-1 mb-1 ml-1 mr-1 chip" label>Reading</v-chip>
      </div>
    </div>
  </div>
</template>
<script src="../js/top.js"></script>
<style lang="scss" src="../style/top.scss"></style>
