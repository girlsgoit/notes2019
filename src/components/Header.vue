<template>
  <div>
    <HeaderLoggedIn :user="user" v-if="!!token" />
    <HeaderLoggedOut v-else/>
  </div>
</template>

<script>
import HeaderLoggedIn from "./HeaderLoggedIn.vue";
import HeaderLoggedOut from "./HeaderLoggedOut.vue";

export default {
  name: "Header",
  components: {
    HeaderLoggedIn,
    HeaderLoggedOut,
  },
  created: function() {
    this.token = localStorage.getItem("NOTES_AUTH");

    if (this.token) {
        this.user = { 
            username: localStorage.getItem('username'),
            fullName: localStorage.getItem('full_name'),
            id: localStorage.getItem('id'),
        }
    }
     console.log('User: ', this.user)
  },
  data: function() {
    return {
      user: {},
      token: ''
    };
  }
};
</script>
<style scoped>
.header {
  padding: 30px 0;
  font-family: "Roboto", sans-serif;
}

.header-container {
  max-width: 960px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
}

.header a {
  color: #393939;
  text-decoration: none;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.4s ease;
}

.header-left,
.header-right {
  width: 40%;
}

.header-middle {
  width: 20%;
}

.header-middle {
  text-align: center;
}

.header-right ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
}

.header-right a {
  margin-left: 40px;
}

.header-right ul li:first-child a {
  margin-left: 0;
}

.header a:hover {
  color: #278df6;
}

@media screen and (max-width: 900px) {
  .header {
    text-align: center;
  }

  .header-container {
    flex-direction: column;
  }

  .header-left,
  .header-right,
  .header-middle {
    width: 100%;
  }

  .header-middle {
    order: -1;
  }

  .header-right ul {
    justify-content: center;
  }

  .header-left,
  .header-middle {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 370px) {
  .header nav ul {
    flex-direction: column;
  }

  .header-right a {
    margin-left: 0;
  }

  .header-right nav ul li {
    margin-bottom: 10px;
  }

  .header-right nav ul li:last-child {
    margin-bottom: 0;
  }
}
</style>

