<template>
    <div>
        <h1 v-if="tag == 'h1'">{{ value }}</h1>
        <h2 v-if="tag == 'h2'">{{ value }}</h2>
        <h3 v-if="tag == 'h3'">{{ value }}</h3>
        <h4 v-if="tag == 'h4'">{{ value }}</h4>
        <a v-if="tag == 'a'" :href="content">Link spre nu stiu unde</a>
        <img v-if="tag == 'img'" :src="value" />
    </div>
</template>

<script>
export default {
    name: 'NoteElement',
    props: ['tag', 'value'],
}
</script>

<style scoped>

</style>
