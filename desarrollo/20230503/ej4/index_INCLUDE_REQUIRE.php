<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Prueba PHP</title>
	<style>
		* {
			font-family: Arial;
			margin:0;
		}

		table {
		width: 100%;
		border-collapse: collapse;
		}

		td {
		text-align: center;
		}

		th, td {
		padding: 15px;
		text-align: left;
		}

		th, td {
		border-bottom: 1px solid #ddd;
		}

		tr:hover {background-color: black; color:white}

	</style>
</head>
<body>

	<?php
		require('info_clientes.php');

		echo "<table>";
		nombreClientes();
		cargosClientes();
		echo "</table>";

		?>

</body>
</html>