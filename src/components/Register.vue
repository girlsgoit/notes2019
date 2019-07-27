<template>
  <div class="auth">
    <img src="../assets/images/logo.svg" alt="Logo" />

    <div v-if="errorMessages.length !== 0" class="error-list">
      <p v-for="(error, index) in errorMessages" :key="index">{{error.message}}</p>
    </div>

    <form v-on:submit.prevent="onSubmit" class="auth-form">
      <div class="auth-inputs">
        <input
          v-for="inputInfo in inputInfoList"
          :key="inputInfo.name"
          :type="inputInfo.type"
          :name="inputInfo.name"
          v-model="form[inputInfo.name]"
          :class="inputInfo.class"
          :placeholder="inputInfo.placeholder"
        />
      </div>

      <div class="auth-buttons">
        <div>
          <input type="submit" name="Register" value="REGISTER" />
        </div>
        <div>
          <a href="/login">LOG IN</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Register",
  data: function() {
    return {
      form: {
        password: "",
        passConfirm: "",
        userName: "",
        fullName: ""
      },

      errorMessages: [],
      inputInfoList: [
        {
          name: "userName",
          type: "text",
          placeholder: "UserName",
          class: { error: false }
        },
        {
          name: "fullName",
          type: "text",
          placeholder: "Fullname",
          class: { error: false }
        },
        {
          name: "password",
          type: "password",
          placeholder: "Password",
          class: { error: false }
        },
        {
          name: "passConfirm",
          type: "password",
          placeholder: "Confirm Password",
          class: { error: false }
        }
      ]
    };
  },
  methods: {
    onSubmit: function() {
   
      this.errorMessages = [];
      for (let i = 0; i < this.inputInfoList.length; i++) {
          this.inputInfoList[i].class.error = false;
      }

      

      if (this.form.userName === "") {
        this.errorMessages.push({ message: "UserName is required", id: 0 });
      } else {
        axios.post('/users/is-unique', {username: this.form.userName })
        .then()
        .catch(error => {
          this.errorMessages.push({message: "User Name is already registered", id:0 });
          this.inputInfoList[0].class.error = true;  
        });

        
      }

      if (this.form.password == "") {
        this.errorMessages.push({ message: "Password is required", id: 2 });
      } else if (this.form.password.length < 4) {
        this.errorMessages.push({ message: "Passwords are too short", id: 2 });
      } else if (this.form.password !== this.form.passConfirm) {
        this.errorMessages.push({ message: "Passwords do not match", id: 2 });
        this.errorMessages.push({ message: "Passwords do not match", id: 3 });
      }

      if (this.form.fullName == "") {
        this.errorMessages.push({ message: "Name must be filled in", id: 1 });
      }

      if (this.form.passConfirm === "") {
        this.errorMessages.push({ message: "Confirm password", id: 3 });
      }

       for (let error of this.errorMessages) {
         this.inputInfoList[error.id].class.error = true;  
       }
       if (this.errorMessages.length==0 ){
        const user = {
          username: this.form.userName,
          full_name: this.form.fullName,
          password: this.form.password,
        };

         axios.post('/users/register', user)
         .then(response => {
           this.$router.push('/login');
         })
         .catch(error => {
           this.errorMessages.push({ message : "Register Error"})
         });
       }
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

.d-none {
  display: none;
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
