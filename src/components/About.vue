<template>
    <section class="about">
      <h2>
        About Notes App
      </h2>
      <p>
        Notes is a simple and helpful web application developed to capture and store ideas. It is a user-friendly application for taking notes that can be effortlessly accessed on any device to integrate easier into your activity. Notes is not only for your day to day life, is also a solution for any domain you’re a part of. The application has been developed by the GirlsGoIT 2019 Sumer-Camp participants.
      </p>
      <p>
          GirlsGoIT has reached to more than 2000 girls in more than 20 regions in Moldova, with the support of our partners who have contributed to GirlsGoIT Impact and Growth. Since 2015, we have implemented GirlsGoIT based on three priority areas.
      </p>
    </section>
</template>
<script>

export default {
  name: "About",
  }

</script>

<style scoped>
.about {
    text-align: center;
    font-size: 16px;
    font-family: Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding : 7.6em 0 9.25em 0;
    margin: 0 auto;
    max-width: 980px;
}
.about h2 {
    font-size: 2.5em;
    padding: 0 0 1.6em 0;
    margin: 0;
}
.about p {
    color: #6A6A6A;
    font-size: 1em;
    line-height: 1.75em;
    margin: 0;
    padding-bottom: 1em;
}

@media only screen and (max-width: 1180px){
    .about {
        font-size: 14px;
        padding: 5.7em 2.5em 4.125em 2.5em;
    }
}
@media only screen and (max-width: 960px){
    .about {
        font-size: 10px;
        padding: 3.8em 1em 3.5em 1em;
    }
}
</style>

