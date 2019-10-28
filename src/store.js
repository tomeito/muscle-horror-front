export default{
  debug: process.env.NODE_ENV !== 'production',
  state : {
    userId: Number,
    result: {
      id: Number,
      name: Text,
      difficulty: Text,
      score: Number,
      analysis: {
        muscle: Number,
        speed: Number,
        affinity: Number,
        exploratory: Number
      },
      life: Number
    }
  },
  setUserId (id) {
    if(this.debug) console.log('setUserId triggered .'); // eslint-disable-line no-console
    this.state.userId = id;
  },
  setResult (result) {
    this.state.result = result;
  }
}