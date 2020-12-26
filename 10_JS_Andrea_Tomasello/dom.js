// SELETTORI DEL DOCUMENT

// =============================================================================
// getElementById()
// console.log(document.getElementById('title');

// prendere valore
// console.log(document.getElementById('title').className);

// cambiare valore

// STYLE
let style01 = () => {
  console.log(document.getElementById('title').style.color = 'white');
  console.log(document.getElementById('title').style.background = 'blue');
  console.log(document.getElementById('title').style.padding = '10px');
}
// style01();

// TESTO'
let testo01 = () => {
  console.log(document.getElementById('title').textContent = 'ciao nuovo');
  console.log(document.getElementById('title').innerText = 'ciao nuovo 2');
  console.log(document.getElementById('title').innerHTML = '<span style="color: yellow">ciao con innerHTML</span>');
}
// testo01();
// =============================================================================
// QUERY SELECTOR
// modificano solo un elemento, il primo che trovano con l'id o classe inserita
let query01 = () => {
  document.querySelector('#title').style.background = 'gray';           // id
  document.querySelector('.saluto').textContent = 'gray';               // class
  document.querySelector('a').textContent = 'clickkkkkkkk';             // tag
  document.querySelector('li').style.background = 'red';                // tag
  document.querySelector('li').style.background = 'red';                // tag
  document.querySelector('li:nth-child(2)').style.background = 'black'; // tag
  document.querySelector('li:last-child').style.background = 'blue';    // tag
}
// query01();
// =============================================================================
// getElementsByClassName
// return an HTML collection ( is similar to an Array )
let elementi01 = () => {

  const saluti = document.getElementsByClassName('saluto');

  console.log(saluti);

  saluti[0].style.color = 'red';
  saluti[1].style.color = 'yellow';
  saluti[2].style.color = 'blue';

}
// elementi01();
// =============================================================================
// getElementsByTagName
// return an HTML collection ( is similar to an Array )
let elementi02 = () => {

  const items = document.getElementsByTagName('li');

  console.log(items);

  items[0].textContent = 'number 1';
  items[1].textContent = 'number 2';
  items[2].textContent = 'number 3';
  items[3].textContent = 'number 4';

}
// elementi02();
// =============================================================================
// from HTML collection to Array
let arr01 = () => {

  const items = document.getElementsByTagName('li');

  const arr = Array.from(items);

  console.log(arr);

  arr.forEach ( function(i) {
    console.log(i);
  });

}
// arr01();
// =============================================================================
// QUERY SELECTOR ALL
let query02 = () => {

  const item = document.querySelector('li');

  console.log(item); // return the first list item

  const items = document.querySelectorAll('li');

  console.log(items); // return all lists items and they are an Array
  
  for( i = 0; i < items.length; i++) {
    items[i].style.color = 'red'
  }
  
  console.log(items);

}
// query02();
// =============================================================================
// 