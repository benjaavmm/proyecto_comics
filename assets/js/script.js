$(document).ready(function() {
    $("#searchForm").submit(function(event) {
      event.preventDefault(); 
  
      const terminoBusqueda = $("#searchInput").val().toLowerCase();
      
      // Filtrar y Mostrar Resultados
      $(".comic-box").each(function() {
        const tituloComic = $(this).find("h3").text().toLowerCase();
        
        if (tituloComic.includes(terminoBusqueda)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
  
      // Actualizar Mensaje de "No hay Resultados"
      const mensajeSinResultados = $(".no-results-message");
      if ( $(".comic-box:visible").length === 0) {
        mensajeSinResultados.show();
      } else {
        mensajeSinResultados.hide();
      }
    });
  });
  