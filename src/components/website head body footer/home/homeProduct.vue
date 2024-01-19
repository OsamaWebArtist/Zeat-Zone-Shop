<!--eslint-disable-->
<template>
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

                    <i @click="pushInFavorite(prod)"
                        :class="this.$store.state.noRepProd.includes(prod) ? `favorite fa-solid fa-heart` : `favorite fa-regular fa-heart`">
                    </i>

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
                                <span>{{ prod.rating.rate }}</span>
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
</template>

<script>
/*eslint-disable*/
export default {

    name: "HomeProduct",
    data() {
        return {
            Products: [],
            price: 1000,
            category: '',
            selectedCategory: '',
            searchProd: '',
            favArray: this.$store.state.arrayFavorite,
        }
    },
    computed: {
        theProducts() {
            return this.Products
                .filter(ele => ele.price <= this.price)
                .filter(ele => ele.category.toLowerCase().includes(this.selectedCategory))
                .filter(ele => ele.title.toLowerCase().includes(this.searchProd.toLowerCase()))
        },

    },

    created() {
        this.getProduct();
        this.getcategories();
    },

    methods: {
        getProduct() {
            fetch('https://fakestoreapi.com/products')
                .then(response => response.json())
                .then(data => this.Products = data)
        },

        getcategories() {
            fetch("https://fakestoreapi.com/products/categories")
                .then(response => response.json())
                .then(data => this.category = data)
        },

        pushInFavorite(product) {
            this.favArray.push(product)
            this.$store.state.noRepProd = [...new Set(this.favArray)]
            console.log(this.$store.state.noRepProd)
        }
    }
}
</script>