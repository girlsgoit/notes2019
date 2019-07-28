<template>
    <div>
        <h1 v-if="tag == 'h1'">{{ value }} </h1>
        <h2 v-if="tag == 'h2'">{{ value }} </h2>
        <h3 v-if="tag == 'h3'">{{ value }} </h3>
        <p v-if="tag == 'p'"> {{ value }} </p>
        <ul v-if="tag == 'ul'">
            <li v-for="item in listContent" :key="item">{{item}}</li>
        </ul>
        <a v-if="tag == 'link'" :href="value">{{ value }}</a>
        <img style="max-width: 100%" v-if="tag == 'image'" :src="value" />
    </div>
</template>

<script>
export default {
    name: 'NoteElement',
    props: ['tag', 'value'],
    data: function() {
        return {
            listContent: null,
        }
    },
    created: function() {
        if (this.tag === 'ul') {
            this.listContent = this.value.split('\n');
        }
    },
}
</script>

<style scoped>

</style>
