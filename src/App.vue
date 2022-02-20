<template>
  <v-app>
    <Top/>
    <Skills/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
  </v-app>
</template>

<script>
import Top from '@/components/Top'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Project from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Top:Top,
    Skills:Skills,
    Experience:Experience,
    Project:Project,
    Contact:Contact,
    Footer:Footer
  },

  data: () => ({
    //
  }),
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll",reveal);

</script>
<style lang="scss">
.reveal{
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}
</style>
