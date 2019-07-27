<template>
  <div>
    <Toolbar/>
    {{ notes }}
    <section class="cards">
      <div class="cards-container">
        <div class="column">
          <div class="card" v-for="(note,index) in leftColumnNotes" v-bind:key="index" :note="note" @click="showNote">

            {{ note }}

              <!-- <h1 v-if="note.note_elements[0].tag== 'h1'">{{ note.note_elements[0].content }}</h1>
              <h2 v-if="note.note_elements[0].tag== 'h2'">{{ note.note_elements[0].content }}</h2>
              <h3 v-if="note.note_elements[0].tag== 'h3'">{{ note.note_elements[0].content }}</h3>
              <h4 v-if="note.note_elements[0].tag== 'h4'">{{ note.note_elements[0].content }}</h4>
              <a
                v-if="note.note_elements[0].tag== 'a'"
                href="note.note_elements[0].content"
              >Link spre nu stiu unde</a>
              <img v-if="note.note_elements[0].tag== 'img'" :src="note.note_elements[0].content" /> -->
              <!-- <button @click= "showNote">Heyyy</button> -->
          </div>
        </div>

        <div class="column">
          <div class="card" v-for="(note,index) in rightColumnNotes" v-bind:key="index" :note="note" @click="showNote">
              
            <ShowComponent :block="note.note" />

              {{ note }}
              
              <!-- <h1 v-if="note.note_elements[0].tag == 'h1'">{{ note.note_elements[0].content }}</h1>
              <h2 v-if="note.note_elements[0].tag == 'h2'">{{ note.note_elements[0].content }}</h2>
              <h3 v-if="note.note_elements[0].tag == 'h3'">{{ note.note_elements[0].content }}</h3>
              <h4 v-if="note.note_elements[0].tag == 'h4'">{{ note.note_elements[0].content }}</h4>
              <a
                v-if="note.note_elements[0].tag== 'a'"
                href="note.note_elements[0].content"
              >Link spre nu stiu unde</a>
              <img v-if="note.note_elements[0].tag== 'img'" :src="note.note_elements[0].content" /> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import ShowComponent from './ShowComponent.vue'
import axios from 'axios'

export default {
    name:'Dashboard',
    components: {
        Toolbar,
        ShowComponent
    },
    created: function() {
      let config = {
                headers: {
                Authorization: "Token " + localStorage.getItem('NOTES_AUTH'),
          }
      }

      axios.get('/notes/', {}, config.headers.Authorization)
           .then(response => {
                this.notes = response.data;


                for (let index = 0; index < this.notes.length; index++) {
                  if (index % 2 == 0) {
                    this.leftColumnNotes.push(this.notes[index]);
                  } else {
                    this.rightColumnNotes.push(this.notes[index]);
                  }
                }             
             });
    },
    data: function() {
        return {
            leftColumnNotes:[],
            rightColumnNotes:[],
            notes: [],
        }
    }
}
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
