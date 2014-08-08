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
  &nbsp;&nbsp;locale: 'es',   
  &nbsp;&nbsp;clave: 'valor',    
  &nbsp;&nbsp;nodo: 'Contenido'   
}

La linea locale es el nombre del idioma a traducir. En este caso utilicé el código 
[ISO 639-1](http://www.loc.gov/standards/iso639-2/php/code_list.php).
Otra opción - que no he probado - es agregar el [código ISO del país](https://www.iso.org/obp/ui/#search) si se requiere más precisión en las traducciones que comparten un idioma. Por ejemplo tener contenido en inglés de Estados Unidos además de contenido inglés de Reino Unido. Referencia de los códigos en [Mozilla](https://wiki.mozilla.org/L10n:Locale_Codes).

Las claves corresponden a los nodos del documento HTML que se van a traducir (y que deben estar en la parte superior del script seleccionados).  
El valor contiene la traducción que van a utilizar para el idioma en particular.     

var content = [  
&nbsp;&nbsp;{     
&nbsp;&nbsp;&nbsp;&nbsp;locale: 'es',   
&nbsp;&nbsp;&nbsp;&nbsp;title: "Título",    
&nbsp;&nbsp;&nbsp;&nbsp;main: "Contenido Principal",    
&nbsp;&nbsp;&nbsp;&nbsp;secondary: "`<span class='custom'>`Contenido Secundario.`</span>`"  
&nbsp;&nbsp;},    
&nbsp;&nbsp;{     
&nbsp;&nbsp;&nbsp;&nbsp;locale: 'ru',   
&nbsp;&nbsp;&nbsp;&nbsp;title: "Название",  
&nbsp;&nbsp;&nbsp;&nbsp;main: "основное содержание",    
&nbsp;&nbsp;&nbsp;&nbsp;secondary: "`<span class='custom'>`второй содержание.`</span>`"      
&nbsp;&nbsp;}     
];   

El contenido de las traducciones puede incluir etiquetas HTML.

Por último hay que agregar los vínculos que van a actualizar el documento con las traducciones.   Cada vínculo debe contar con el atributo class="locale". 
El atributo href debe ser # junto con el código del idioma del cuál va a utilizar la traducción.

`<a href='#es' class='locale'>es</a>`   
`<a href='#en' class='locale'>en</a>`

Abrir el archivo index.html en el navegador. Es una referencia del uso básica para el 
contenido del documento HTML (tanto texto como atributos en los nodos). El archivo lepet.js contiene traducciones que hacen referencia a los nodos y al contenido de este documento. 

lepet.js utiliza una [licencia MIT](http://www.opensource.org/licenses/MIT).