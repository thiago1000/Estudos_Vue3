<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <Info :email="email" :esta_trabalhando="true"/>
        <Form />
    </div>
</template>

<script>
import Form from './Form.vue'
import Info from './Info.vue'
    export default {
        components: { Info, Form },
        name: 'Pessoa',
        data() {
            return {
                nome: 'Thiago',
                email: 'thiago@gmail.com'
            }
        },
    }
</script>