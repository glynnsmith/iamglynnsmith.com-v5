var imagesSmall = document.querySelectorAll(".grid__img--small");
var gridItems = document.querySelectorAll(".grid__item");
var imagesBig = [];
var max = imagesSmall.length;

var i = 0;
var j = 0;
var k = 0;
var totalLoaded = 0;

var loadBigImages = function(){
	var imageSmall = imagesSmall[j];
	var div = gridItems[j];

  var imageBig = new Image();



	imageBig.classList.add("grid__img", "grid__img--big");
  imageBig.srcset = imageSmall.dataset.image_m + ", " + imageSmall.dataset.image_l;
  imageBig.sizes = "600px, 1200px";
  imageBig.src = imageSmall.dataset.src;

  imageBig.onload = function(){
    imageBig.classList.add("grid__img--loaded");
    if (j++ < max - 1) loadBigImages();
  };

  imageBig.onerror = function(){
    if (j++ < max - 1) loadBigImages();
  };

  div.appendChild(imageBig);
};

var checkSmallLoaded = function() {
	var imageSmall = imagesSmall[i];

	var image = new Image();

  image.src = imageSmall.src;

	image.onload = function(){
    if (i++ < max - 1) checkSmallLoaded();
  };

  image.onerror = function(){
    if (i++ < max - 1) checkSmallLoaded();
  };

  totalLoaded++;

  if(totalLoaded >= max) {
		loadBigImages();
	}
};

checkSmallLoaded();