<?php
  $dbHost = 'Localhost';
  $dbUsername = 'root';
  $dbPassword ='1234';
  $dbName = 'Formulario'

  $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
  
  if($conexao -> connect_errno) {
    echo "Erro";
  } else {
    echo "Conexão efetuada com sucesso!";
  }
?>