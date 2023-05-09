<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        function nombres() {
            $nombre1 = "Maria";
            $nombre2 = "Juan";
            $nombre3 = "Ana";
            echo "<tr>";
            echo "<td>$nombre1</td>";
            echo "<td>$nombre2</td>";
            echo "<td>$nombre3</td>";
            echo "</tr>";
        }

        function cargos() {
            $cargo1 = "Responsable de producto";
            $cargo2 = "Jefe";
            $cargo3 = "Empleado";
            echo "<tr>";
            echo "<td>$cargo1</td>";
            echo "<td>$cargo2</td>";
            echo "<td>$cargo3</td>";
            echo "</tr>";
        }
    ?>
    
</body>
</html>