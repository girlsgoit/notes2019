<template>
  <div>
    <Toolbar />
    <section class="cards">
      <div class="cards-container">
        <div class="column">
          <div class="card" :class="{'card-image' : isImage(note.note_elements)}" v-for="(note, index) in leftColumnNotes" @click="onCardClick(note.id)" :key="index">
              <div v-if="note.note_elements[0]">
                 <NoteElement :tag="note.note_elements[0].tag" :value="note.note_elements[0].content" />
              </div>
              <div v-else>
               Empty
              </div>

              <p class="notes-data"> {{ note.created_at }} </p>
          </div>
        </div>

        <div class="column">
          <div class="card" :class="{'card-image' : isImage(note.note_elements)}" v-for="(note, index) in rightColumnNotes" :key="index" @click="onCardClick(note.id)">
            <div v-if="note.note_elements[0]">
                <NoteElement :tag="note.note_elements[0].tag" :value="note.note_elements[0].content" />
            </div>
            <div v-else>
               Empty
            </div>

            <p class="notes-data"> {{ note.created_at }} </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import NoteElement from "./NoteElement.vue";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    Toolbar,
    NoteElement
  },
  created: function() {
    axios.get("/notes/").then(response => {
      this.notes = response.data;

      for (let index = 0; index < this.notes.length; index++) {
        if (index % 2 === 0) {
          this.leftColumnNotes.push(this.notes[index]);
        } else {
          this.rightColumnNotes.push(this.notes[index]);
        }
      }
    });
  },
  data: function() {
    return {
      leftColumnNotes: [],
      rightColumnNotes: [],
      notes: []
    };
  },
  methods: {
    isImage: function(nestedElements) {
      return nestedElements[0] && nestedElements[0].tag === 'image';
    },
    onCardClick: function(noteId) {
        console.log('noteId: ', noteId);
        this.$router.push(`/notes/${noteId}`);
    },
  }
};
</script>

<style scoped>
    .card h1, .card h2, .card h3, .card h4, .card ul, .card p, .card a {
        margin: 0;
        padding: 0;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
    }

    .cards {
        padding: 50px 0 30px 0;
    }

    .cards-container {
        max-width: 960px;
        display: flex;
        margin: 0 auto;
        padding: 0 15px;
    }

    .card ul {
        padding-left: 17px;
    }

    .card li {
        line-height: 40px;
    }

    .card a {
        line-height: 30px;
        color: #278df6;
        text-decoration: none;
        font-size: 36px;
    }

    .cards .column {
        width: 50%;
    }

    .card {
        box-shadow: 0 2px 27px rgba(230, 230, 230, 0.5);
        border-radius: 10px;
        overflow: hidden;
        color: #393939;
        font-family: Roboto sans-serif;
        text-align: left;
        padding: 30px;
        transition: box-shadow 0.25s ease;
        display: block;
        margin-bottom: 20px;
        margin-right: 10px;
        margin-left: 10px;
        cursor: pointer;
    }

    .card.card-image {
        object-fit: cover;
        padding: 0;
    }

    .card.card-image img {
        width: 100%;
    }

    .card .notes-data {
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        text-align: right;
        margin: 0;
        padding-top: 30px;
        color: #919191;
    }

    .card.card-image .notes-data {
        padding: 30px;
    }

    .card h4 {
        line-height: 30px;
        font-size: 16px;
    }

    .card h3 {
        font-size: 24px;
        line-height: 30px;
    }

    .card p {
        font-size: 16px;
        line-height: 30px;
    }

    .card h2 {
        font-size: 28px;
        line-height: 30px;
    }

    .card h1 {
        line-height: 1.1;
        font-size: 36px;
    }

    @media screen and (max-width: 600px) {
        .cards-container {
            flex-direction: column;
        }

        .cards .column {
            width: 100%;
        }
    }
</style>
