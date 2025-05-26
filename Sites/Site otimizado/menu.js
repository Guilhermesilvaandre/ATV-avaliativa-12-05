

const botaoMenu = document.getElementById('botao-menu');
const menuLateral = document.getElementById('menu-lateral');
const botaoOpcoes = document.getElementById('botao-opcoes');
const menuOpcoes = document.getElementById('menu-opcoes');

botaoMenu.addEventListener('click', () => {
  const aberto = menuLateral.classList.toggle('aberto'); // abre ou fecha menu lateral

  if (!aberto) {
    // Se fechou o menu lateral, também fecha menu de opções
    menuOpcoes.classList.remove('aberto');
  }
});

botaoOpcoes.addEventListener('click', () => {
  // Só permite abrir menu de opções se menu lateral estiver aberto
  if (!menuLateral.classList.contains('aberto')) {
    return;
  }
  menuOpcoes.classList.toggle('aberto');
});
