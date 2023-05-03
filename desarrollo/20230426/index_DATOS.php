<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Prueba PHP</title>
</head>
<body>

	<?php

		$nombre = "Asier";

		echo "</br>";
		echo "El nombre original es: " .$nombre;
		echo "</br>";
		
		include("datos_otros.php");
		dameNombre();

		echo "</br>";
		echo "El nombre original es: " .$nombre;
		
		function dameDatos(){
			echo "Esta función se ejecuta en el index.html";
		}

		echo "</br>";
		dameDatos();
	?>


</body>
</html>