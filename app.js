/* const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app') */

const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      age: "20",
      from : "Michigan",
      email: "john@gmail.com",
      number: "(694)-871-7658",
      gender: "male",
      picture: "http://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      console.log(results);
      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        this.age = results[0].dob.age,
        this.from = results[0].location.state,
        (this.email = results[0].email),
        (this.number = results[0].phone),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large);
    },
  },
});

app.mount("#app");
