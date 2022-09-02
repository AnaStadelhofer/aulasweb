const stages = document.querySelectorAll('.stage');

stages.forEach(function(el) {
    const h1 = el.querySelector('h1')
    const mensagem = el.querySelector('div#mensagem')
    const button = el.querySelector('button')
    button.addEventListener("click", function(e) {
        mensagem.innerHTML = 'Olá';
    })
    console.log(el);
})
