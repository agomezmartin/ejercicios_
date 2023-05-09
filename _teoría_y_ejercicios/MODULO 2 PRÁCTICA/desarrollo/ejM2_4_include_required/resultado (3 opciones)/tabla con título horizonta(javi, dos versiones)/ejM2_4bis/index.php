<!DOCTYPE html>
<html lang="en">
  <head>
	<meta charset="utf8">
    <title>Primer PHP</title>
	<style>

		table, th, td {
			border:1px solid black;
			border-color: blue;
			background-color: #96D4D4;
			border-collapse: collapse;
		}

		.centrada {
			margin-left: auto;
			margin-right: auto;
		}

	</style>
  </head>
  <body>
	<p>( llámame desde el servidor Apache Tomcat php con la url siguiente: http://localhost/desarrollo/ejM2_4bis/ )</p>
  
	<?php
		require("info_clientes.php");

		echo "<table class='centrada' style='width:70%'>";
		echo " <caption>Información Clientes</caption>";
		comoFila(nombres(), cargos());
		echo "</table>";

	?>
	
  </body>
</html>
