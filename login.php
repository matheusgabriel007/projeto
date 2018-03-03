<?php 
  include "conexao.php";

  $nome_plano = $_POST['login'];
  

  $sql = "INSERT INTO site (email,senha) VALUES ('$email', '$', '$', '$')";

  if ($conn->query($sql) === TRUE) {
    echo "usuário inserido com sucesso";
  }

  else {
    echo "Error". $sql . "<br>" . $conn->error;
  }

  $conn->close()
 ?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Login</title>
  </head>
  <body>

    <nav class="navbar navbar-dark justify-content-center" style="background-color: #000;">
  <form class="form-inline">
    <p></p>
    
  </form>
</nav>


<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="index.html">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="livros.php">Livros</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="roupas.php">Roupas</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="eletronicos.php">Eletronicos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="cel-game.php">Celulares e Games</a>
  </li>
</ul>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <p></p>
  <a href=".php" class="btn btn-dark btn-lg active" role="button" aria-pressed="true">Confirmar</a>
</form>



















    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>