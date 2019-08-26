var vm = new Vue({

    el:"#app",
    data:{
        totalMoney:0,
        productList:[]

    },
    filters:{
        format(value){

            return "$"+value.toFixed(2);
        }

    },
    mounted:function(){

        this.$nextTick(function () {
            // 代码保证 this.$el 在 document 中
           this.cartview();
            //this.cartview2();
        })

    },
    methods:{
        cartview:function(){
            var  _this =this;
            this.$http.get("cartJson.json").then(function (res){
                console.log(res);
                _this.productList=res.body.result.productList;
                _this.totalMoney=res.body.result.totalMoney;
            });
        },
         cartview2:function(){
             let  _this =this;
             this.$http.get("cartJson.json").then(res=>{
                 console.log(res);
                 this.productList=res.body.result.productList;
                 this.totalMoney=res.body.result.totalMoney;
             });
         }
    }





});