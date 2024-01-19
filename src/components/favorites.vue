<!--eslint-disable-->
<template>
    <div>
        <myhead />
        <div class="container">
            <div class="Prod-section">

                <div class="all-filters row">

                    <div class="search row">
                        <div class="search-tool">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search Your Product" v-model="searchProd">
                        </div>
                    </div>


                    <div class="filter row">
                        <div class="select-op col">

                            <select class="categories" name="" id="" v-model="selectedCategory">

                                <option value="" selected>All Categories</option>
                                <option v-for="categ in category" :value="categ">
                                    {{ categ }}
                                </option>

                            </select>

                        </div>

                        <div class="range col">
                            <span>0$</span>
                            <input class="range-price" type="range" step="5" min="0" max="1000" v-model="price">
                            <span>{{ price }}$</span>

                        </div>
                    </div>

                </div>


                <div class="home-product">

                    <div class="all-products row">

                        <div v-for="prod in theProducts" class="product  col-1">

                            <i class="favorite fa-solid fa-heart"></i>

                            <router-link class="prod" :to="{ name: `product`, params: { productTitle: prod.title, } }">
                                <div class="img-prod">
                                    <img :src="prod.image" alt="">
                                </div>

                                <div class="prod-info">
                                    <div class="prod-price">
                                        <h4>{{ prod.title }}</h4>
                                        <span>{{ prod.price }} $</span>
                                    </div>

                                    <div class="rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>

                                    <div class="cart-add">
                                        <button>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <span>Add To Cart</span>
                                        </button>
                                    </div>
                                </div>

                            </router-link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
<script>
/*eslint-disable*/
import head from './website head body footer/head.vue';
export default {

    name: "favorites",
    data() {
        return {
            price: '1000',
            category: '',
            selectedCategory: '',
            searchProd: '',
            Products: [],
        }
    }, created() {
        this.getcategories();
    }, computed: {

        theProducts() {
            return this.$store.state.noRepProd
                .filter(ele => ele.price <= this.price)
                .filter(ele => ele.category.toLowerCase().includes(this.selectedCategory))
                .filter(ele => ele.title.toLowerCase().includes(this.searchProd.toLowerCase()))

        },

    }, methods: {
        getcategories() {
            fetch("https://fakestoreapi.com/products/categories")
                .then(response => response.json())
                .then(data => this.category = data)
        },
    },
    components: {
        'myhead': head,
    }
}
</script>