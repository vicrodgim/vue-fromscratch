const app = Vue.createApp ({
    data(){
        return{
            count: 4,
        };
    },
    methods:{
        multiplyByTwo(){
            if (this.count <= 5){
            this.count *= 2;
        };
    },
        multiplyByThree(){
            if (this.count > 5){
                this.count *= 3;
            };
        },

        reset(){
            this.count = 1;
        }
    }
});



app.mount("#app");