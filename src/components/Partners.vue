<template>
    <section class="partners">
    <div class="partners-container">
      <header class="partners-header">
        <h2>Partners</h2>
        <p>GirlsGoIT Summer Camp is organised by TEKEDU, with the support of multiple partners, namely:</p>
      </header>
      <section class="partners-content">
          <ul>
              <li>
                <a href="https://am.mfa.lt/am/ru/">
                  <img src="../assets/images/partners/embassy-of-lithuania.png" alt="Embassy of Lithuania">
                </a>
              </li>
              <li>
                <a href="https://orangeprojects.lt/en/">
                  <img src="../assets/images/partners/lithuanian-development-cooperation.svg" alt="Lithuanian Development Cooperation">
                </a>
              </li>
              <li>
                <a href="https://md.usembassy.gov/">
                  <img src="../assets/images/partners/usembassy.png" alt="US Embassy">
                </a>
              </li>
              <li>
                <a href="http://www.ellation.com/">
                  <img src="../assets/images/partners/ellation.png" alt="ellation">
                </a>
              </li>
              <li>
                <a href="https://www.sozialministerium.at/siteEN/Ministry/Welcome_to_the_Ministry/">
                  <img src="../assets/images/partners/austria-federal-ministry-of-labour.png" alt="Austria Federal Ministry of Labour">
                </a>
              </li>
              <li>
                <a href="https://youngfeministfund.org/">
                  <img src="../assets/images/partners/FRIDA.svg" alt="FRIDA">
                </a>
              </li>
              <li>
                <a href="https://www.unfpa.org/">
                  <img src="../assets/images/partners/unfpa.png" alt="UNFPA">
                </a>
              </li>
              <li>
                <a href="https://molddata.md/">
                  <img src="../assets/images/partners/molddata.png" alt="MoldData">
                </a>
              </li>
              <li>
                <a href="https://www.sozialministerium.at/siteEN/Ministry/Welcome_to_the_Ministry/">
                  <img src="../assets/images/partners/egc.png" alt="E-governance Agency Moldova">
                </a>
              </li>
              <li>
                <a href="https://ffwagency.com/">
                  <img src="../assets/images/partners/ffw.png" alt="FFW">
                </a>
              </li>
              <li>
                <a href="https://atomate.net/">
                  <img src="../assets/images/partners/atomate.png" alt="Atomate">
                </a>
              </li>
              <li>
                <a href="https://www.ipgroupplc.com/">
                  <img src="../assets/images/partners/ipg.png" alt="IPGroup">
                </a>
              </li>
              <li>
                <a href="https://www.mixbook.com/">
                  <img src="../assets/images/partners/mixbook.png" alt="Mixbook">
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/atelier99.org/">
                  <img src="../assets/images/partners/atelier99.png" alt="Atelier99">
                </a>
              </li>
              <li>
                <a href="http://and.md/">
                  <img src="../assets/images/partners/and.png" alt="Academia Nicolae Dumitrescu">
                </a>
              </li>
              <li>
                <a href="https://www.aise.md/">
                  <img src="../assets/images/partners/aise.png" alt="Academia de Inovare și Schimbare prin Educație">
                </a>
              </li>
              <li>
                <a href="https://amigo.studio/">
                  <img src="../assets/images/partners/amigo.png" alt="Amigo">
                </a>
              </li>
            </ul>
      </section>
    </div>
  </section>
</template>
<script>

export default {
  name: "Partners",

  }

</script>

<style scoped>
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
</style>

