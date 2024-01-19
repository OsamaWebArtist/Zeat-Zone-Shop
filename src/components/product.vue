<!--eslint-disable-->

<template>
    <myhead />
    <div>
        <div class="product-section">
            <div class="container row">
                <div class="img-prod col">
                    <span>{{ getProdInfo[0].price }} $</span>
                    <img :src="getProdInfo[0].image" alt="">
                </div>
                <div class="prod-info col">
                    <h3>{{ getProdInfo[0].title }}</h3>

                    <div class="rat">
                        <span>{{ getProdInfo[0].category }}</span>
                        <span><i class="fa-solid fa-star"></i> {{ getProdInfo[0].rating.rate }}</span>
                    </div>

                    <p>{{ getProdInfo[0].description }}</p>

                    <div class="prod-quantity">
                        <span class="minus" @click="minus"><i class="fa-solid fa-minus"></i></span>
                        <input type="number" class="quantity" v-model="quantity">
                        <span class="plus" @click="plus"><i class="fa-solid fa-plus"></i></span>
                    </div>

                    <button @click="pushToCart" class="add-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable*/
import head from './website head body footer/head.vue';
export default {

    name: "product",
    data() {
        return {
            quantity: 1,
            titleProd: this.$route.params.productTitle,
            Products: '',
            toCart: '',
        }
    },
    created() {
        this.getProduct()
    },
    methods: {
        plus() {
            this.quantity++;
        },
        minus() {
            if (this.quantity > 1) {
                this.quantity--;
            }

        },

        getProduct() {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => this.Products = data)
        },

        pushToCart() {

            if (this.$store.state.succes_login) {

                if (this.$store.state.cartArray.length >= 1) {
                    if (!this.$store.state.cartArray.includes(this.toCart)) {
                        this.$store.state.cartArray.push(this.toCart);
                    }
                } else {
                    this.$store.state.cartArray.push(this.toCart);
                }


            } else {
                this.$router.push({ name: `login` })
            }
        }
    },

    computed: {
        getProdInfo() {
            let getProd = [];
            for (let i = 0; i < this.Products.length; i++) {
                if (this.Products[i].title === this.titleProd) {
                    getProd.push(this.Products[i])
                    this.toCart = this.Products[i]
                    break;
                }
            }
            return getProd;
        }
    },
    components: {
        'myhead': head,

    }
}
</script>