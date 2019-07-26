<template>
  <footer class="footer">
    <p>
      Această aplicație a fost dezvoltată in cadrul evenimentului
      <a
        href="https://girlsgoit.org/programme/summer-stem-programme.html"
      >Tabăra de vară STEM</a>
    </p>
    <ul>
      <LinkExtern v-for="link in links" :key="link.name" :link="link" />
    </ul>
  </footer>
</template>

<script>
import LinkExtern from "./LinkExtern.vue";
export default {
  name: "Footer",
  components: {
    LinkExtern
  },
  data: function() {
    return {
      links: [
        { name: "Facebook", url: "https://www.facebook.com/GirlsGoIT/" },
        {
          name: "YouTube",
          url: "https://www.youtube.com/channel/UCixmUgWhEp5Sj7kpzc6ZOTg"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/girlsgoit?igshid=lp20ohcww4b0"
        }
      ]
    };
  }
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