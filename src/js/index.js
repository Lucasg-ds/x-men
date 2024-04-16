// Buscar todos os elementos da lista através da class e coloca-los em uma única variável
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    // Adição do evento de mouse enter para cada personagem
    personagem.addEventListener('mouseenter', () => {

        // Resposividade para celular, rolamento para cima após seleção de personagem
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth"});
        }

        // Verificar se já existe um personagem 'selecionado' e remover sua seleção caso ela exista
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        // Adição de class 'selecionado' para o personagem em que o mouse estiver
        personagem.classList.add('selecionado');

        // Pegar o elemento do personagem grande para adicionar informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
                                                        //Template string
        // Alterar nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Alterar a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})