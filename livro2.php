<!DOCTYPE html>
<html>
<head>
 <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <title>Fazer compra</title>

  <nav class="navbar navbar-dark justify-content-center" style="background-color: #000;">
  <form class="form-inline">

  <ul class="nav justify-content-center">
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
    
    
  </form>
</nav>

</nav>
    <p></p>
    
  </form>
</nav>

  <meta charset="utf-8" lang="pt-br">
  
  <!--FAV ICON-->
  <link rel="shortcut icon" href="imagens/fav-icon.png"/>

  <!--CSS-->
  <link rel="stylesheet" type="text/css" href="css/estilo.css">
  <link rel="stylesheet" type="text/css" href="css/fazer-pedido.css">

  <!--FONTE ICONE-->
  <link rel="stylesheet" type="text/css" href="fontes/font-icon.css">

  <!-- STYLE SLIDE -->
  <link rel="stylesheet" type="text/css" href="slide/engine1/style.css" />
  <!-- FIM STYLE SLIDE -->

  <!-- SCRIPT SLIDE -->
  <script type="text/javascript" src="slide/engine1/jquery.js"></script>
  <!-- FIM SCRIPT SLIDE -->

  <!-- STYLE ALERT -->
  <link rel="stylesheet" type="text/css" href="alertfy/themes/alertify.core.css" />
  <link rel="stylesheet" type="text/css" href="alertfy/themes/alertify.default.css" />
  <!-- FIM ALERT SLIDE -->



</head>

<body>
  <header id="cabecalho">

    <div id="divisoria1"></div>

    <section id="divisoriaContato">
      <div id="englobaDivisoriaContato">
        

      </div>
    </section> <!--FIM DIVISORIA CONTATO-->

    <section class="divisoria2Cabecalho">
      <div id="englobaDivisoria2Cabecalho">

        

        

        

      </div>
    </section>
  </header> <!--FIM CABECALHO-->



  
      <!--BOX PEDIDO 1-->
        <div class="boxPedido1">
          <img class="imgPedido" src="produtos/livro2.jpg" style="float:left;"/>
          <h1 class="tituloPedido">Livro</h1>
          <hr class="hrPedido"></hr>
          Nao Se Desespere!: Provocacoes Filosoficas (Em Portugues do Brasil) - Mario Sergio Cortella
          <hr class="hrPedido"></hr>
          <div class="englobaPrecos">
            <p class="preco_pedido1"><strike>R$ 25,00</strike></p>
            <p class="precoPromocao_pedido1">R$ 15,50</p>
          </div>
          <input id="qtPedido1" class="qt_pedido1" type="number" name="qt_pedido1" min="1" max="5" step="1" value="0" onchange="calcula_pedido1()" onkeyup="calcula_pedido1()">
          <input id="result_Pedido1" class="resultato_pedido1" type="text" name="resultato_pedido1" value="R$ 0.00" disabled>
          <input id="enviar_pedido1" class="button_adicionar_pedido1" type="button" name="button_adicionar_pedido1" value="Adicionar" onclick="return adiciona_pedido1()">
        </div>
      <!-- FIM BOX PEDIDO 1-->


      
      </div>
      <section id="box_meuPedido" class="meuPedido">
        <h2 class="h2_qtPedidos">Carrinho</h2>
        <hr class="hrPedido"></hr>

        <h2 class="h2_meuPedido">Pedidos</h2>
        <p id="num_pedidos" class="numPedidos">0</p>
        <hr class="hrPedido"></hr>


        

        <h2 class="h2_meuPedido">Total</h2>
        <p id="vl_total" class="vlTotal">R$ 00,00</p>
        <input class="finalizarPedido" type="button" name="finalizarPedido" value="Finalizar Pedido" onclick="checagemFormFP(frm_FazerPedidos.cepN.value, frm_FazerPedidos.ruaN.value, frm_FazerPedidos.cidadeN.value, frm_FazerPedidos.numeroN.value, frm_FazerPedidos.nomeN.value, frm_FazerPedidos.telefoneN.value), checagemFinal()">

        <input class="zerarPedido" type="button" name="finalizarPedido" value="Zerar Pedido" onclick="zeraPedido()">


  <footer class="rodape">
    <div id="redesSociaisFooter">
      <div id="englobaSocialFooter">
        <div id="voltaInicio">
          
        </div>
       
      </div>
    </div>
    <div id="direitosLinhaCima"></div>
    <div id="direitosReservados">
      <p align="center">© Copyright 2017 - Roupas e moda - Todos os direitos reservados</p>
    </div>
  </footer> <!--FIM RODAPÉ-->

  <script>
  function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
    
    if (texto.substring(0,1) != saida){
              documento.value += texto.substring(0,1);
    }
    
  }
  </script>

  <!--JQUERY-->
  <script type="text/javascript" src="jquery/jquery-3.1.1.min.js"></script>
  <script type="text/javascript" src="jquery/funcoes-jquery.js"></script>
  
  <!--JAVASCRIPT-->
  <script type="text/javascript" src="javascript/funcoes-javascript.js"></script>

  <!-- SCRIPT ALERT -->
  <script type="text/javascript" src="alertfy/js/alertify.min.js"></script>
  <!-- FIM SCRIPT ALERT -->
  
</body>
</html>