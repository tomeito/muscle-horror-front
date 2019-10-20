export default{
  debug: process.env.NODE_ENV !== 'production',
  state : {
    userId: Number
  },
  setUserId (id) {
    if(this.debug) console.log('setUserId triggered .'); // eslint-disable-line no-console
    this.state.userId = id;
  }

}