const sales={duck:10,house:20,dog:0};
var app = new Vue({
    el: '#app',
    data: {
        page: {
            title: "title",
            titleText: `Welcome to booleaner' shop`
        },
        products:{
            duck:{
                name: 'duck',
                image: {
                    description:"kwaak",
                    url:"http://clipart-library.com/data_images/6103.png",
                    class: "productImage"
                },
                stock: 10,
                colors: ["red", "green", "blue", "yellow"],
                // sale:sales.(this.name),
                sale:10,
                link: "https://www.google.com/search?q=rubberduck&sxsrf=AOaemvKwQyFlCBbnhvbPYP-HEgj11R4ufg:1631805936775&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvmNDp5oPzAhXCyaQKHdD5BX0Q_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1"
            }
        }
    }
    // methods: {
    //     reverseMessage: function () {
    //         this.message = this.message.split('').reverse().join('')
    //     }
    // }
});