<template>
    <div>
        <h1 class="text-lg font-bold">Serviços</h1>
        <nuxt-link to="desenvolvimento-de-sites">Desenvolvimento de sites</nuxt-link>
        <nuxt-link to="marketing-digital">Marketing Digital</nuxt-link><br>
        <div v-if="$fetchState.pending">
            Carregando
        </div>
        <div v-else>
            <div v-for="service in services" :key="service.id" class="border-b border-gray-400 py-4">
                {{ service.username }}
            </div>
            <br>
        </div>
        <nuxt-child />    
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: 'Minha descrição do Serviços' },
                ],
                bodyAttrs: {
                    class: 'bg-gray-400'
                }  
            }
        },
        data() {
            return {
                title: '',
                services: []
            }
        },

        async fetch() {
            const url = 'https://jsonplaceholder.typicode.com/users?_limit=5';
            this.services = await this.$axios.$get(url)
            console.log(this);
        },

        created() {
            this.getTitle();
        },

        methods: {
            getTitle() {
                setTimeout(() => {
                    this.title = 'Serviços'
                }, 3000)
            }
        }
    }
</script>