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
</script>
