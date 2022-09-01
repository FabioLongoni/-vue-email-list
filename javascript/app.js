
const app = new Vue({
  el: '#app',
  data: {
    randomEmails: [],
  },
  mounted() {
    for (i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
        this.randomEmails.push(res.data.response);
        console.log(res.data.response);
      });   
    }    
  },
})

