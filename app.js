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
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2;
        }
    },
    watch: {
    }
};

Vue.createApp(App).mount('#app')