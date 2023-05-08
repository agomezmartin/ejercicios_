<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Recogida de datos de FORMULARIO</title>

	<style>
		* {
			margin: 0;
		}
		form {
			width: 50%;
			margin: auto;
			padding: 20px;
			border: 1px hotpink solid;
			border-radius: 20px;
		}
		label {
			display: inline-block;
			width: 100%;
		}
		input{
			display: block;
		}
		
	</style>

</head>
<body>

	<form action="index.php" method="post">

		<label for="nombre">Nombre:</label>
		<input type="text" name="n">

		<label for="edad">Edad:</label>
		<input type="text" name="e">

		<input type="submit" name="enviando" value="Envíar">


		<?php
		if(isset($_POST["enviando"])){ // confirma que el botón SUBMIT se ha ehecutado

			// se recogen los valores introducidos en el formulario y se asignan a variables
			$usuario = $_POST["n"];
			$edad = $_POST["e"];

			// lógica de negocio
			if($edad < 18){
				echo("$usuario es menor de edad.");
			} else {
				echo("$usuario es mayor de edad.");
			}
		};
		?>

</form>

</body>
</html>







