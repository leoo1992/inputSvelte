export async function load({ params, fetch }) {
	const name = params.name?.trim().replace(/\s+/g, ' ');
	const cleanName = name
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase();
	const baseUrl = import.meta.env.VITE_API_URL;
	const url = `${baseUrl}/?name=${encodeURIComponent(cleanName)}`;

	if (!name) {
		return { data: name, error: 'Nome inválido' };
	}

	if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
		return { data: name, error: 'Use apenas letras e espaços.' };
	}

	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`API retornou status ${res.status}`);
		}

		const apiData = (await res.json()) || {};

		if (!apiData.name || apiData.age === null || apiData.age === undefined) {
			return { data: null, error: 'Resposta da API incompleta' };
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
		return { data: null, error: 'Erro de conexão com a API' };
	}
}
