<template>
  <div class="auth">
    <img src="../assets/images/logo.svg" alt="Logo" />

    <div v-if="!isCorrectPassword || !isCorrectUserName || isResponseError" class="error-list">
      <p>*Something went wrong.</p>
    </div>

    <form class="auth-form" @submit="checkForm">
      <div class="auth-inputs">
        <input
          @input="validation"
          type="text"
          v-bind:class="{ error : !isCorrectUserName }"
          name="UserName"
          placeholder="User Name"
          v-model="userName"
        />

        <input
          type="password"
          @input="validation"
          v-bind:class="{ error : !isCorrectPassword }"
          name="Password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <div class="auth-buttons">
        <div>
          <input type="submit" name="Login" value="Login" id="Login" @click="login" />
        </div>
        <div>
          <a href="/register">REGISTER</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      userName: "",
      password: "",
      isCorrectUserName: true,
      isCorrectPassword: true,
      isResponseError: false
    };
  },
  methods: {
    checkForm: function(e) {
      this.validation();
      e.preventDefault();
    },
    validation: function() {
      this.isCorrectUserName = true;
      this.isCorrectPassword = true;
      if (!this.userName) {
        this.isCorrectUserName = false;
      }

      if (!this.password) {
        this.isCorrectPassword = false;
      }
    },
    login: function() {
      let json = {
        username: this.userName,
        password: this.password
      };

      axios
        .post("users/login", json)
        .then(response => {
          const token = response.data && response.data.token;
          if (token) {
            localStorage.setItem("NOTES_AUTH", token);
          }
        })
        .catch(err => {
          console.log(err);
        });
        
      axios
        .get("users/me")
        .then(response => {
          let user = response.data;
          localStorage.setItem("username", user.username);
          localStorage.setItem("id", user.id);
          localStorage.setItem("full_name", user.full_name);

          this.$router.push("/notes");
        })
        .catch(() => {
         console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.account {
  background-color: #f2f2f2;
  height: 100%;
  width: 100%;
}

.auth {
  position: absolute;
  display: block;
  background-color: #ffffff;
  text-align: center;
  padding: 45px 43px 54px 43px;
  left: 50%;
  top: 50%;
  width: 314px;
  box-sizing: border-box;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  border-radius: 5px;
  box-shadow: 0px 2px 27px rgba(230, 230, 230, 0.5);
  transform: translateX(-50%) translateY(-50%);
}

.auth img {
  height: 46px;
  width: 122px;
  margin-bottom: 45px;
}

.auth-inputs {
  margin-bottom: 35px;
}

.auth-inputs input {
  height: 38px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  margin-bottom: 20px;
  display: block;
  color: black;
  width: 100%;
  padding-left: 14px;
  box-sizing: border-box;
}

.auth-inputs input::placeholder {
  color: #a9a9a9;
}

.auth-inputs input:last-child {
  margin-bottom: 0;
}

.auth-buttons {
  display: flex;
  align-items: center;
}

.auth-buttons div {
  width: 50%;
}

.auth-buttons input {
  background-color: #2ea1f8;
  color: #ffffff;
  text-align: center;
  letter-spacing: 0.5px;
  width: 100%;
  border: none;
  border-radius: 4px;
  line-height: 38px;
  font-weight: 500;
  cursor: pointer;
}

.auth-buttons a {
  text-decoration: none;
  font-weight: 400;
  font-style: normal;
  color: #2ea1f8;
}

.auth-buttons a:hover {
  text-decoration: underline;
}

.auth .error-list {
  color: rgb(225, 42, 42);
  background-color: #ffc7c7e3;
  border: 1px solid red;
  margin-bottom: 20px;
  border-radius: 4px;
}

.auth .error {
  background-color: #ffc7c7e3;
  color: red;
  border: rgb(255, 42, 42);
}
</style>
