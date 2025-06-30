import { redirect } from '@sveltejs/kit';
export async function load({ params, fetch }) {
	// pausar api
	if (params.name) {
		return {
			name: params.name,
			api: {
				name: params.name,
				age: 1
			}
			/* error: 'API pausada para manutenção' */
		};
	}

	const name = params.name;

	if (!name) {
		return {
			name,
			error: 'Nome inválido'
		};
	}

	const baseUrl = import.meta.env.VITE_API_URL;
	const url = `${baseUrl}/?name=${encodeURIComponent(name)}`;

	try {
		const res = await fetch(url);

		if (!res.ok && res.status === 429) {
			return {
				name,
				error: 'Limite de busca excedido. Tente novamente amanhã.'
			};
		}

		if (!res.ok) {
			return {
				name,
				error: `API retornou status ${res.status}`
			};
		}

		const apiData = await res.json();

		if (apiData.count === 0 || apiData.age == null) {
			return {
				name,
				error: 'Nome não encontrado na base de dados.'
			};
		}

		if (!apiData.name || !apiData.age) {
			return {
				name,
				error: 'Resposta da API incompleta'
			};
		}

		return {
			name,
			api: {
				name: apiData.name,
				age: apiData.age
			}
		};
	} catch (err) {
		console.error('Erro ao buscar dados da API:', err);
		throw redirect(302, '/?error=' + encodeURIComponent('Erro de conexão com a API'));
	}
}
