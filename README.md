lepet.js
========

lepet.js es una librería que permite incluir traducciones a un documento HTML.  
Está escrito es JavaScript se puede utilizar con cualquier librería o framework como <a href='http://prototypejs.org/' target='_blank'>PrototypeJS</a> o <a href='http://www.jquery.com' target='_blank'>jQuery</a>.

¿лепет.js?
-----------
lepet (лепет) es la traducción - que me dió google - de la palabra balbuceo a ruso.   
Elegí ese nombre porque no es una solución de internacionalización completa y su alcance es limitado.
js es porque está escrito en JavaScript.


Uso
--------------

Descargar lepet.js  
Incluir lepet.js en la parte inferior del documento HTML a traducir, antes de cerrar la etiqueta <body>.    
En el documento HTML, agregar el atributo id (se puede agregar otro atributo) a los nodos cuyo contenido va a ser traducido.    
En la parte superior de lepet.js seleccionar el nodo por id. Se puede utilizar otro selector, lo importante es que el nodo seleccionado corresponda al que se va a traducir.    
En el arreglo content agregar objetos que van a tener la siguiente estructura:  

{   
  locale: 'es',   
  clave: 'valor',    
  nodo: 'Contenido'   
}

La linea locale es el nombre del idioma a traducir. En este caso utilicé el código <a href='http://www.loc.gov/standards/iso639-2/php/code_list.php' target='_blank'>ISO 639-1</a>.
Otra opción - que no he probado - es agregar el <a href='https://www.iso.org/obp/ui/#search' target='_blank'>código ISO del país</a> si se requiere más precisión en las traducciones que comparten un idioma. Por ejemplo tener contenido en inglés de Estados Unidos además de contenido inglés de Reino Unido. Referencia de los códigos en <a href='https://wiki.mozilla.org/L10n:Locale_Codes' target='_blank'>Mozilla.</a>.

Las claves corresponden a los nodos del documento HTML que se van a traducir (y que deben estar en la parte superior del script seleccionados).  
El valor contiene la traducción que van a utilizar para el idioma en particular.     

var content = [  
  {     
    locale: 'es',   
    title: "Título",    
    main: "Contenido Principal",    
    secondary: "<span class='custom'>Contenido Secundario.</span>"  
  },    
  {     
    locale: 'ru',   
    title: "Название",  
    main: "основное содержание",    
    secondary: "<span class='custom'>второй содержание.</span>"      
  }     
];   

Por último hay que agregar los vínculos que van a actualizar el documento con las traducciones.     Cada vínculo debe contar con el atributo class="locale". 
El atributo href debe ser # junto con el código del idioma del cuál va a utilizar la traducción.

<a href='#es' class='locale'>es</a>
<a href='#en' class='locale'>en</a>

lepet.js utiliza <a href='http://www.opensource.org/licenses/MIT' target='_blank'>licencia MIT</a>.