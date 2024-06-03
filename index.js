'use strict';

const root = document.getElementById('root');

// const section = document.createElement('section');
// section.classList.add('actors', 'active');

// const h1 = document.createElement('h1');
// h1.classList.add('actors-heading');
// h1.append('Actors');

// section.append(h1);

const h1 = createElement(
  'h1',
  { classNames: ['actors-heading', 'upper-case'] },
  'Actors'
);
const section = createElement('section', { classNames: ['actors'] }, h1);

root.append(section);
