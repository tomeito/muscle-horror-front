<template>
  <div class="result">
    <p>name:{{ name }}</p>
    <p>score:{{ score }}</p>
    <p>life:{{ life }}</p>
    <p>muscle:{{ muscle }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  import store from '@/store'
  export default {
    name: 'result',
    data() {
      return {
        id: store.state.userId,
        name: Text,
        score: Number,
        life: Number,
        muscle: Number,
        res: null,
        gotData: false
      }
    },
    methods: {
      getVals(){
        axios.get('https://muscle-horror-api.herokuapp.com/results/' + this.id)
                .then(response => {
                  let result = response.data.result;
                  store.setResult(result);
                  this.name = store.state.result.name;
                  this.score = store.state.result.score;
                  this.life = store.state.result.life;
                  this.analysis = store.state.result.analysis;
                  this.res = response;
                  this.gotData = true;
                })
      },
      fiveStars(star) {
        if (0 <= star && star <= 5) {
          let str = "";
          str += "★".repeat(star) + "☆".repeat(5 - star);
          return str;
        }else {
          return this.fiveStars(0);
        }
      }
    },
    created() {
      axios.get('https://muscle-horror-api.herokuapp.com/results/' + this.id)
        .then(response => {
          this.name = response.data.result.name;
          this.score = response.data.result.score;
          this.life = response.data.result.life;
          this.muscle = response.data.result.muscle;
          this.res = response;
        })
    }
  };
</script>

<style scoped>

</style>