<template>
  <div class="result">
    <div id="result" v-if="gotData">
      <div id="title"><span id="team">{{ name }}</span>の結果</div>
      <p v-if="!isNaN(analysis.muscle)">筋肉量・・・・{{ fiveStars(analysis.muscle) }}</p>
      <p v-if="!isNaN(analysis.speed)">速度・・・・{{ fiveStars(analysis.speed) }}</p>
      <p v-if="!isNaN(analysis.affinity)">相性・・・・{{ fiveStars(analysis.affinity) }}</p>
      <p v-if="!isNaN(analysis.exploratory)">探査能力・・・・{{ fiveStars(analysis.exploratory) }}</p>
      <p>ライフ・・・・{{ "❤️".repeat(life) }}</p>
    </div>
    <div class="loading" v-else>
      <p>Now Loading…</p>
    </div>
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
                  result.id = this.id;
                  store.setResult(result);
                  this.res = response;
                })
      },
      setVals(){
        this.name = store.state.result.name;
        this.score = store.state.result.score;
        this.life = store.state.result.life;
        this.analysis = store.state.result.analysis;
        this.gotData = true;
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
      if(this.id !== store.state.result.id) this.getVals();
      this.setVals();
    }
  };
</script>

<style lang="scss" scoped>
  $bg-yellow: #FFC700;
  .result {
    background-color: $bg-yellow;
    border: 2px solid black;
    font-weight: bold;
    text-align: left;
    padding-left: 1em;

    #title {
      margin: 1em 0;

      #team {
        border: 2px solid black;
        background-color: white;
        padding: 0.5em;
        margin-right: 5px;
      }
    }
  }
</style>