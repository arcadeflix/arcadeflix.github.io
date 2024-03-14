<script>
  // Obtém a URL da página atual
  const currentURL = window.location.href;

  // Define um objeto com as URLs correspondentes, os seletores dos elementos correspondentes e os títulos
  const urlToElementMap = {
    'https://testesitegame.blogspot.com/search/label/Arcade': {
      boxSelector: '.box-arcade',
      widgetSelector: '#HTML29',
     
    },
    'https://testesitegame.blogspot.com/search/label/Jogos%20do%20Atari': {
      boxSelector: '.box-atari',
      widgetSelector: '#HTML29',
    
    }
  };

  // Verifica se a URL atual tem correspondência no objeto urlToElementMap
  if (currentURL in urlToElementMap) {
    const { boxSelector, widgetSelector, title } = urlToElementMap[currentURL];
 
 

// Oculta todos os elementos de box e o widget
    const boxElements = document.querySelectorAll('.box');
    const widgetElement = document.getElementById('HTML29');
    boxElements.forEach(boxElement => {
      boxElement.style.display = 'none';
    });
    if (widgetElement) {
      widgetElement.style.display = 'none';
    }
    

    // Exibe apenas o box e o widget correspondentes à URL atual
    const boxElement = document.querySelector(boxSelector);
    if (boxElement && widgetElement) {
      boxElement.style.display = 'block';
      widgetElement.style.display = 'block';
     
    }
  }
</script>