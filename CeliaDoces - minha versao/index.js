// Selecionar os elementos de cada carrossel individualmente
const carrossel1 = {
    Indicadores: document.querySelectorAll('.containerCarrossel .indicadoresBotoes button'),
    itensCarrossel: document.querySelectorAll('.containerCarrossel .itemCarrossel'),
    legendasCarrossel: document.querySelectorAll('.containerCarrossel .legendaCarrossel'),
    CurrentIndex: 0
  };
  
  const carrossel2 = {
    Indicadores: document.querySelectorAll('.container2Carossel .indicadoresBotoes button'),
    itensCarrossel: document.querySelectorAll('.container2Carossel .itemCarrossel'),
    legendasCarrossel: document.querySelectorAll('.container2Carossel .legendaCarrossel'),
    CurrentIndex: 0
  };
  
  const carrossel3 = {
    Indicadores: document.querySelectorAll('.container3Carossel .indicadores2Botoes button'),
    itensCarrossel: document.querySelectorAll('.container3Carossel .itemCarrossel'),
    legendasCarrossel: document.querySelectorAll('.container3Carossel .legendaCarrossel'),
    CurrentIndex: 0
  };
  
  // Função para inicializar o controle de um carrossel
  function inicializarCarrossel(carrossel) {
    // Ativar o primeiro item e legenda
    carrossel.itensCarrossel[carrossel.CurrentIndex].classList.add('active');
    carrossel.legendasCarrossel[carrossel.CurrentIndex].classList.add('active');
  
    // Loop para adicionar eventos aos botões indicadores
    carrossel.Indicadores.forEach((Indicador, index) => {
      Indicador.addEventListener('click', () => {
        // Remover a classe 'active' do item atual
        carrossel.itensCarrossel[carrossel.CurrentIndex].classList.remove('active');
        carrossel.legendasCarrossel[carrossel.CurrentIndex].classList.remove('active');
        carrossel.Indicadores[carrossel.CurrentIndex].classList.remove('active');
  
        // Atualizar o índice atual
        carrossel.CurrentIndex = index;
  
        // Adicionar a classe 'active' ao novo item e legenda
        carrossel.itensCarrossel[carrossel.CurrentIndex].classList.add('active');
        carrossel.legendasCarrossel[carrossel.CurrentIndex].classList.add('active');
        carrossel.Indicadores[carrossel.CurrentIndex].classList.add('active');
      });
    });
  }
  
  // Inicializar todos os carrosséis
  inicializarCarrossel(carrossel1);
  inicializarCarrossel(carrossel2);
  inicializarCarrossel(carrossel3);