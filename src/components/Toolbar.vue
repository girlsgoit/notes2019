<template>
  <!-- tool-bar -->
  <section class="tool-bar">
    <div class="tool-bar-container">
      <h1>Dashboard</h1>
      <button @click="createNewNote()">NEW NOTE</button>
    </div>
  </section>
  <!-- end of tool-bar -->
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Toolbar',
        data: function () {
            return {
                noteId: null,
            }
        },
        methods: {
            createNewNote: function() {
                axios.post('/notes/', {})
                    .then(response => {
                        this.noteId = response.data.id;
                        this.$router.push('/note/'+ this.noteId);
                     });
            }
        }
    }
</script>

<style scoped>
  .tool-bar {
    padding: 85px 0;
  }

  .tool-bar-container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tool-bar h1 {
    font-family: Roboto, sans-serif;
    font-size: 56px;
    font-weight: 300;
    margin: 10px;
  }

  .tool-bar button {
    font-family: Roboto;
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
    background: #2EA1f8;
    max-height: 55px;
    padding: 21px 28px;
    border-radius: 4px;
    border: 0px;
    cursor: pointer;
  }

  @media screen and (max-width: 570px) {
    .tool-bar {
      padding: 50px 0;
    }

    .tool-bar-container {
      flex-direction: column;
      align-items: center;
    }

    .tool-bar h1 {
      font-size: 40px;
    }
  }


</style>
