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
		nombreClientes();
		cargosClientes();

		echo "<h1 text-align='center'>Tabla horizontal</h1>";

		/* TABLA HORIZONTAL */
		echo "<table>";
		echo("<tr>
				<th>CLIENTE</th>
					<td>$cliente1</td>
					<td>$cliente2</td>
					<td>$cliente3</td>
					<td>$cliente4</td>
					<td>$cliente5</td>
				</tr>");
		
		echo("<tr>
				<th>CARGO</th>
					<td>$cargo1</td>
					<td>$cargo2</td>
					<td>$cargo3</td>
					<td>$cargo4</td>
					<td>$cargo5</td>
				</tr>");
		echo "</table>";
		/* TABLA VERTICAL */
		echo "<h1 text-align='center'>Tabla vertical</h1>";
		echo "<table>";
		echo("<tr>
				<th>CLIENTE</th>
				<th>CARGO</th>
		</tr>
		<tr>
			<td>$cliente1</td>
			<td>$cargo1</td>
		</tr>
		<tr>
			<td>$cliente2</td>
			<td>$cargo2</td>
		</tr>
		<tr>
			<td>$cliente3</td>
			<td>$cargo3</td>
		</tr>
		<tr>
			<td>$cliente4</td>
			<td>$cargo4</td>
		</tr>
		<tr>
			<td>$cliente5</td>
			<td>$cargo5</td>
		</tr>
		</tr>");
		echo "</table>";

		?>

</body>
</html>