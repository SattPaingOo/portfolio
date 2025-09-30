<template>
  <div id="footer">
    <div class="container">
      <p class="footertext">
        © {{ currentYear }} Satt Paing. All rights reserved.
      </p>
    </div>
    <div class="totop" @click="Totop" title="Back to top">
      <v-icon color="#FF6A4D">mdi-chevron-up</v-icon>
    </div>
  </div>
</template>
<script src="../js/footer.js"></script>
<style lang="scss" src="../style/footer.scss"></style>
