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
            return [ "Maria", "Juan", "Ana"];
        }

        function cargos() {
            return [ "Responsable de producto", "Jefe", "Empleado" ];
        }

        function comoFila($array1, $array2) {
            for ($i = 0; $i < count($array1); $i++) {
                echo "<tr>";
                echo "<td>" . $array1[$i] ."</td>";
                echo "<td>" . $array2[$i] ."</td>";
                echo "</tr>";
            }
           
        }
    ?>
    
</body>
</html>