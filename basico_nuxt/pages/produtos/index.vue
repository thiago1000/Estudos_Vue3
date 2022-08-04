<template>
    <div>
        <h1 class="text-lg font-bold">Produtos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam asperiores deserunt repudiandae nulla maxime eaque soluta eos natus quia. Dolorum exercitationem quo quaerat incidunt, vel necessitatibus quae sit nesciunt officia.</p>
        <br><br>
        <div v-for="product in products" :key="product.id" class="border-b border-gray-400 py-3">
            {{ product.title }}
        </div>
    </div>
</template>

<script>
    export default {
        async asyncData({ $axios }){
            // await new Promise((resolve) => {
            //     setTimeout( () =>{
            //         resolve()
            //         console.log('promise resolvida')
            //     }, 3000)
            // })
            const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
            const products = await $axios.$get(url);
            return {
                products,
            }
        }
        
    }
</script>