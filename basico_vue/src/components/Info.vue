<template>
    <div>
        <p>{{ email }}</p>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Não estou trabalhando</p>
        <p>Utilizo as seguintes tecnologias para Back-end:</p>
        <ul>
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">{{ technology }}</li>
        </ul> 
        <p>Utilizo as seguintes tecnologias para Front-end:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id">{{ technology.language }}</li>
        </ul> 
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a> </p>
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'
    export default {
        components: { 
            Picture 
        },
        props: {
            email: String,
            esta_trabalhando: Boolean,
        },
        name: 'Info',
        data() {
            return {
                mostrar_email: false,
                meu_link: "https://google.com",
                textoBotao: "Mostrar email",
                backend_technologies: ['Javascript', 'PHP', 'Python'],
                frontend_technologies: [
                    {id: 1, language: 'HTML'},
                    {id: 2, language: 'CSS'},
                    {id: 3, language: 'Vue'}
                ]
            }
        },
        methods: {
            showEmail(){
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email){
                    this.textoBotao = "Mpstrar email"
                } else{
                    this.textoBotao = "Esconder email"
                }
            }
        },
    }
</script>