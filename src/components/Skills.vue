<template>
    <div id="skills">
        <div class="container">
            <div class="ftitle">Skills</div>
            <v-row no-gutters>
                <v-col cols="12" sm="6" md="4" class="skillscard reveal">
                    <div>
                        <div><a href="https://reactjs.org/" target="_blank"><v-icon size="100" class="skillicon">mdi-react</v-icon></a></div>
                        <div class="skilltitle">React</div>
                        <div class="subskilltitle">[ reactrouter , i18n ]</div>
                        <div class="subskilltitle">[ redux , UI Library , etc ]</div>
                        <v-rating color="black lighten-3" background-color="black lighten-1" value="4" size="30" readonly></v-rating>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="skillscard reveal">
                    <div>
                        <div><a href="https://vuejs.org/" target="_blank"><v-icon size="100" class="skillicon">mdi-vuejs</v-icon></a></div>
                        <div class="skilltitle">Vue</div>
                        <div class="subskilltitle">[ vuerouter , i18n ]</div>
                        <div class="subskilltitle">[ vuex , UI Library , etc ]</div>
                        <v-rating color="black lighten-3" background-color="black lighten-1" value="4" size="30" readonly></v-rating>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="skillscard reveal">
                    <div>
                        <div><v-icon size="100" class="skillicon">mdi-code-braces</v-icon></div>
                        <div class="skilltitle">Web Development</div>
                        <div class="subskilltitle">[ Html , Css  ]</div>
                        <div class="subskilltitle">[ javascript , jquery ]</div>
                        <v-rating color="black lighten-3" background-color="black lighten-1" value="4" size="30" readonly></v-rating>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="skillscard reveal">
                    <div>
                        <div><a href="https://aws.amazon.com/" target="_blank"><v-icon size="100" class="skillicon">mdi-aws</v-icon></a></div>
                        <div class="skilltitle">AWS</div>
                        <div class="subskilltitle">[ S3 , Route53 , Certificate ]</div>
                        <div class="subskilltitle">[ cognito , cloudfront , lambda , etc ]</div>
                        <v-rating color="black lighten-3" background-color="black lighten-1" value="3" size="30" readonly></v-rating>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="skillscard reveal">
                    <div>
                        <div><a href="https://www.java.com/en/" target="_blank"><v-icon size="100" class="skillicon">mdi-language-java</v-icon></a></div>
                        <div class="skilltitle">Java</div>
                        <div class="subskilltitle">[ JavaSE , JavaEE ]</div>
                        <div class="subskilltitle">[ Spring (Boot & MVC), JUnit, Maven ]</div>
                        <v-rating color="black lighten-3" background-color="black lighten-1" value="2" size="30" readonly></v-rating>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="4" class="skillscard reveal">
                    <div>
                        <div><a href="https://www.mysql.com/" target="_blank"><v-icon size="100" class="skillicon">mdi-database</v-icon></a></div>
                        <div class="skilltitle">DateBase</div>
                        <div class="subskilltitle">[ Mysql ]</div>
                        <v-rating color="black lighten-3" background-color="black lighten-1" value="2" size="30" readonly></v-rating>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script src="../js/skills.js"></script>
<style lang="scss" src="../style/skills.scss"></style>