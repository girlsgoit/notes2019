<template>
  <!-- Note -->
  <article class="note">
    <div class="note-container">
      <section class="note note-editor">
        <span v-if="blocks.length===0" class="note-editor-empty"></span>
        <div v-for="(block, index) in blocks" :key="index">
          <span class="note-editor-add" @click="add(index)"></span>
          <ShowComponent :block="block" />
        </div>
        <span class="note-editor-add" @click="add(blocks.length)"></span>
        <!-- <button @click="add(blocks.length)">+</button> -->
        <button class="note-editor-delete" @click="totaldelete()">Delete this note</button>
      </section>

      <div :class="{visible: !isActive}">
        <Editor
          :blocks="blocks"
          :index="currentIndex"
          @blockAdded="blocks=($event)"
          @indexAdded="currentIndex=($event)"
        />
      </div>
    </div>
  </article>
  <!-- End of Note -->
</template>

<script>
import ShowComponent from "./ShowComponent.vue";
import Editor from "./Editor.vue";
import axios from "axios";

export default {
  name: "Note",
  components: {
    Editor,
    ShowComponent
  },
  data: function() {
    return {
      blocks: [
        {
          tag: "h1",
          content: "Hello world"
        }
      ],
      currentIndex: 0,
      id: 0,
      isActive: false
    };
  },
  created: function() {
    this.id = this.$route.params.id;
    this.getNotes();
  },

  methods: {
    save: function(tag, content) {
      let newBlock = {
        tag: tag,
        content: content
      };
      this.blocks.splice(this.currentIndex, 0, newBlock);
      this.currentIndex++;
      axios.post().then(response => (this.blocks = response.data.note_elements));
    },
    add: function(position) {
      this.currentIndex = position;
      this.isActive = true;
    },
    disable: function() {
      this.isActive = false;
    },
    getNotes: function() {
      axios
        .get("notes/" + this.id)
        .then(response => (this.blocks = response.data.note_elements))
        // .catch(error => {console.log(error)});
    },
    totalDelete: function() {
      axios
        .delete("notes/" + this.id)
        .then(response => (this.blocks = response.data))
        // .catch(error => {console.log(error)});
    },
    oneDelete() {
      this.blocks.splice(this.currentIndex, 1);
        // axios
        // .post("notes/" + this.id)
        // .then(response => (this.blocks = response.data.note_elements))
        // .catch(error => console.log(error));
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
  font-family: Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
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
  color: #208afa;
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

.note-editor {
  font-size: 16px;
  font-family: Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
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
  border-bottom: 1px solid #208afa;
  position: relative;
  top: 15px;
}

.note-editor-add:after {
  content: "+";
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid #208afa;
  display: inline-block;
  border-radius: 15px;
  color: #208afa;
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
  padding: 0 0 3em 0;
  color: #a9a9a9;
  font-size: 1.5em;
  padding: 1em 0;
}

.note-editor-add:hover:after {
  transform: scale(1);
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