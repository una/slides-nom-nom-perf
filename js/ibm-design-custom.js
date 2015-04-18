/*
* Just some js to make things a little nicer
*/

function introFooter() {
  if (Reveal.isFirstSlide()) {
    document.querySelector('.ibm-header').style.display = 'none';
    document.querySelector('.intro-only').style.display = 'block';
  }
  else {
    document.querySelector('.intro-only').style.display = 'none';
    document.querySelector('.ibm-header').style.display = 'block';
  }
}

introFooter();
Reveal.addEventListener( 'slidechanged', function( event ) {
  introFooter();
});

//for this presentation
Reveal.addEventListener( 'smiley-rolls', function() {
    var elem = document.querySelector('img:nth-child(4)');
    elem.classList.add("rollaway");
}, false );