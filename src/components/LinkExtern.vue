<template>
  <li>
    <a :href="link.url">{{ link.name }}</a>
  </li>
</template>

<script>
export default {
  name: "LinkExtern",
  props: ["link"]
};
</script>

<style scoped>
.footer {
  background-size: 100%;
  padding: 70px 30px;
}

.footer p {
  font-family: Roboto;
  font-size: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: #898989;
  margin-bottom: 60px;
  line-height: 1.5;
}

.footer a {
  color: blue;
  text-decoration: none;
}

.footer li a {
  text-decoration: none;
  font-family: Roboto;
  letter-spacing: 1px;
  color: #898989;
  margin: 10px;
}

.footer ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
}

@media screen and (max-width: 440px) {
  .footer ul {
    flex-direction: column;
    align-items: center;
    line-height: 2;
  }
}
</style>