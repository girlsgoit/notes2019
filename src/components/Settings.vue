<template>
    <div>
        <HeaderLoggedIn :user="user"/>
        <h1>Settings</h1>
    </div>
</template>


<script>
import HeaderLoggedIn from "./HeaderLoggedIn.vue";
export default {
    name:'Settings',
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
