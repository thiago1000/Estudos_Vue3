<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue'
import Reutilizacao from './Reutilizacao.vue'

    export default {
        name: 'Picture',
        components: {
            Reutilizacao,
            MudarImagem
        },
        data() {
            return {
                avatar: "/img/avatar.png",
                descricao: "Avatar"
            }
        },  
        methods: {
            trocarImagem(){
                this.avatar="/img/avatar2.png"
            }
        },
    }
</script>