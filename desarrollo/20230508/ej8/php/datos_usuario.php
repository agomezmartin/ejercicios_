<?php

if(isset(($_POST['entrando'])){

	// captura de datos
	$u = $_POST['usu'];
	$c = $_POST['contra'];

	// simulación de datos ya existentes
	$ur = 'CARLOS';
	$cr = '12345';

	// lógica de negocio
	if($u == $ur && $c == $cr){
		echo('Datos correctos');
	} else {
		echo('Datos incorrectos');
	}


}


?>