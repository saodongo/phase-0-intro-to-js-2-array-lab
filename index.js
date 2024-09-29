
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function prependCat(name) {
  return [name, ...cats];
}

function appendCat(name) {
  return [...cats, name];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}