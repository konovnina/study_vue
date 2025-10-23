Vue.createApp({
    data: () => ({
        myHTML: '<h1>Vue 3 app</h1>',
        title: 'Hello',
        person: {
            firstName: 'John',
            lastName: 'Doe',
            age: 35,
            email: 'john@doe.com',
            password: '123456',
            phoneNumber: '1234567890',
            birthday: '12 Jan 1990',
        },
        items: [1, 2, 3, 4, 5],
    }),
    methods: {
      addItem() {
          this.items.unshift(this.$refs.myInput.value)
      },
        remove(index){
            this.items.splice(index, 1)
        },
        log(item) {
          console.log('Log: ', item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0);
        }
    },
}).mount('#app')