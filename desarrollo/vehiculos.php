<?php

  class Coche{
    var $ruedas;
    var $color;
    var $motor;

    function Coche(){ //constructor

      $this->ruedas = 4;
      $this->color = "";
      $this->motor = 1600;
    }

    function arrancar(){
      echo "Estoy arrancando <br>";
    }

    function girar(){
      echo "Estoy girando <br>";
    }

    function frenar(){
      echo "Estoy frenando <br>"
    }

    function establecer_color($modelo_coche, $color_coche){
      
      $this.color = $color_color;
      $this.motor = $modelo_coche;

      echo "El color del modelo es " . $this.color ". <br>";
    }


  }

?>