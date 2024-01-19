<!--eslint-disable-->
<template>
    <div>
        <myhead />

        <div class="container">

            <div class="my-account row col-md">

                <div class="logo">
                    <img src="../assets/market_icon.png" alt="">
                    <span><span>ZEST</span> <span>ACCOUNT</span></span>
                </div>
                <div class="first col-lg">
                    <div class="account-name row">
                        <label class="col" for="">Username</label>
                        <input class="col" type="text" value="johnd" disabled>
                    </div>

                    <div class="account-email row">
                        <label class="col" for="">Email</label>
                        <input class="col" type="text" value="john@gmail.com" disabled>
                    </div>

                    <div class="account-phone row">
                        <label class="col" for="">phone</label>
                        <input class="col" type="text" value="1-570-236-7033" disabled>
                    </div>

                    <div class="account-city row">
                        <label class="col" for="">City</label>
                        <input class="col" type="text" value="kilcoole" disabled>
                    </div>

                </div>

                <div class="second col-lg">
                    <div class="account-street row">
                        <label class="col" for="">Street</label>
                        <input class="col" type="text" value="7835 new road" disabled>
                    </div>

                    <div class="account-zip row">
                        <label class="col" for="">Zip-Code</label>
                        <input class="col" type="text" value="12926-3874" disabled>
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
    name: "about",
    data() {
        return {

        }
    },
    components: {
        'myhead': head,
    }
}
</script>