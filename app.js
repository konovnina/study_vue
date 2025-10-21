const App = {
    data() {
        return {
            placeholderString: 'Введите заметку',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        inputChangeHandler(e) {
            this.inputValue = e.target.value
        },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
          return item.toUpperCase();
        },
        removeNote(index){
            this.notes.splice(index, 1)
        }
    }
};

Vue.createApp(App).mount('#app')