<template>
    <header class="header">
        <div class="header-container">
            <div class="header-left">
                <a :href="`/users/${this.user.id}`" class="headerleft">
                    {{ user.fullName }}
                </a>
            </div>
            <div class="header-middle">
                <a href="/" class="logo">
                    <img src="../assets/images/logo.svg" alt="Logo">
                </a>

             </div>
            <div class="header-right">
                <nav>
                    <ul>
                        <li>
                            <a :href="`/users/${this.user.id}`">
                                SETTINGS
                            </a>
                        </li>
                        <li>
                            <a href="/help">
                                HELP
                            </a>
                        </li>
                        <li>
                            <a href="" @click="redirectToSignOut()">
                                SIGN OUT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name:'HeaderLoggedIn',
    props: ['user'],
    methods: {
        redirectToSettings: function(){
            this.$router.push('/users/' + this.user.id);

        },
        redirectToSignOut: function(){
            localStorage.removeItem("NOTES_AUTH");
            localStorage.removeItem("FULL_NAME");
            localStorage.removeItem("USER_NAME");
            localStorage.removeItem("USER_ID");
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

.header {
    padding: 30px 0;
    font-family: 'Roboto', sans-serif;
}

.header-container {
    max-width: 960px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 30px;
}

.header a {
    color: #393939;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.4s ease;
}

.header-left,
.header-right {
    width: 40%;
}

.header-middle {
    width: 20%;
}

.header-middle {
    text-align: center;
}

.header-right ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
}

.header-right a {
    margin-left: 40px;
}

.header-right ul li:first-child a {
    margin-left: 0;
}

.header a:hover {
    color:#278DF6;
}


@media screen and (max-width: 900px) {
    .header {
        text-align: center;
    }

    .header-container {
        flex-direction: column;
    }

    .header-left,
    .header-right,
    .header-middle {
        width: 100%;
    }

    .header-middle{
        order:-1;
    }

    .header-right ul {
        justify-content: center;
    }

    .header-left,
    .header-middle {
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 370px) {
    .header nav ul {
        flex-direction: column;
    }

    .header-right a {
        margin-left: 0;
    }

    .header-right nav ul li {
        margin-bottom: 10px;
    }

    .header-right nav ul li:last-child {
        margin-bottom: 0;
    }
}

</style>


