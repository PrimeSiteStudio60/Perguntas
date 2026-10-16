# Arquivo de Descobertas

Página estática (HTML/CSS/JS), sem backend, sem banco, sem Node. As respostas ficam no **Google Forms**, na sua conta. O site só tem um botão que abre o formulário. Nenhuma resposta passa pelo código.
Esta pasta é independente do Capítulo 1: não altera nenhum arquivo dele.

## 1. Criar o formulário (forms.google.com)
1. Entre com a sua conta Google e clique em **Em branco**. Título: **Arquivo de Descobertas**.
2. Descrição: "Responda só ao que quiser. Pode pular qualquer pergunta. As respostas serão lidas por mim e poderão inspirar os próximos capítulos desta história."
3. Crie as perguntas abaixo como **Parágrafo**. Deixe **todas** com "Obrigatória" **desligado**.
   - Qual pequena coisa consegue melhorar o seu dia?
   - Existe algum hábito ou ritual seu que te faz bem?
   - Qual é um sonho que você gostaria de realizar?
   - Como você imagina a sua vida daqui a alguns anos?
   - O que você gostaria de aprender ou experimentar um dia?
   - Qual é uma coisa sobre você que poucas pessoas conhecem?
   - Existe um lado seu que costumam interpretar errado?
   - O que você gostaria que as pessoas entendessem sobre você?
   - Qual lembrança costuma fazer você sorrir?
   - Existe uma música que tenha um significado especial para você?
   - Existe um lugar, real ou imaginado, que você ama ou gostaria de conhecer?
   - O que faz você se sentir compreendida por alguém?
   - Que atitude faz você perceber que alguém se importa?
   - Qual pergunta você gostaria que alguém fizesse a você?
   - Qual curiosidade sobre você não caberia em um currículo?
   - Existe algo que você queira contar e que não coube nas outras perguntas?
4. Aba **Configurações → Respostas**: deixe **desativado** "Coletar endereços de e-mail" e **não** ative "Limitar a 1 resposta" (isso obrigaria o login Google dela). Se houver a opção "Permitir edição após envio", avalie ativar para ela poder corrigir depois.
5. Em **Configurações → Apresentação → Mensagem de confirmação**, escreva algo como: "Obrigado por compartilhar. Você pode voltar a este link quando quiser."
6. Na aba **Respostas**, ative **Receber notificações por e-mail de novas respostas** (menu ⋮) e, se quiser, **Vincular ao Planilhas**. Só você, dono da conta, vê as respostas, a menos que compartilhe o formulário ou a planilha com alguém.
7. Clique em **Enviar → ícone de link** e copie o link (começa com `https://docs.google.com/forms/` ou `https://forms.gle/`).
8. **Teste você mesmo:** abra o link em uma aba anônima, envie uma resposta de teste e confira se ela aparece na aba Respostas. Depois apague a resposta de teste.

## 2. Conectar o link
Abra `config.js` e troque `COLE_AQUI_A_URL_DO_FORMULARIO` pelo link real, entre aspas. Só links do Google Forms ativam o botão.

## 3. Publicar no GitHub Pages (sem mexer no Capítulo 1)
**Opção recomendada, repositório novo:**
1. No GitHub, crie o repositório `arquivo-de-descobertas` (público).
2. Envie os 4 arquivos: `index.html`, `style.css`, `script.js`, `config.js`.
3. **Settings → Pages →** branch `main`, pasta `/ (root)`, **Save**.
4. Após alguns minutos, o site fica em `https://SEU-USUARIO.github.io/arquivo-de-descobertas/`.
Como o repositório é público, o código (sem respostas) é visível; as respostas ficam só no Google.

**Alternativa:** colocar esta pasta dentro do repositório do Capítulo 1, em uma subpasta nova. Isso só adiciona arquivos, mas prefira o repositório novo para não correr risco.

Mande o link direto para ela. Nada na página do Capítulo 1 precisa ser alterado. Se um dia quiser ligar as duas, basta adicionar um link no Capítulo 1 por conta própria.

## 4. Antes de enviar
- Confirme que a frase "É só para isso que serão usadas" e a de apagar respostas refletem o que você realmente vai fazer.
- Você pode ajustar qualquer texto em `index.html` e as perguntas em `script.js` (mantenha o formulário igual à lista).

## Testes
Só foi feita checagem de sintaxe do JavaScript. A página **não foi aberta em navegador nem em celular**, e **o Google Forms ainda não existe**, então nada foi publicado nem testado de ponta a ponta.
