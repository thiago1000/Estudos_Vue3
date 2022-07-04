<template>
    <div>
        <Header :esta_logado="true"/>
        <PrimeiroComponente />
        <LifeCicle />
        <Pessoa />

    </div>
</template>

<script>
import Header from './components/Header.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCicle from './components/LifeCicle.vue'
import Pessoa from './components/Pessoa.vue'

    export default {
        name: 'App',
        components: {
            Header,
            PrimeiroComponente,
            LifeCicle,
            Pessoa
        }
    }
</script>

<style>
    body{
        background-color: #333;
        color: #fff;
    }
    
    a{
        color: red;
    }
</style>

