'use strict';

/*
options={
  classNames : ['actors', 'active'],
  attributes : {'title': 'actors', 'key':'value'},
  styles : {'color':'red'},
  events : {'click', handleClick}
}
*/

function createElement(tag, options, ...children) {
  const elem = document.createElement(tag);
  if(options['classNames']){
    elem.classList.add(...options['classNames']);
  }
  elem.append(...children);
  return elem;
}
