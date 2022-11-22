
var bnt = document.querySelector('#Show-text');
var container = document.querySelector('.textoOcult');

bnt.addEventListener('click', function(){
   if (container2.style.display === 'block'){
      container2.style.display = 'none';
   }
   if (container3.style.display === 'block'){
      container3.style.display = 'none';
   }
   if (container.style.display === 'block'){
      container.style.display = 'none';
   } else {
      container.style.display = 'block';
   }
});
var bnt2 = document.querySelector('#Show-text2');
var container2 = document.querySelector('.textoOcult2');

bnt2.addEventListener('click', function(){
      container.style.display = 'none';
   if (container3.style.display === 'block'){
      container3.style.display = 'none';
   }
   if (container2.style.display === 'block'){
      container2.style.display = 'none';
   } else {
      container2.style.display = 'block';
   }

});

var bnt3 = document.querySelector('#Show-text3');
var container3 = document.querySelector('.textoOcult3');

bnt3.addEventListener('click', function(){

      container.style.display = 'none';
   if (container2.style.display === 'block'){
      container2.style.display = 'none';
   }
   if (container3.style.display === 'block'){
      container3.style.display = 'none';
   } else {
      container3.style.display = 'block';
   }

});