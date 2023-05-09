<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
</head>
<body>
    //requeire bloquea la ejecucion en caso de error
    //include te avisa del error pero sigue ejecutando el programa
    <?php
    $nombre="Sandra";
    
    require("datos_otros.php");
    /*include("datos_otros.php");*/
    /*function dameNombre(){
        $nombre="Maria";
        echo " el nombre es $nombre";
    }*/
    echo $nombre;
    dameNombre();
    ?>

    
</body>
</html>