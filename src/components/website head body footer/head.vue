<!--eslint-disable-->
<template>
    <div class="head">
        <div class="container">
            <div class="logo">
                <img src="../../assets//market_icon.png" alt="">
                <span><span>ZEST</span> <span>ZONE</span></span>
            </div>
            <i class="fa-solid fa-bars"></i>
            <div class="head-nav">
                <div class="link">
                    <ul class="all-li">

                        <li>
                            <router-link to="/">
                                <lord-icon src="https://cdn.lordicon.com/cnpvyndp.json" trigger="hover"
                                    colors="primary:#000000" style="width:50px;">
                                </lord-icon>
                                <span>Home</span>
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/favorites">
                                <lord-icon src="https://cdn.lordicon.com/xyboiuok.json" trigger="hover"
                                    colors="primary:#000000" style="width:50px;">
                                </lord-icon>

                                <span>Favorites</span>
                            </router-link>
                        </li>

                        <li>
                            <router-link to="/about">
                                <lord-icon src="https://cdn.lordicon.com/lyrrgrsl.json" trigger="hover"
                                    colors="primary:#000000" style="width:50px;">
                                </lord-icon>
                                <span>About</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="sign-log">
                    <div v-if="!$store.state.succes_login" class="log"><router-link to="login">Login</router-link></div>
                    <div v-if="!$store.state.succes_login" class="sign"><router-link to="signup">Sign-Up</router-link></div>

                    <div v-if="$store.state.succes_login" class="user_account">

                        <span class="orders">{{ prodCart.length }}</span>

                        <lord-icon @click="showCart = !showCart" class="basket" src="https://cdn.lordicon.com/evyuuwna.json"
                            trigger="hover" colors="primary:#000000" style="width:45px;height:45px">

                        </lord-icon>

                        <div class="user">
                            <router-link to="/account">
                                <lord-icon class="account" src="https://cdn.lordicon.com/hrjifpbq.json" trigger="hover"
                                    colors="primary:#000000" style="width:45px;height:45px">
                                </lord-icon>
                            </router-link>
                            <i @click="logOut" class="fa-solid fa-right-from-bracket"></i>
                        </div>

                        <div v-if="showCart" class="cart col">

                            <lord-icon v-if="prodCart.length === 0" src="https://cdn.lordicon.com/pbrgppbb.json"
                                trigger="loop" delay="2000" colors="primary:#ffffff" style="width:50px;height:50px">
                            </lord-icon>

                            <div v-for="prod in prodCart" class="product_cart row">
                                <img class="prod_cart col" :src="prod.image" alt="">
                                <span class="col">{{ prod.title }}</span>
                                <span class="col">{{ prod.price }} $</span>
                                <lord-icon @click="removeProdCart(prod)" class="col"
                                    src="https://cdn.lordicon.com/wpyrrmcq.json" trigger="hover" colors="primary:#ffffff">
                                </lord-icon>
                            </div>

                            <button v-if="prodCart.length > 0" class="butt_check row">CheckOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/*eslint-disable*/
export default {
    name: 'head',
    data() {
        return {
            showCart: false,
            prodCart: this.$store.state.cartArray,
        }
    },
    created() {

    },
    methods: {
        removeProdCart(theProd) {
            this.prodCart.splice(this.prodCart.indexOf(theProd), 1)
        },
        logOut() {
            this.$store.state.succes_login = false;
            this.$router.push({ name: `home` })
        }
    }
}
</script>