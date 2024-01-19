<!--eslint-disable-->
<template>
    <div class="home-body">
        <myhead />
        <div class="container">

            <div class="open">
                <iframe class="welc-small-sc"
                    src="https://lottie.host/embed/68c05a82-bd89-4f7b-a1a4-9816d4b85ea2/0nSuTxusyT.json"></iframe>
                <div class="open-board">
                    WELCOME
                    <iframe src="https://lottie.host/embed/4ae47cee-0f05-4c44-bc20-9b6f62eac4cb/CWtOQPyBym.json"></iframe>
                </div>
                <div>
                </div>
                <iframe class="anime-one"
                    src="https://lottie.host/embed/1b255541-2157-4f01-9720-637fe1c21aa7/REQfd6dRNW.json"></iframe>

                <iframe class="anime-two"
                    src="https://lottie.host/embed/c3ee96fa-92a5-4b47-a34d-95dbb92d2244/8koNvYLBP0.json"></iframe>

            </div>
            <homeProduct />
        </div>

    </div>
</template>

<script>
/*eslint-disable*/
import head from '../head.vue';
import HomeProduct from "../home/homeProduct.vue"

export default {

    name: "homeBody",
    data() {
        return {
        }
    },
    computed: {

    },
    created() {

    },

    methods: {

    },
    components: {
        "homeProduct": HomeProduct,
        'myhead': head,
    }
}
</script>