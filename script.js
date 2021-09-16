var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        image: {
            description:"cippalippa",
            url="http://clipart-library.com/data_images/6103.png"
        }
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})