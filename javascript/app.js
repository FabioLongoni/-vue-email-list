
const app = new Vue({
  el: '#app',
  data: {
    randomEmails: [],
  },
  mounted() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((res) => {
        this.randomEmails.push(res.data.response);
        console.log(res.data.response);
    })   
  },
})

