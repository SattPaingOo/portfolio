<template>
    <div id="experience">
        <div class="container">
            <div class="ftitle">Experience</div>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item color="#947668" fill-dot>
                    <v-card color="#947668" dark hover>
                        <v-card-title>Full Stack Developer</v-card-title>
                        <v-card-subtitle style="font-size:18px">Shingenki Company</v-card-subtitle>
                        <v-card-text class="white text--primary">
                            <br>
                            <h3>01/06/2018  - Present ( Myanmar , Yangon )</h3>
                            <br>
                            <h3>Team : Myanmar developer team</h3>
                            <br>
                            <h3>About : Built an Customer Project with team using React , Vue ( Frontend) and Java SpringBoot (Backend) and AWS.Built Shop project using shopify.</h3>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
                <v-timeline-item color="#947668" fill-dot>
                    <v-card color="#947668" dark hover>
                        <v-card-title>Student</v-card-title>
                        <v-card-subtitle style="font-size:18px">Metro IT and japanese Language Center</v-card-subtitle>
                        <v-card-text class="white text--primary">
                            <br>
                            <h3>2015  - 2017 ( Myanmar , Yangon )</h3>
                            <br>
                            <h3>Course : System Creator</h3>
                            <br>
                            <h3>About : Learnt Networking , Strategy , Programming and Japanese.Made a Assignment and School Project.</h3>
                            <br>
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