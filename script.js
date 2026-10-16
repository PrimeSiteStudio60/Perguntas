'use strict';
const GROUPS = {
  'Pequenos detalhes': ['Qual pequena coisa consegue melhorar o seu dia?', 'Existe algum hábito ou ritual seu que te faz bem?'],
  'Sonhos': ['Qual é um sonho que você gostaria de realizar?', 'Como você imagina a sua vida daqui a alguns anos?', 'O que você gostaria de aprender ou experimentar um dia?'],
  'Quem você é': ['Qual é uma coisa sobre você que poucas pessoas conhecem?', 'Existe um lado seu que costumam interpretar errado?', 'O que você gostaria que as pessoas entendessem sobre você?'],
  'Memórias e gostos': ['Qual lembrança costuma fazer você sorrir?', 'Existe uma música que tenha um significado especial para você?', 'Existe um lugar, real ou imaginado, que você ama ou gostaria de conhecer?'],
  'Sentir-se compreendida': ['O que faz você se sentir compreendida por alguém?', 'Que atitude faz você perceber que alguém se importa?'],
  'Curiosidades': ['Qual pergunta você gostaria que alguém fizesse a você?', 'Qual curiosidade sobre você não caberia em um currículo?', 'Existe algo que você queira contar e que não coube nas outras perguntas?']
};
const box = document.getElementById('preview');
for (const [title, qs] of Object.entries(GROUPS)) {
  const h = document.createElement('h3'); h.textContent = title;
  const ul = document.createElement('ul');
  qs.forEach((q) => { const li = document.createElement('li'); li.textContent = q; ul.append(li); });
  box.append(h, ul);
}
const a = document.getElementById('open'), msg = document.getElementById('msg');
const ok = typeof DISCOVERY_FORM_URL === 'string' && /^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/.test(DISCOVERY_FORM_URL);
if (ok) { a.href = DISCOVERY_FORM_URL; a.removeAttribute('aria-disabled'); }
else msg.textContent = 'O formulário ainda não foi conectado. Edite DISCOVERY_FORM_URL em config.js.';
