<template>
	<div class="home container mt-10">
		<div class="row">
			<div v-for="produto in produtos" :key="produto.id" class="col">
				<div class="card shadow-sm">
					<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
					<div class="card-body">
						<p class="card-text">{{ produto.titulo }}</p>
						<div class="d-flex justify-content-between align-items-center">
							<div class="btn-group">
								<button @click="addCarrinho(produto)" type="button" class="btn btn-sm btn-outline-secondary">Adicionar</button>
								<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
							</div>
							<small v-if="!!mostrarQtd(produto.id)" class="text-muted">{{ mostrarQtd(produto.id) }}</small>
						</div>
					</div>
				</div>
			</div>
		</div>
		<pre>
			{{ $store.state.carrinho }}
		</pre>
		<br><br><br><hr>
		{{ $store.state.usuario.nome }}<br>
		<label for="">Primeiro nome</label>
		<input type="text" v-model="primeiroNome" class="form-control">
		<button @click.prevent.stop="saveName" class="btn btn-primary mt-1">Salvar</button>
	</div>
</template>

<script>

export default {
	name: 'HomeView',
	components: {
		
	},
	data() {
		return {
			produtos: [
				{ id: 1,  titulo: 'Produto 1'},
				{ id: 2,  titulo: 'Produto 2'},
				{ id: 3,  titulo: 'Produto 3'},
			],
		}
	},
	computed: {
		primeiroNome: {
			get() {
				return this.$store.state.usuario.nome
			},

			set(value) {
				this.$store.commit('salvarNome', value);
			}

		}
	},
	methods: {
		saveName() {
			// Action
			// this.$store.dispatch('salvarNome', this.myName);

			// Mutation
			this.$store.commit('salvarNome', this.myName);
		},

		addCarrinho(produto) {
			this.$store.commit('addProduto', produto)
		},

		mostrarQtd(id) {
			return this.$store.state.carrinho.find(o => o.id === id)?.qtd || 0
		}
	},
}
</script>
