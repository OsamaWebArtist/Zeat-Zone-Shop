<!--eslint-disable-->
<template>
    <div class="form-signup ">
        <img class="background-img" src="../assets/signup back.jpg" alt="">
        <router-link to="/"><button class="back-button"><span>&lArr;</span> Back</button></router-link>
        <router-link to="/login"><button class="go-login">Login <span>&rArr;</span></button></router-link>
        <div class="back"></div>
        <div class="sign-form row">
            <div class="sign-Section col">
                <div class="sign-up">
                    <h3>Sign Up</h3>

                    <div class="username">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder="Your Name" v-model="name">
                        <span class="error-msg" v-if="v$.name.$error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            {{ v$.name.$errors[0].$message }}</span>
                    </div>

                    <div class="email">
                        <i class="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Your Email Here" v-model="email">

                        <span class="error-msg" v-if="v$.email.$error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            {{ v$.email.$errors[0].$message }}</span>
                    </div>

                    <div class="password">

                        <i class="fa-solid fa-lock"></i>
                        <input :type="typeOfText" placeholder="Your Password Here" v-model="password">
                        <i @click="seePassword" :class="typeOfText === 'password' ? 'fa-solid fa-eye-slash'
                            : 'fa-regular fa-eye'"></i>

                        <span class="error-msg" v-if="v$.password.$error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            {{ v$.password.$errors[0].$message }}</span>

                    </div>

                    <div class="confirm-pass">
                        <i class="fa-solid fa-user-lock"></i>
                        <input :type="typeOfText2" placeholder="Confirm Your Password" v-model="confirmPassword">
                        <i @click="seeRepeatPassword" :class="typeOfText2 === 'password' ? 'fa-solid fa-eye-slash'
                            : 'fa-regular fa-eye'"></i>

                        <span class="error-msg" v-if="v$.confirmPassword.$error">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            {{ v$.confirmPassword.$errors[0].$message }}</span>

                    </div>



                    <div class="sign">
                        <button @click="signUp">Register</button>
                    </div>

                    <div class="other-way">
                        <span>Or Sign Up Using</span>

                        <div class="allways">
                            <i class="fa-brands fa-google"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                        </div>

                    </div>
                </div>
            </div>

            <div class="side-sign-section col">
                <h2>Hello, Friend!</h2>
                <p>Enter your personnel Details And start Your Shopping With us</p>
            </div>
        </div>
    </div>
</template>
<script>
/*eslint-disable*/
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, sameAs, alphaNum } from '@vuelidate/validators'

export default {

    name: "signup",

    setup() {
        return { v$: useVuelidate() }
    },

    data() {
        return {
            typeOfText: "password",
            typeOfText2: "password",
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    validations() {
        return {
            email: { required, email },
            password: { required, minLength: minLength(8), maxLength: maxLength(10) },
            confirmPassword: { required, sameAsPassword: sameAs(this.password) },
            name: { required, alphaNum, maxLength: maxLength(7), minLength: minLength(5) },
        }
    },

    methods: {
        seePassword() {
            if (this.typeOfText === "password") {
                this.typeOfText = "text"
            } else {
                this.typeOfText = "password"
            }
        },
        seeRepeatPassword() {
            if (this.typeOfText2 === "password") {
                this.typeOfText2 = "text"
            } else {
                this.typeOfText2 = "password"
            }
        },

        signUp() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("validation done")
            } else {
                console.log("validation failed")
            }
        }
    }
}
</script>