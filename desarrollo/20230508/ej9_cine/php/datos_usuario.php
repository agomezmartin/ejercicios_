<?php

if(isset($_POST['enviando'])){

	// captura de datos
	$dia = $_POST['dia'];
	$edad = $_POST['edad'];

	// lógica de negocio
	if($dia == 'lunes' || $dia == 'miércoles' || $dia == 'viernes' && $edad <= 60 ){
		echo('Como tienes' . $edad . ' años, y vas a venir el '. $dia);
	}

}


?>