// Variant 1
/*
const list = document.getElementById('list'),
  els = list.getElementsByTagName('li')

for (let i = 0, len = els.length; i < len; i++) {
  els[i].onclick = function () {
    alert(i + 1)
  }
}
*/


// Variant 2
/*

const list = document.getElementById('list'),
  els = list.getElementsByTagName('li')

for (var i = 0, len = els.length; i < len; i++) {
  function fn(idx) {
    alert(idx + 1)
  }
  els[i].onclick = fn.bind(null, i)
}

 */
