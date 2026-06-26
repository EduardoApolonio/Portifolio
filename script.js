//mostrar pagina do menu que esta
function marcarLinkAtivo() {
    var pagina = window.location.pathname.split('/').pop();
    var links = document.querySelectorAll('nav ul li a');

    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href === pagina || (pagina === '' && href === 'index.html')) {
            link.classList.add('ativo');
        }
    });
}

//Validar formulario
function configurarFormulario() {
    var form = document.getElementById('formContato');
    if (!form) return;

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var mensagem = document.getElementById('mensagem').value.trim();
        var retorno = document.getElementById('mensagem-retorno');

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        retorno.style.display = 'block';
        retorno.textContent = 'Mensagem enviada! Obrigado';
        form.reset();
    });
}

marcarLinkAtivo();
configurarFormulario();