<?php
include "conexao.php";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cadastro";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);
	
// Checa a conexão
if ($conn->connect_error) {
	die("Conneection failed: " . $conn-> connect_error);
}

?>