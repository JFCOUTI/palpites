PALPITES DA SORTE - VERSAO PARA IPHONE (PWA)
=============================================
Nao precisa de Mac, nem de conta paga da Apple. O app fica hospedado num endereco https gratuito
(GitHub Pages) e voce o instala na tela inicial do iPhone pelo Safari.

PARTE 1 - PUBLICAR (uma vez so, no notebook)
 1. Crie uma conta gratuita em github.com (se ainda nao tiver).
 2. Clique em "+" (canto superior direito) > "New repository".
    - Repository name: palpites   (pode ser outro nome, sem espacos nem acentos)
    - Marque "Public".  Clique em "Create repository".
 3. Na pagina do repositorio, clique em "uploading an existing file".
 4. Arraste para a janela TODOS os arquivos desta pasta (index.html, manifest.webmanifest, sw.js e os 3 icon-*.png).
    NAO arraste este LEIA-ME se nao quiser. Clique em "Commit changes".
 5. Va em Settings > Pages (menu da esquerda).
    - Em "Build and deployment", Source: "Deploy from a branch".
    - Branch: "main" e pasta "/ (root)". Clique em "Save".
 6. Espere 1 a 3 minutos. A mesma pagina mostra o endereco:
    https://SEU-USUARIO.github.io/palpites/
    (Esse endereco e publico, mas o app so contem os resultados da loteria, que ja sao publicos.)

PARTE 2 - INSTALAR NO IPHONE
 1. Abra o endereco acima no SAFARI (tem que ser o Safari, nao o Chrome).
 2. Toque no botao Compartilhar (quadrado com seta para cima).
 3. Role e toque em "Adicionar a Tela de Inicio" > "Adicionar".
 4. Abra pelo icone do trevo. Ele abre em tela cheia e funciona sem internet.

ATUALIZAR A BASE DA LOTERIA
 - Toque em "Atualizar da CAIXA". Se o iPhone/servidor bloquear a busca (CORS), use
   "Importar planilha" (o seletor de arquivos do iPhone abre normalmente).

ATUALIZAR O APP (quando houver versao nova)
 - Substitua o index.html no GitHub e, no arquivo sw.js, troque "palpites-v1" por "palpites-v2" (v3...).
   No iPhone, feche o app e abra de novo (as vezes e preciso abrir duas vezes).

OBSERVACOES
 - Tamanho das letras e botoes: use os botoes A- e A+ no topo.
 - Se o iPhone ficar semanas sem abrir o app, o iOS pode limpar os dados guardados; nesse caso basta atualizar a base de novo.
 - Ferramenta de estudo. Loteria e jogo de azar: nenhuma estrategia garante premio.
