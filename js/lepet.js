/*

The MIT License (MIT)

Copyright (c) 2014 Emmanuel Ayala Mexicano @eamexicano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

    var content = [
      {
        locale: 'es',
        doclanguage: 'es-MX',
        title: "Título",
        main: "Contenido Principal",
        secondary: "<span class='custom'>Contenido Secundario.</span>"
      },
      {
        locale: 'ru',
        doclanguage: 'ru-RU',
        title: "Название",
        main: "основное содержание",
        secondary: "<span class='custom'>второй содержание.</span>"
      }
    ];



(function () {
    "use strict";
    var main_document = document.getElementsByTagName('html')[0];    
    var available_locales = document.getElementsByClassName('locale');
    /*
        Selecciona el nodo title del encabezado - head - para que agregue
        el código del idioma al momento en que el usuario cambia de idioma.
    */
    var header_title = document.getElementsByTagName('title')[0];
    var original_title = header_title.textContent;
    /*
        Nodos del documento que tienen contenido para ser traducido.
    */
    var title = document.getElementById('title');
    var main = document.getElementById('main');
    var secondary = document.getElementById('secondary');

    /*
        Actualiza el contenido del documento con las traducciones.
        Para el contenido se utiliza innerHTML para permitir el uso e interpretación 
        de HTML dentro de las traducciones. 
    */
    function update_content(href) {
      var current_translation = find_locale(href);      
      /*
          Asignar a los nodos para traducir el contenido de la traducción. 
      */
      
      if (current_translation.hasOwnProperty('doclanguage')) {
        main_document.lang = current_translation.doclanguage;
      } else {
        main_document.lang = current_translation.locale;
      }
      
      header_title.innerText =  original_title + " (" + href + ")";
      title.innerHTML = current_translation.title;
      main.innerHTML = current_translation.main;
      secondary.innerHTML = current_translation.secondary;
    }
    /*
        Busca las traducciones con base en el código del idioma provisto. 
        Si el código no existe se devuelven las primeras traducciones.
    */
    function find_locale(locale) {
      for (var i = 0; i < content.length; i++) {
        if (content[i].locale === locale) {
          return content[i];
        }
      }
      return content[0];
    }
    
    /*
        Agregar la clase active al idioma que se está visualizando.
        Se tiene que crear en CSS
    */
    function highlight_current_locale(all, current) {
        for (var i = 0; i < all.length; i++) {
            all[i].className = 'locale';
        }
        current.className = 'locale active';
    }
    
    /*    
        Utilizar attach event para tener compatibilidad con Oldie.
    */
    function attach_link(current_locale) {
        var href = current_locale.href.slice(-2);
        if (window.addEventListener) {
            available_locales[i].addEventListener("click", function () {
                 highlight_current_locale(available_locales, current_locale);
                 update_content(href);
            });
        } else {
            available_locales[i].attachEvent("click", function () {
                 highlight_current_locale(available_locales, current_locale);
                 update_content(href);   
            });
        }
    }
    /*
        El ciclo se va a ejecutar al momento de ejecución porque está dentro de una IIFE.
    */
    for (var i = 0; i < available_locales.length; i++) {
        attach_link(available_locales[i]);
    }
}(content));