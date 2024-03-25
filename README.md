Box-popular é um código feito especialmente para o blog do Blogger. Ele possui uma lista manual com 5 posts mais populares de cada marcador específico, sendo que a lista só aparece quando um marcador é acionado. Por exemplo, se você clicar no marcador "X", além da página de busca retornar os posts do marcador "X", vai aparecer uma caixa com os posts mais populares desse mesmo marcador. Lembrando que esses posts populares são adicionados manualmente (eu, por exemplo, consultei o Google Analitycs para uma lista mais precisa).

No arquivo .js você pode alterar o link do marcador, o boxSelector (o nome que consta no arquivo HTML) e o ID do widget (HTML31). Apenas certifique-se de garantir qual é o ID do seu widget para fazer a substituição.
No arquivo html, substitua "box-arcade" pelo nome que você achar mais conveniente. Lembrando que ele deverá constar no arquivo .js em boxSelector.
No css, é possível alterar o tamanho do thumbnail e estilizá-lo da forma que você achar melhor. 

Uma vez que você tenha feito todas as alterações, sugiro usar um blog teste para vê-lo em ação. Para que o código não apareça em outras páginas, como posts e homepage, use condicionais do Blogger. Assim:

   <b:if cond='data:blog.url == data:blog.homepageUrl'>
    #HTML31 {display:none; visibility:hidden;}
   </b:if>

   <b:if cond='data:blog.pageType == &quot;static_page&quot;'>      
    #HTML31 {display:none; visibility:hidden;}  
   </b:if>

  <b:if cond='data:blog.pageType == &quot;archive&quot;'>
       #HTML31 {display:none; visibility:hidden;}
  </b:if>

  <b:if cond='data:blog.pageType == &quot;item&quot;'>
     #HTML31 {display:none; visibility:hidden;}       
  </b:if>

Espero que este código possa ser útil para quem, assim como eu, desejava incluir as postagens populares baseadas em marcadores. Como não é possível buscar os posts mais visualizados de forma automática, criei uma alternativa manual.

DICA: inclua apenas posts mais visualizados nos últimos três a 12 meses, que dificilmente serão superados em pouco tempo, pois assim, você não precisará alterar os posts em tão pouco tempo. 
  
