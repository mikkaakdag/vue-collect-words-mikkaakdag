const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            Word: null,
            Words: [],
            Message: null
        }
    },
    methods: {
        myMethod(){

        },
        save(Word) {
            this.Words.push(Word)
        },
        clear() {
            this.Words = []
            this.Message = null
        },
        show() {
            if (this.Words == null || this.Words.length == 0) {
                this.Message = "empty"
            }
            else {
                this.Message = this.Words.toString()
            }
        }
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
