import { page } from '$app/stores';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';

const mensagens = ['Carregando', 'Preparando', 'Calculando'];
let intervaloId;
let debounceId;

function iniciaMsgLoading(setMsg) {
	let msgIndex = 0;
	setMsg(mensagens[msgIndex]);

	intervaloId = setInterval(() => {
		msgIndex = (msgIndex + 1) % mensagens.length;
		setMsg(mensagens[msgIndex]);
	}, 1000);
}

function paraMsgLoading(setMsg) {
	clearInterval(intervaloId);
	setMsg('Carregando...');
}

export function LocigaInput(setLoading, setMsgLoading, setNome) {
	return function handleInput(event) {
		clearTimeout(debounceId);
		const nome = event.detail.normalize('NFD');

		setNome(nome);

		if (nome === '') {
			goto('/', {
				replaceState: true,
				keepfocus: true,
				noscroll: true
			});
			return;
		}

		debounceId = setTimeout(async () => {
			const nomeAtual = get(page).params.name;
			if (nome && nome !== nomeAtual) {
				setLoading(true);
				iniciaMsgLoading(setMsgLoading);

				const duracaoMin = new Promise((resolve) => setTimeout(resolve, 3000));
				const navegar = await goto(`/${encodeURIComponent(nome)}`, {
					replaceState: true,
					keepfocus: true,
					noscroll: true
				});
				await Promise.all([navegar, duracaoMin]);

				paraMsgLoading(setMsgLoading);
				setLoading(false);
			}

			setNome(nome);
		}, 800);
	};
}
