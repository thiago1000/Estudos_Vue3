<template>
    <div>
        <button @click="primeiro(txt1, $event), segundo(txt2, $event)">Ativar Múltiplos Eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MultiplosEventos',
        data() {
            return {
                multiplos_eventos: "",
                txt1: "Primeiro evento ativado",
                txt2: "Segundo Evento"
            }
        },
        methods: {
            primeiro(txt, e){
                this.multiplos_eventos = txt;
            },
            segundo(txt, e){
                setTimeout(() => this.multiplos_eventos = txt, 500);
            }
        },
    }
</script>

<style scoped>
    div{
        margin: 100px;
    }
</style>