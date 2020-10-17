
Vue.component('product',{
    props:{
        additionalDetails:{
            type: String,
            required: true
        },
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:`
    <div class="product">
            <div class="product-image">
        <img v-bind:src="image" v-bind:alt="altText"/>
        <a v-bind:href="url">Cisco's Link</a>
        <div class="product-info">
            <h1> {{title}} </h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory>0">Almost Out of Stock</p>

            <p>Shipping:{{ shipping }}</p>
            
            <p v-if="!inStock" class="outOfStockText">Out of Stock</p>
            <p v-if="onSale">This Item is on sale</p>
            <p v-if="onSale">{{saleAnnouncement}}</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant, index) in variants" 
            :key="variant.variantId"
            class="color-box"
        :style="{backgroundColor:variant.variantColor}"
        @mouseover="updateProduct(index)">
            </div>
            <ul>
                <h2>Available Sizes</h2>
                <li v-for="size in availableSizes">{{size}}</li>
            </ul>
            <div><button v-on:click="addToCart" :disabled="!inStock"
                :class="{disabledButton: !inStock}">Add to Cart</button>
            <button v-on:click="removeFromCart">Remove From Cart</button><div class="cart">
        <p>Cart({{cart}})</p>
    </div>
</div>
     </div>       
    </div>
    </div>
    `,
    data() {
        return {
        product:'Socks',
        altText:"A pair of socks",
        selectedVariant: 0,
        url:'https://www.cisco.com',
        inventory: 9,
        onSale: true,
        brand: 'Vue Mastry',
        details:["80% cotton", "20% Polyester","Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor:"green",
                variantImage:"vmSocks-green-onWhite.jpg",
                variantQuantity:10
            },{
                variantId:2235,
                variantColor:"blue",
                variantImage:"vmSocks-blue-onWhite.jpg",
                variantQuantity:0
            }
        ],
        availableSizes:[
            "Small", "Medium", "Large","Extra Large"
        ],
        cart:0
        }
    },
    methods:{
        addToCart  () {
            this.cart +=1
        },
        updateProduct (index){
            this.selectedVariant=index
            console.log(index)
        },
        removeFromCart(){
            this.cart -=1
        }
    },
    computed : {
        title(){
            return this.brand + ' '+this.product;
        },
        image(){
        return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        saleAnnouncement(brand, product) {
        return "Shahin's big bonanza sale: "+this.brand 
        + " " + this.product 
        },
        shipping(){
            if (this.premium) {
                return "Free"
            }
                return "$2.99"
        }
    }
})
var app=new Vue({
    el:'#app',
    data: {
      premium: false,
      additionalDetails: "Wash in cold water."
    }
})