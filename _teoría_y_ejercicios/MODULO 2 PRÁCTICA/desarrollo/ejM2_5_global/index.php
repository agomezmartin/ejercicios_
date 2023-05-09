<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title></title>
</head>
<body>
    <?php
    $nombre="Sandra";
function nombre(){
  global $nombre;
  $nombre="pepe";
}
nombre();
echo $nombre;
    ?>
</body>
</html>