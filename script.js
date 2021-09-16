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
                    url:"https://static.wixstatic.com/media/a8e87a_adbb1c16da974aed87bbd51c3b2bb11e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/a8e87a_adbb1c16da974aed87bbd51c3b2bb11e~mv2.webp",
                    class: "productImage"
                },
                stock: 10,
                colors: [
                    {
                        name:"red",
                        url:"https://static.wixstatic.com/media/a8e87a_fc89c503dca047129c3fa499fb54312e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/a8e87a_fc89c503dca047129c3fa499fb54312e~mv2.webp",
                    },
                    {
                        name :"green",
                        url:"https://static.wixstatic.com/media/a8e87a_d0c5fa5f9908462d8972c317b4cbf980~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/a8e87a_d0c5fa5f9908462d8972c317b4cbf980~mv2.webp",
                    },
                    {
                        name: "blue",
                        url:"https://static.wixstatic.com/media/a8e87a_92b59c7b58024df6b1796c7f0f403332~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/a8e87a_92b59c7b58024df6b1796c7f0f403332~mv2.webp",
                    },
                    {
                        name:"yellow",
                        url:"https://static.wixstatic.com/media/a8e87a_adbb1c16da974aed87bbd51c3b2bb11e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/a8e87a_adbb1c16da974aed87bbd51c3b2bb11e~mv2.webp"
                    }
                ],
                // sale:sales.(this.name),
                sale:10,
                link: "https://www.google.com/search?q=rubberduck&sxsrf=AOaemvKwQyFlCBbnhvbPYP-HEgj11R4ufg:1631805936775&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjvmNDp5oPzAhXCyaQKHdD5BX0Q_AUoAXoECAEQAw&biw=1920&bih=937&dpr=1"
            }
        }
    },
    methods: {
        duckColorHover(url){
            // console.log(this.products.duck.image.url);
            this.products.duck.image.url=url;
        }
    }
});