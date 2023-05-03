<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>

	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Variable STATIC</title>

</head>
<body>

	<?php
	function sumador(){
		static $contador = 0;
		$contador++;
		return $contador."</br>";
	};

	echo(sumador());
	echo(sumador());
	echo(sumador());
	echo(sumador());
	echo(sumador());

	?>

</body>
</html>