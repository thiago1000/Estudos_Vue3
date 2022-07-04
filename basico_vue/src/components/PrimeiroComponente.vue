<template>
    <div>
        <Reutilizacao />
        <h1>Olá vue!</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
        <Reutilizacao />
        <MultiplosEventos />
        <Reutilizacao />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'
    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
            Reutilizacao
        },
        data(){
            return{
                nome: "Thiago",
                profissao: "Programador Front-end"
            }
        }
    }
</script>