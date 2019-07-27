<template>
    <div>
        <HeaderLoggedOut/>
        <h1>Sign In</h1>
    </div>
</template>


<script>
import HeaderLoggedOut from "./HeaderLoggedOut.vue";
export default {
    name:'SignIn',
    data:function(){
        return {
          
        }
    },
    components:{
        HeaderLoggedOut,
    }
}
</script>

<style scoped>

</style>
