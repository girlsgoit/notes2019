<template>
     <section class="features-box">
        <div class="features-container">
            <div class="features-header">
                <h2 class="features-title">Features</h2>
                <p class="features-subtitle">Designed with love to give you all you need daily in just one app and a few clicks. Developed to fill in a gap in your life and to serve an unmistakable purpose.</p>
            </div>
            <div class="features-presentation">
                <ul class="features">
                    <li class="feature">
                        <img src="../assets/images/icons/desktop.svg" alt="image desktop">
                        <h3>Responsive</h3>
                        <p>Developed to be used on every kind of device: computer, smartphone, tablet etc.</p>
                    </li>
                    <li class="feature">
                        <img src="../assets/images/icons/rocket.svg" alt="image rocket">
                        <h3>Reactive</h3>
                        <p>Giving the oportunity to publish any note in just a second.
                        </p>
                    </li>
                    <li class="feature">
                        <img src="../assets/images/icons/robot.svg" alt="image robot">
                        <h3>Handy</h3>
                        <p>Designed especially to give a better user experience: easy to learn, use or deal with.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>

export default {
  name: "Features",
  }

</script>

<style scoped>
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
</style>
