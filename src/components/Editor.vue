
<template>
  <div class="editor-box">
    <div class="editor-text">
      <textarea placeholder="Write your text" v-model="cont"></textarea>
    </div>
    <div class="editor-buttons">
      <button class="h1-button" @click="save('h1', cont)">H1</button>
      <button class="h2-button" @click="save('h2', cont)">H2</button>
      <button class="h3-button" @click="save('h3', cont)">H3</button>
      <button class="p-button" @click="save('p', cont)">P</button>
      <button class="ul-button" @click="save('ul', cont)">UL</button>
      <button class="link-button" @click="save('link', cont)">LINK</button>
      <button class="image-button" @click="save('image', cont)">IMAGE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {
    blocks: Array,
    index: Number,
    id: Number
  },

  data: function() {
    return {
      cont: "",
      indexMod: 0,
      blocksMod: []
    };
  },
  methods: {
    save: function(tag, content) {
      this.indexMod = this.index;
      this.blocksMod = this.blocks;
      let newBlock = {
        tag: tag,
        content: content
      };
      this.blocksMod.splice(this.indexMod, 0, newBlock);
      this.indexMod++;
      this.$emit("blockAdded", this.blocksMod);
      this.$emit("indexAdded", this.indexMod);
    }
  }
};
</script>

<style scoped>
.editor {
  position: fixed;
  background-color: #f2f2f2;
  height: 100%;
  width: 100%;
  bottom: 0;
}

.editor-box {
  position: fixed;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  bottom: 30px;
  transform: translateX(-50%);
  left: 50%;
  max-width: 90%;
  box-sizing: border-box;
  width: 770px;
  margin: 2px 0;
}

.editor-text textarea {
  border: none;
  resize: none;
  width: 100%;
  height: 150px;
  font-size: 25px;
  font-family: Roboto;
}

.editor-text textarea:focus {
  outline: none;
}

.editor-buttons {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2px;
}

.editor-buttons button {
  cursor: pointer;
  background-color: rgba(156, 22, 233, 0.74);
  color: #ffffff;
  text-align: center;
  border: none;
  border-radius: 4px;
  line-height: 38px;
  font-weight: bold;
  cursor: pointer;
  margin: 2px;
  font-family: Roboto;
  flex: 1 0 auto;
  padding: 0 30px;
  transition: 0.3s;
}

.editor-buttons .h1-button:hover {
  background-color: rgb(116, 0, 151);
}

.editor-buttons .h2-button:hover {
  background-color: rgba(0, 17, 255, 0.842);
}

.editor-buttons .h3-button:hover {
  background-color: rgba(9, 159, 228, 0.959);
}

.editor-buttons .p-button:hover {
  background-color: rgba(3, 192, 12, 0.781);
}

.editor-buttons .ul-button:hover {
  background-color: rgb(255, 217, 0);
}

.editor-buttons .link-button:hover {
  background-color: rgba(255, 102, 0, 0.945);
}

.editor-buttons .image-button:hover {
  background-color: rgba(255, 0, 0, 0.863);
}
</style>
