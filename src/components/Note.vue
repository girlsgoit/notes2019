<template>
  <!-- Note -->
  <div>
    <Header/>

    <section class="note note-editor" @click="disable()">
      <div class="note-container">
        <span v-if="blocks.length===0" class="note-editor-empty"></span>
        <div v-for="(block, index) in blocks" :key="index">
          <span class="note-editor-add" @click.stop="add(index)"></span>
          <div class="note-element">
            <ShowComponent :block="block"/>
            <div class="note-delete" @click="oneDelete(index)">&#215;</div>
          </div>
        </div>
        <span class="note-editor-add note-editor-add--last" @click.stop="add(blocks.length)"></span>
        <button class="note-editor-delete" @click="totalDelete()">Delete this note</button>
      </div>
    </section>

    <Footer/>

    <Editor :class="{visible: !isActive}"
            :blocks="blocks"
            :index="currentIndex"
            :id="id"
            @blockAdded="blocks=($event)"
            @indexAdded="currentIndex=($event)"/>
  </div>
</template>

<script>
    import Footer from "./Footer.vue";
    import Header from "./Header.vue";
    import ShowComponent from "./ShowComponent.vue";
    import Editor from "./Editor.vue";
    import axios from "axios";

    export default {
        name: "Note",
        components: {
            Editor,
            ShowComponent,
            Header,
            Footer
        },
        data: function () {
            return {
                blocks: [],
                currentIndex: 0,
                id: 0,
                isActive: false,
                art: {}
            };
        },
        created: function () {
            this.id = this.$route.params.id;
            this.getNotes();
        },

        methods: {
            add: function (position) {
                this.currentIndex = position;
                this.isActive = true;
            },
            disable: function () {
                this.isActive = false;
            },
            getNotes: function () {
                axios
                    .get("notes/" + this.id)
                    .then(response => {
                        console.log(response);
                        this.blocks = response.data.note_elements;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            totalDelete: function () {
                axios
                    .delete("notes/" + this.id)
                    .then(() => {
                        this.$router.push("/notes");
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
            oneDelete(index) {
                this.blocks.splice(index, 1);
                console.log(this.blocks);
                axios
                    .put("notes/" + this.id, {note_elements: this.blocks})
                    .then(response => {
                        this.blocks = response.data.note_elements;
                    })
                    .catch(error => console.log(error));
            }
        }
    };
</script>

<style scoped>
  .visible {
    visibility: hidden;
  }

  .note {
    font-size: 16px;
    padding-top: 9.5em;
  }

  .note-container {
    max-width: 960px;
    padding: 0 15px;
    margin: 0 auto;
    font-family: Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #393939;
    line-height: 1.5;
  }

  .note h1 {
    font-size: 3.5em;
    margin-bottom: 1em;
    margin-top: 0;
  }

  .note h2 {
    font-weight: normal;
    margin-bottom: 0.9em;
    margin-top: 0;
    font-size: 2em;
  }

  .note h3 {
    font-size: 1.63em;
    font-weight: normal;
    margin-bottom: 1.07em;
    margin-top: 0;
  }

  .note div.img {
    object-fit: cover;
    margin: 0 -4.4em 4.4em -4.45em;
  }

  .note img {
    max-width: 100%;
    height: auto;
  }

  .note p {
    font-size: 1.3em;
    margin-bottom: 2.4em;
    margin-top: 0;
  }

  .note div.link {
    margin-bottom: 1.3em;
  }

  .note a {
    font-size: 1.3em;
    color: #208AFA;
    text-decoration-line: none;
  }

  .note ul {
    margin: 0 0 4.4em 0;
    list-style-type: none;
  }

  .note li {
    font-size: 1.3em;
    margin-bottom: 0.75px;
    position: relative;
  }

  .note li:before {
    content: "";
    width: 0.2em;
    height: 0.2em;
    background-color: #393939;
    display: block;
    position: absolute;
    left: -0.86em;
    top: 0.7em;
    border-radius: 0.09px;
  }


  @media only screen and (max-width: 1150px) {
    .note div.img {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 960px) {

    .note {
      font-size: 14px;
      padding-top: 3em;
    }

    .note h1,
    .note h2,
    .note h3,
    .note p,
    .note ul,
    .note div.img,
    .note .link {
      margin-bottom: 1em;
      margin-top: 0;
    }

    .note h2,
    .note h3 {
      font-weight: bold;
    }

    .note h1 {
      font-size: 2em;
    }

    .note h2 {
      font-size: 1.5em;
    }

    .note h3 {
      font-size: 1.25em;
    }
  }

  .note-element {
    position: relative;
  }

  .note-delete {
    display: none;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    color: orangered;
    background-color: white;
    box-shadow: 0 0 0 1px white;
    font-size: 18px;

    border: 1px solid orangered;
    width: 26px;
    height: 26px;
    border-radius: 13px;

    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -13px;

    transform: scale(1.05); /* fixat o miscarea lui x un pic la hover. */
    transition: transform 0.3s ease;

    cursor: pointer;
  }

  .note-element:hover .note-delete {
    display: flex;
  }

  .note-delete:hover {
    transform: scale(1.2);
  }

  .note-editor {
    font-size: 16px;
    font-family: Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 60px 0;
  }

  .note-editor-content {
    margin-bottom: 2rem;
  }

  .note-editor-add {
    display: block;
    text-align: center;
    cursor: pointer;
    opacity: 0;
  }

  .note-editor-add:hover {
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .note-editor-add:before {
    content: "";
    display: block;
    border-bottom: 1px solid #208AFA;
    position: relative;
    top: 15px;
  }

  .note-editor-add:after {
    content: "+";
    width: 30px;
    height: 30px;
    text-align: center;
    border: 1px solid #208AFA;
    display: inline-block;
    border-radius: 15px;
    color: #208AFA;
    line-height: 28px;
    background-color: white;
    box-shadow: 0 0 0 10px white;
    font-size: 20px;
    position: relative;
    transform: scale(0.8);
    transition: transform 0.3s ease;
  }

  .note-editor-add:hover:after {
    transform: scale(1);
  }

  .note-editor-empty:after {
    display: block;
    text-align: center;
    content: "It's empty, add some content.";
    font-weight: 400;
    color: #A9A9A9;
    font-size: 1.5em;
    padding: 1em 0;
  }

  .note-editor-add:hover:after {
    transform: scale(1);
  }

  .note-editor-add--last {
    margin: 2rem 0;
  }

  .note-editor-delete {
    letter-spacing: 0.08em;
    padding-bottom: 2em;
    padding-top: 2em;
    font-size: 0.8em;
    border: 1px solid orangered;
    color: orangered;
    font-weight: 600;
    background-color: transparent;
    text-transform: uppercase;
    width: 100%;
    cursor: pointer;
  }

  .note-editor-delete:hover {
    transition: 0.2s ease-in;
    background-color: orangered;
    color: white;
  }

  @media only screen and (max-width: 960px) {
    .note-editor {
      font-size: 14px;
      padding: 1em 1em 3.5em 1em;
    }
  }

  @media only screen and (max-width: 740px) {
    .note-editor {
      font-size: 12px;
      padding: 1em 1em 3.5em 1em;
    }
  }
</style>
