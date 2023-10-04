// Introdução

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
       elemento.innerHTML = '';
       textoArray.forEach((letra, i) => {
       setTimeout(() => elemento.innerHTML += letra, 75 * i);
});
}


   const titulo = document.querySelector('h1');
   typeWriter(titulo);

   function mostrarConteudo(id) {
    // Obtém o elemento do botão clicado
    var botao = document.getElementById('btn' + id.slice(-1));

    // Obtém o elemento da div correspondente ao botão clicado
    var conteudo = document.getElementById(id);

    // Oculta a div atualmente visível
    var divs = document.querySelectorAll('.conteudo');
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }

    // Remove a classe 'bold' de todos os botões
    var botoes = document.querySelectorAll('.botao');
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].classList.remove('bold');
    }

    // Mostra a div correspondente e aplica estilo ao botão clicado
    conteudo.style.display = 'block';
    botao.classList.add('bold');
}

// Ao iniciar a página, selecione o primeiro botão e sua div correspondente
mostrarConteudo('conteudo1');
