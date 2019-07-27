<template>
    <div>
  <Header/>
  <Hero/>
  <About/>
  <Features/>
  <Gallery/>
  <Partners/>
  <Footer/>
    </div>

</template>


<script>

import Footer from "./Footer.vue";
import Partners from "./Partners.vue";
import Gallery from "./Gallery.vue";
import Features from "./Features.vue";
import About from "./About.vue";
import Hero from "./Hero.vue";
import Header from "./Header.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    About,
    Features,
    Gallery,
    Partners,
    Footer,

  }


};
</script>

<style scoped>
.header {
    padding: 30px 0;
    font-family: 'Roboto', sans-serif;
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
    color:#278DF6;
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
    
    .header-middle{
        order:-1;
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
/*  Header styling*/

/* hero styling */

.hero {
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: center;
    display: flex;
    padding: 190px 30px;
    box-sizing: border-box;
}

.hero img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    top: 0;
    left: 0;
}

.hero-overlay {
    height: 100%;
    width: 100%;
    opacity: 0.6;
    z-index: 2;
    background-color: rgb(12, 12, 12);
    position: absolute;
    top: 0;
    left: 0;
}

.hero-text {
    font-family: Roboto;
    font-weight: 300;
    font-size: 24px;
    line-height: 50px;
    text-align: center;
    z-index: 3;
    color: #FFFFFF;
    display: block;
    position: relative;
    max-width: 780px;
    margin: 0 auto;
}

.hero-title {
    margin: 0;
    margin-bottom: 45px;
}

.hero-subtitle {
    line-height: 1.25;
    font-size: 24px;
    max-width: 580px;
    margin: 0 auto;
}

@media screen and (max-width: 1000px) {
    .hero-subtitle {
        font-size: 20px;
    }
    .hero-title {
        margin-top: 20px;
        font-size: 35px;
    }
    .hero {
        padding: 150px 30px;
    }
}

@media screen and (max-width: 600px) {
    .hero-subtitle {
        font-size: 20px;
    }
    .hero-title {
        margin: 20px 0;
    }
    .hero {
        padding: 100px 30px;
    }

/* End Hero Styling  */
/* About Styling */
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
/* End About Styling */
/* Features Styling */
.features-box {
             position: relative;
             text-align: center;
             display: block;
             background: #FAFAFA;
             padding: 90px 0;
         }
         
         .features-container {
             max-width: 960px;
             padding: 30px;
             margin: 0 auto;
         }
         
         .features-header {
             margin-top: 0;
             padding: 0;
             margin-bottom: 60px;
         }
         
         .features-title {
             font-family: Roboto;
             font-style: normal;
             font-weight: 500;
             font-size: 40px;
             line-height: 47px;
             text-align: center;
             letter-spacing: 1px;
             display: block;
             margin: 0;
             margin-bottom: 30px;
         }
         
         .features {
             display: flex;
             list-style: none;
             font-family: Roboto;
             margin: 0 50px;
             padding: 0;
             margin: 0;
         }
         
         .features img {
             margin-bottom: 30px;
         }
         
         .feature h3 {
             font-family: Roboto;
             font-style: normal;
             font-size: 16px;
             line-height: 20px;
             font-weight: 500;
             margin-top: 0;
         }
         
         .feature {
             padding: 0 15px;
         }
         
         .feature p {
             font-family: Roboto;
             font-style: normal;
             font-weight: normal;
             font-size: 15px;
             line-height: 25px;
             margin: 0 auto;
             max-width: 400px;
         }
         
         .features-subtitle {
             font-family: Roboto;
             font-style: normal;
             font-weight: normal;
             font-size: 15px;
             line-height: 24px;
             text-align: center;
             max-width: 600px;
             margin: 0 auto;
         }
         
         @media screen and (max-width: 1000px) {
             .features-subtitle {
                 font-size: 13px;
             }
             .features {
                 display: block;
             }
             .feature p {
                 font-size: 13px;
             }
             .features-title {
                 font-size: 34px;
             }
             .feature {
                 margin-bottom: 50px;
             }
         }
         /* End Features Styling */
        /* Gallery styling */
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr) ;
    box-sizing: border-box;
    grid-gap: 0;
}
.gallery div {
    margin: 0 auto;
    line-height: 0;
}
.gallery img {
    width: 100%; 
    object-fit: cover;
    height: 238px;
}
@media only screen and (max-width: 960px){
    .gallery {
        grid-template-columns: 1fr 1fr;
    }
}
@media only screen and (max-width: 480px){
    .gallery {
        grid-template-columns: 1fr;
    }
}
/* End Gallery Styling */
/* Partners Styling */
.partners {
    padding: 80px 0;
    font-family: Roboto, sans-serif;
}

.partners-container{
    max-width: 960px;
    margin: 0 auto;
    padding: 0 30px;
}

.partners-header {
    margin-bottom: 80px;
    text-align: center;
}

.partners-header h2 {
    font-size: 40px;
    margin-top: 0;
    font-weight: 500;
}

.partners-header p {
    font-size: 15px;
    opacity: 0.7;
}

.partners-content ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0 30px;
    list-style-type: none;
}

.partners-content li{
    max-width: 25%;
    flex: 0 0 25%;
    padding: 0 30px;
    box-sizing: border-box;
}

.partners-content img{
    width: 100%;
    object-fit: contain;
}

@media screen and (max-width: 960px) {
    .partners-content li{
        max-width: 33.33%;
        flex: 0 0 33.33%;
        margin: 0 0 30px 0;
    }
}

@media screen and (max-width: 660px) {
    .partners-content li{
        max-width: 50%;
        flex: 0 0 50%;
    }
}
@media screen and (max-width: 480px) {
    .partners-content li{
        max-width: 100%;
        flex: 0 0 100%;
        margin: 0 0 30px 0;
    }
}
/* End Partners Styling */
}
</style>

