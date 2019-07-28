<template>
  <div id="app">
    <HeaderLoggedIn :user="user" v-if="!!user.token" />
    <router-view></router-view>
    <Footer v-if="!!user.token"/>
  </div>
</template>

<script>
import HeaderLoggedIn from "./components/HeaderLoggedIn.vue";
import Footer from './components/Footer.vue';

export default {
  name: "app",
  components: {
    HeaderLoggedIn,
    Footer,
  },
  data: function () {
    return {
      user: {
        token: localStorage.getItem('NOTES_AUTH'),
        id: localStorage.getItem('USER_ID'),
        username: localStorage.getItem('USER_NAME'),
        fullName: localStorage.getItem('FULL_NAME'),
      },
    }
  },
  created() {
    if (!this.user.token) {
      this.user = {
        token: localStorage.getItem('NOTES_AUTH'),
        id: localStorage.getItem('USER_ID'),
        username: localStorage.getItem('USER_NAME'),
        fullName: localStorage.getItem('FULL_NAME'),
      };

    }
    console.log('user: ', this.user);
  },
  mounted() {
    if (!this.user.token) {
      this.user = {
        token: localStorage.getItem('NOTES_AUTH'),
        id: localStorage.getItem('USER_ID'),
        username: localStorage.getItem('USER_NAME'),
        fullName: localStorage.getItem('FULL_NAME'),
      };
    }
  },
  beforeRouteUpdate() {
    if (!this.user.token) {
      this.user = {
        token: localStorage.getItem('NOTES_AUTH'),
        id: localStorage.getItem('USER_ID'),
        username: localStorage.getItem('USER_NAME'),
        fullName: localStorage.getItem('FULL_NAME'),
      };
    }
  },
  beforeRouteEnter() {
    if (!this.user.token) {
      this.user = {
        token: localStorage.getItem('NOTES_AUTH'),
        id: localStorage.getItem('USER_ID'),
        username: localStorage.getItem('USER_NAME'),
        fullName: localStorage.getItem('FULL_NAME'),
      };
    }
  }
}

</script>

<style>

</style>
