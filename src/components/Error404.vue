<template>
    <div class="error-404">
    <h1>OOPS!</h1>
    <div class="text">
      <p class='line1'>404-PAGE NOT FOUND</p>
      <p class='text2'>The page you are looking for might have been removed, had it's name changed or is temporarily
        unavailable.</p>
      <a href="index.html">Go to homepage</a>
    </div>
  </div>
    
</template>

<script>
export default {
    name:'Error404',
}
</script>

<style scoped>
body {
    background-color: #ffc7c7e3;
}

.error-404 {
    text-align: center;
    font-family: sans-serif;
}

.error-404 h1 {
    color: rgba(0, 0, 0, 0.74);
    font-weight: 900;
    display: block;
    margin-bottom: 7px;
    letter-spacing: 0.2em;
    font-size: 10vw;
}

.error-404 .text {
    letter-spacing: 2px;
    margin-top: 10px;
}

.error-404 a {
    border-radius: 20px;
    border: none;
    box-shadow: 30px;
    background-color: #3792ed;;
    box-sizing: border-box;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.7);
    display: inline-block;
    padding: 0.75em 1.5em;
    margin-top: 30px;
}

.text2 {
    margin-left: 40px;
    margin-right: 40px;
}
</style>