import { createStore } from 'vuex'

export default createStore({
	strict: true,
	// Seria o data
	state: { 
		usuario: {
			nome: "Thiago",
			sobrenome: "Viana"
		},
		carrinho: [],
	},
	mutations: {
		// Carrinho
		addProduto(state, payload) {
			const existeProduto = state.carrinho.find(o => o.id === payload.id);
			if(existeProduto) {
				existeProduto.qtd += 1
			} else{
				payload.qtd = 1
				state.carrinho.push(payload);
				console.log(payload)
			}

			
		},

		// user
		salvarNome(state, payload) {
			state.usuario.nome = payload
			// console.log(state, payload);
		}
	},
	actions: {
		// salvarNome(context, payload) {
		// 	context.commit('salvarNome', payload);
		// 	console.log(payload);
		// }
	},
	modules: {
	}
})
