<template>
  <div>
    <!-- tool-bar -->
    <section class="tool-bar">
      <div class="tool-bar-container">
        <h1>Settings</h1>
        <button @click="settings">SAVE SETTINGS</button>
      </div>
    </section>

    <!-- end of tool-bar -->
    <section class="settings">
      <div class="settings-container">
        <form action class="settings-form" @submit="checkSettings">
          <div class="inputs">
            <input
              v-bind:class="{ error : !isCorrectFullName }"
              @input="validate"
              type="text"
              name="full_name"
              v-model="fullName"
              placeholder="Full Name"
            />

            <input
              v-bind:class="{ error : !isCorrectOldPassword }"
              @input="validate"
              v-model="oldPassword"
              type="password"
              name="old_password"
              placeholder="Old Password"
            />
            <input
              v-bind:class="{ error : !isCorrectNewPassword || !isToShort }"
              @input="validate"
              v-model="newPassword"
              type="password"
              name="new_password"
              placeholder="New Password"
            />
            <input
              v-bind:class="{ error : !isCorrectConfirmPassword }"
              v-model="confirmPassword"
              @input="validate"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>

          <div class="textarea">
            <textarea v-model="customTheme" name="custom_theme" cols="30" rows="10" placeholder="Custom Theme"></textarea>
          </div>
        </form>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Footer from "./Footer";
export default {
  name: "Settings",
  components: { Footer },
  data: function() {
    return {
      isCorrectFullName: true,
      isCorrectOldPassword: true,
      isCorrectNewPassword: true,
      isCorrectConfirmPassword: true,
      isToShort: true,
      fullName: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      customTheme: "",
      username: "",
      info: null,
      id: 0
    };
  },
  created: function() {
    this.id = this.$route.params.id;
    axios.get('users/'+ this.id)
    .then(response => {
      this.fullName=response.data.full_name;
      this.customTheme=response.data.settings;
      this.username=response.data.username;
    })
  },
  methods: {
    checkSettings: function(e) {
      this.validate();
      e.preventDefault();
    },
    validate: function() {
      if (!this.fullName) {
        this.isCorrectFullName = false;
      } else {
        this.isCorrectFullName = true;
      }
      if (!this.oldPassword) {
        this.isCorrectOldPassword = false;
      } else {
        this.isCorrectOldPassword = true;
      }

      if (!this.newPassword || this.newPassword === this.oldPassword) {
        this.isCorrectNewPassword = false;
      } else {
        this.isCorrectNewPassword = true;
      }

      if (!this.confirmPassword || this.confirmPassword !== this.newPassword) {
        this.isCorrectConfirmPassword = false;
      } else {
        this.isCorrectConfirmPassword = true;
      }

      if (this.newPassword.length < 4) {
        this.isToShort = false;
      } else {
        this.isToShort = true;
      }
    },
    settings: function() {
      const json = {
        full_name: this.fullName,
        username: this.username,
        password: this.password,
        settings: this.customTheme,
      };
      axios.put('users/'+ this.id, json)
      .then(response => {
        this.info = response.data;
      });
    }
  }
};
</script>
<style scopes>
.settings {
  font-family: roboto, sans-serif;
  font-size: 18px;
  padding-top: 50px;
}

.settings .settings-form {
  display: flex;
  margin: 0 -15px;
  font-family: sans-serif;
}

.settings .inputs {
  flex: 0 0 299px;
  max-width: 299px;
}

.settings .textarea {
  flex: 1 0 auto;
}

.settings .inputs,
.settings .textarea {
  padding: 0 15px;
}

.settings input {
  display: block;
  width: 100%;
  height: 66px;
  padding-left: 21px;
  margin: 0 0 20px 0;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
}

.settings input:last-child {
  margin-bottom: 0;
}

.settings textarea {
  resize: none;
  width: 100%;
  height: 100%;
  min-height: 300px;
  padding-left: 21px;
  padding-top: 23px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: sans-serif;
}

.settings input.error,
.settings textarea.error {
  background-color: #ffc7c7e3;
  color: red;
  border: rgb(255, 42, 42);
}

.settings .settings-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}

@media screen and (max-width: 800px) {
  .settings .settings-form {
    justify-content: center;
    flex-direction: column;
  }

  .settings input:last-child {
    margin-bottom: 20px;
  }

  .settings .inputs {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.tool-bar {
  padding: 60px 0 0 0;
}

.tool-bar-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tool-bar h1 {
  font-family: Roboto, sans-serif;
  font-size: 56px;
  font-weight: 300;
  margin: 10px;
}

.tool-bar button {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
  background: #2ea1f8;
  max-height: 55px;
  padding: 21px 28px;
  border-radius: 4px;
  border: 0px;
  cursor: pointer;
}

@media screen and (max-width: 570px) {
  .tool-bar {
    padding: 50px 0;
  }

  .tool-bar-container {
    flex-direction: column;
    align-items: center;
  }

  .tool-bar h1 {
    font-size: 40px;
  }
}
</style>
