lepet.js
========

lepet.js es una librería que permite incluir traducciones a un documento HTML.  
Está escrito en JavaScript para que se pueda utilizar con cualquier librería o framework como 
[PrototypeJS](http://prototypejs.org/) o [jQuery](http://www.jquery.com).

¿лепет.js?
-----------
lepet - лепет - es la traducción - que me dió google - de la palabra balbuceo a ruso.   
Elegí ese nombre porque no es una solución de internacionalización completa y su alcance es limitado.   
js es porque está escrito en JavaScript.


Uso
--------------

Descargar lepet.js  
Crear un arreglo content.  
En este arreglo cada elemento va a tener un objeto con el contenido de las traducciones para un idioma en particular.  
Incluir lepet.js en la parte inferior del documento HTML a traducir, antes de cerrar la etiqueta `<body>` y DESPUÉS de tener definido el arreglo content.  
En el documento HTML, agregar el atributo * id - se puede agregar otro atributo - a los nodos cuyo contenido va a ser traducido.  
Los objetos del arreglo content que van a tener la siguiente estructura:  

{   
  &nbsp;&nbsp;locale: 'es',   
  &nbsp;&nbsp;doclanguage: 'es-MX',   
  &nbsp;&nbsp;nodo: 'valor'   
}   

El valor del atributo locale es el nombre del idioma a traducir. En este caso utilicé el código 
[ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php).   
El atributo **locale** - y su valor - **es necesario**.

El valor del atributo doclanguage es el nombre del idioma y seguido de un guión la [región](https://www.iso.org/obp/ui/#search) donde se utiliza el idioma.   
Esto es útil para separar correctamente las palabras si se utiliza la propiedad [hyphen](https://drafts.csswg.org/css-text-3/#hyphens-property) de CSS. También si se requiere más precisión en las traducciones que comparten un idioma.   
Por ejemplo tener contenido en inglés de Estados Unidos además de contenido inglés de Reino Unido. Referencia de los códigos en [Mozilla](https://wiki.mozilla.org/L10n:Locale_Codes).   
Si no se asigna este atributo se va a utilizar el valor del atributo locale como valor del atributo lang de la etiqueta HTML.
 

Dentro del objeto el nombre los atributos corresponde al valor del atributo en los nodos del documento HTML que se van a traducir.   
El valor del atributo contiene la traducción que van a utilizar para el idioma en particular.     

var content = [   
&nbsp;&nbsp;{   
&nbsp;&nbsp;&nbsp;&nbsp;locale: 'es',   
&nbsp;&nbsp;&nbsp;&nbsp;doclanguage: 'es-MX',   
&nbsp;&nbsp;&nbsp;&nbsp;title: "Título",   
&nbsp;&nbsp;&nbsp;&nbsp;main: "Contenido Principal",   
&nbsp;&nbsp;&nbsp;&nbsp;secondary: "`<span class='custom'>`Contenido Secundario.`</span>`"   
&nbsp;&nbsp;},   
&nbsp;&nbsp;{   
&nbsp;&nbsp;&nbsp;&nbsp;locale: 'ru',   
&nbsp;&nbsp;&nbsp;&nbsp;doclanguage: 'ru-RU',   
&nbsp;&nbsp;&nbsp;&nbsp;title: "Название",   
&nbsp;&nbsp;&nbsp;&nbsp;main: "основное содержание",   
&nbsp;&nbsp;&nbsp;&nbsp;secondary: "`<span class='custom'>`второй содержание.`</span>`"   
&nbsp;&nbsp;}   
];   

El contenido de las traducciones puede incluir etiquetas HTML.

Incluir un nodo con el atributo id lepet. `<div id='lepet'></div>`   
Dentro de este nodo se van a generar los vínculos hacia los idiomas de manera automática.

Puedes revisar los siguientes archivos:
index.html - Marcado / estilo. Referencia para crear tu documento.   
content.js - Contenido con las traducciones. Recuerda asociar el valor del atributo con el de un nodo en HTML.   
lepet.js - La funcionalidad - en teoría no hay que mover nada ahí -.


lepet.js utiliza una [licencia MIT](http://www.opensource.org/licenses/MIT).