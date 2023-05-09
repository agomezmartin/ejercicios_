// JavaScript Document

	function displayimg(box){	
	var floresimg = new Array(5);
	floresimg[0] = "imagenes/rosas_rojas.jpg";
	floresimg[1] = "imagenes/rosas_rosas.jpg";
	floresimg[2] = "imagenes/rosas_amarillas.jpg";
	floresimg[3] = "imagenes/rosas_blancas.jpg";
	floresimg[4] = "imagenes/rosas_multi.jpg";
	document.getElementById('flores').src = floresimg[parseInt(box.value)];
	}