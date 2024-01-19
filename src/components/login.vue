<!--eslint-disable-->
<template>
    <div class="form-login">
        <img class="background-img" src="../assets/login-back.jpg" alt="">
        <button class="back-button">
            <router-link to="/"><span>&lArr;</span> Back</router-link>
        </button>
        <router-link to="/signup"><button class="go-signup">Sign Up <span>&rArr;</span></button></router-link>
        <div class="back"></div>
        <div class="form">
            <div class="login-form">
                <h3>Welcome Back</h3>

                <div class="email-login">
                    <i class="fa-solid fa-user"></i>
                    <input type="email" v-model="email" placeholder="Your Email Here">

                    <span v-if="!login_pro" class="error-msg">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        Invalid email address. Please check and retry.
                    </span>
                </div>

                <div class="password-login">
                    <i class="fa-solid fa-lock"></i>
                    <input :type="typeOfText" placeholder="Your Password Here" v-model="password">
                    <i @click="seePassword" :class="typeOfText === 'password' ? 'fa-solid fa-eye-slash'
                        : 'fa-regular fa-eye'"></i>

                    <span v-if="!login_pro" class="error-msg">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        Oops, incorrect password. Try again!
                    </span>

                </div>

                <div class="check">
                    <input type="checkbox">
                    <label for="">Remember Me</label>
                </div>
                <div class="login">
                    <button @click="checkLogin">Login</button>
                </div>
            </div>


        </div>

        <div class="try-login-mode">
            <h4>Try Login Mode</h4>
            <span>Email : <span>john@gmail.com</span></span>
            <span>Password : <span>m38rmF$</span></span>
        </div>
    </div>
</template>
<script>
/*eslint-disable*/
export default {

    name: "login",
    data() {
        return {
            typeOfText: "password",
            email: '',
            password: '',
            users: null,
            login_pro: true,
        }
    },
    computed: {

    },
    created() {
        this.getUsers();
    },
    methods: {
        seePassword() {
            if (this.typeOfText === "password") {
                this.typeOfText = "text"
            } else {
                this.typeOfText = "password"
            }
        },

        getUsers() {
            fetch('https://fakestoreapi.com/users')
                .then(response => response.json())
                .then(data => this.users = data)
        },
        checkLogin() {
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].email === this.email && this.users[i].password === this.password) {

                    this.login_pro = true;
                    this.$store.state.succes_login = true;
                    this.$router.push({ name: `home` })
                    break;
                } else {
                    this.login_pro = false;
                }

            }
        }
    }
}
</script>