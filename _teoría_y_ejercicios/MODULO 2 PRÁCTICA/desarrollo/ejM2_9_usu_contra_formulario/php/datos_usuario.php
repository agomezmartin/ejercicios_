

    
<?php
if(isset($_POST["entrando"])){
    $u=$_POST["usu"];
    $c=$_POST["contra"];
    $ur="CARLOS";
    $cr="12345";
    if($u==$ur && $c==$cr){
        echo "puedes entrar";
    }
    else{
        echo "vuelve a intentarlo";
    }
}
?>
