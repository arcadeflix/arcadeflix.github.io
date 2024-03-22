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
},

'https://testesitegame.blogspot.com/search/label/Sega%20Game%20Gear': {
      boxSelector: '.box-gg',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/Sega%20Master': {
      boxSelector: '.box-sms',
      widgetSelector: '#HTML29',

},


'https://testesitegame.blogspot.com/search/label/Sega%20Genesis': {
      boxSelector: '.box-genesis',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/Snes': {
      boxSelector: '.box-snes',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/Nes': {
      boxSelector: '.box-nes',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/N64': {
      boxSelector: '.box-n64',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/PS1': {
      boxSelector: '.box-ps1',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/NDS': {
      boxSelector: '.box-nds',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/GBA': {
      boxSelector: '.box-gba',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/GameBoy%20Color': {
      boxSelector: '.box-gbc',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/HTML5%20Games': {
      boxSelector: '.box-html5',
      widgetSelector: '#HTML29',

},

'https://testesitegame.blogspot.com/search/label/PC%2FDOS': {
      boxSelector: '.box-pcdos',
      widgetSelector: '#HTML29',
   
},

'https://testesitegame.blogspot.com/search/label/Flash%20Games': {
      boxSelector: '.box-flash',
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
