<template>
    <div>
       <HeaderLoggedIn :user="user"/>
       <h1>Home</h1>
    </div>
</template>


<script>
import HeaderLoggedIn from "./HeaderLoggedIn.vue";
export default {
    name:'Home',
    data:function(){
        return {
            user: {
          name: 'Marc graciov'
            }
        }
    },
    components:{
        HeaderLoggedIn,
    }
}
</script>

<style scoped>

</style>
