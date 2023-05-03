<?php

	if(isset($_POST["enviando"])){ // confirma que el botón de SUBMIT se ha ejecutado
		
		// se recogen los valores introducidos en el formulario y se asignan a variables
		$usuario = $_POST["n"];
		$edad = $_POST["e"];

		// se realiza la LÓGICA con los datos recogidos
		if($usuario=="Sandra" && $edad>=18){
			echo("$usuario es mayor de edad.");
		} else {
			echo("$usuario es menor de edad.");
		}
	};



?>