// VARIÁVEIS
var cont = 0;
var contPedido = 0;
var numPedidos = 0;

var vl_frete = 0;

var resultado_pedido1 = 0.0;
var resultado_pedido2 = 0.0;
var resultado_pedido3 = 0.0;
var resultado_pedido4 = 0.0;
var resultado_pedido5 = 0.0;
var resultado_pedido6 = 0.0;
var resultado_pedido7 = 0.0;
var resultado_pedido8 = 0.0;
var resultado_pedido9 = 0.0;
var resultado_pedido10 = 0.0;
var resultado_pedido11 = 0.0;
var resultado_pedido12 = 0.0;

var totalMeuPedido = resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12;

/*var resultado_pedido1 = document.getElementById('result_Pedido1').value;
alert(resultado_pedido1);
var resultado_pedido2 = document.getElementById('result_Pedido2').value;
alert(resultado_pedido2);
var resultado_pedido3 = document.getElementById('result_Pedido3').value;
var resultado_pedido4 = document.getElementById('result_Pedido4').value;
var resultado_pedido5 = document.getElementById('result_Pedido5').value;
var resultado_pedido6 = document.getElementById('result_Pedido6').value;
var resultado_pedido7 = document.getElementById('result_Pedido7').value;
var resultado_pedido8 = document.getElementById('result_Pedido8').value;
var resultado_pedido9 = document.getElementById('result_Pedido9').value;
var resultado_pedido10 = document.getElementById('result_Pedido10').value;
var resultado_pedido11 = document.getElementById('result_Pedido11').value;
var resultado_pedido12 = document.getElementById('result_Pedido12').value;

document.getElementById('result_Pedido1').value = 6.50.toFixed(2);
document.getElementById('result_Pedido2').value = 7.99.toFixed(2);
document.getElementById('result_Pedido3').value = 11.99.toFixed(2);
document.getElementById('result_Pedido4').value = 8.59.toFixed(2);
document.getElementById('result_Pedido5').value = 12.99.toFixed(2)
document.getElementById('result_Pedido6').value = 16.99.toFixed(2);
document.getElementById('result_Pedido7').value = 20.99.toFixed(2);
document.getElementById('result_Pedido8').value = 5.99.toFixed(2);
document.getElementById('result_Pedido9').value = 6.99.toFixed(2);
document.getElementById('result_Pedido10').value = 6.99.toFixed(2);
document.getElementById('result_Pedido11').value = 6.99.toFixed(2);
document.getElementById('result_Pedido12').value = 6.99.toFixed(2);
*/

var qtPedido1 = 0;
var qtPedido2 = 0;
var qtPedido3 = 0;
var qtPedido4 = 0;
var qtPedido5 = 0;
var qtPedido6 = 0;
var qtPedido7 = 0;
var qtPedido8 = 0;
var qtPedido9 = 0;
var qtPedido10 = 0;
var qtPedido11 = 0;
var qtPedido12 = 0;


var booleanPedido1 = false;
var booleanPedido2 = false;
var booleanPedido3 = false;
var booleanPedido4 = false;
var booleanPedido5 = false;

var nomePedido1 = "Cuddle Júnior";
var nomePedido2 = "Big Cuddle";
var nomePedido3 = "Grand Cuddle";
var nomePedido4 = "Cuddle Cheddar";
var nomePedido5 = "Cuddle Fish";
var nomePedido6 = "Cuddle Chicken";
var nomePedido7 = "Great Cuddle";
var nomePedido8 = "Cuddle Fritas";
var nomePedido9 = "Guaraná Antártica";
var nomePedido10 = "Sukita";
var nomePedido11 = "Pepsi";
var nomePedido12 = "Sprite";

// FIM VARIÁVEIS


// CALCULA PEDIDO 1
function calcula_pedido1() {
	qtPedido1 = document.getElementById('qtPedido1').value;
	switch(qtPedido1) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido1 = 6.50 * qtPedido1;
		document.getElementById('result_Pedido1').value = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
		break;

		case '2':
		resultado_pedido1 = 6.50 * qtPedido1;
		document.getElementById('result_Pedido1').value = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
		break;

		case '3':
		resultado_pedido1 = 6.50 * qtPedido1;
		document.getElementById('result_Pedido1').value = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
		break;

		case '4':
		resultado_pedido1 = 6.50 * qtPedido1;
		document.getElementById('result_Pedido1').value = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
		break;

		case '5':
		resultado_pedido1 = 6.50 * qtPedido1;
		document.getElementById('result_Pedido1').value = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 1

// CALCULA PEDIDO 2
function calcula_pedido2() {
	qtPedido2 = document.getElementById('qtPedido2').value;

	switch(qtPedido2) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido2 = 7.99 * qtPedido2;
		document.getElementById('result_Pedido2').value = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
		break;

		case '2':
		resultado_pedido2 = 7.99 * qtPedido2;
		document.getElementById('result_Pedido2').value = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
		break;

		case '3':
		resultado_pedido2 = 7.99 * qtPedido2;
		document.getElementById('result_Pedido2').value = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
		break;

		case '4':
		resultado_pedido2 = 7.99 * qtPedido2;
		document.getElementById('result_Pedido2').value = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
		break;

		case '5':
		resultado_pedido2 = 7.99 * qtPedido2;
		document.getElementById('result_Pedido2').value = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
		break;
	}
}

// FIM CALCULA PEDIDO 2

// CALCULA PEDIDO 3
function calcula_pedido3() {
	qtPedido3 = document.getElementById('qtPedido3').value;
	switch(qtPedido3) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido3 = 11.99 * qtPedido3;
		document.getElementById('result_Pedido3').value = "R$ " + parseFloat(resultado_pedido3).toFixed(2);
		break;

		case '2':
		resultado_pedido3 = 11.99 * qtPedido3;
		document.getElementById('result_Pedido3').value = "R$ " +  parseFloat(resultado_pedido3).toFixed(2);
		break;

		case '3':
		resultado_pedido3 = 11.99 * qtPedido3;
		document.getElementById('result_Pedido3').value = "R$ " +  parseFloat(resultado_pedido3).toFixed(2);
		break;

		case '4':
		resultado_pedido3 = 11.99 * qtPedido3;
		document.getElementById('result_Pedido3').value = "R$ " +  parseFloat(resultado_pedido3).toFixed(2);
		break;

		case '5':
		resultado_pedido3 = 11.99 * qtPedido3;
		document.getElementById('result_Pedido3').value = "R$ " +  parseFloat(resultado_pedido3).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 3

// CALCULA PEDIDO 4
function calcula_pedido4() {
	qtPedido4 = document.getElementById('qtPedido4').value;
	switch(qtPedido4) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido4 = 8.59 * qtPedido4;
		document.getElementById('result_Pedido4').value = "R$ " + parseFloat(resultado_pedido4).toFixed(2);
		break;

		case '2':
		resultado_pedido4 = 8.59 * qtPedido4;
		document.getElementById('result_Pedido4').value = "R$ " +  parseFloat(resultado_pedido4).toFixed(2);
		break;

		case '3':
		resultado_pedido4 = 8.59 * qtPedido4;
		document.getElementById('result_Pedido4').value = "R$ " +  parseFloat(resultado_pedido4).toFixed(2);
		break;

		case '4':
		resultado_pedido4 = 8.59 * qtPedido4;
		document.getElementById('result_Pedido4').value = "R$ " +  parseFloat(resultado_pedido4).toFixed(2);
		break;

		case '5':
		resultado_pedido4 = 8.59 * qtPedido4;
		document.getElementById('result_Pedido4').value = "R$ " +  parseFloat(resultado_pedido4).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 4

// CALCULA PEDIDO 5
function calcula_pedido5() {
	qtPedido5 = document.getElementById('qtPedido5').value;
	switch(qtPedido5) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido5 = 12.99 * qtPedido5;
		document.getElementById('result_Pedido5').value = "R$ " + parseFloat(resultado_pedido5).toFixed(2);
		break;

		case '2':
		resultado_pedido5 = 12.99 * qtPedido5;
		document.getElementById('result_Pedido5').value = "R$ " +  parseFloat(resultado_pedido5).toFixed(2);
		break;

		case '3':
		resultado_pedido5 = 12.99 * qtPedido5;
		document.getElementById('result_Pedido5').value = "R$ " +  parseFloat(resultado_pedido5).toFixed(2);
		break;

		case '4':
		resultado_pedido5 = 12.99 * qtPedido5;
		document.getElementById('result_Pedido5').value = "R$ " +  parseFloat(resultado_pedido5).toFixed(2);
		break;

		case '5':
		resultado_pedido5 = 12.99 * qtPedido5;
		document.getElementById('result_Pedido5').value = "R$ " +  parseFloat(resultado_pedido5).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 5

// CALCULA PEDIDO 6
function calcula_pedido6() {
	qtPedido6 = document.getElementById('qtPedido6').value;
	switch(qtPedido6) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido6 = 16.99 * qtPedido6;
		document.getElementById('result_Pedido6').value = "R$ " + parseFloat(resultado_pedido6).toFixed(2);
		break;

		case '2':
		resultado_pedido6 = 16.99 * qtPedido6;
		document.getElementById('result_Pedido6').value = "R$ " +  parseFloat(resultado_pedido6).toFixed(2);
		break;

		case '3':
		resultado_pedido6 = 16.99 * qtPedido6;
		document.getElementById('result_Pedido6').value = "R$ " +  parseFloat(resultado_pedido6).toFixed(2);
		break;

		case '4':
		resultado_pedido6 = 16.99 * qtPedido6;
		document.getElementById('result_Pedido6').value = "R$ " +  parseFloat(resultado_pedido6).toFixed(2);
		break;

		case '5':
		resultado_pedido6 = 16.99 * qtPedido6;
		document.getElementById('result_Pedido6').value = "R$ " +  parseFloat(resultado_pedido6).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 6

// CALCULA PEDIDO 7
function calcula_pedido7() {
	qtPedido7 = document.getElementById('qtPedido7').value;
	switch(qtPedido7) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido7 = 20.00 * qtPedido7;
		document.getElementById('result_Pedido7').value = "R$ " + parseFloat(resultado_pedido7).toFixed(2);
		break;

		case '2':
		resultado_pedido7 = 20.00 * qtPedido7;
		document.getElementById('result_Pedido7').value = "R$ " +  parseFloat(resultado_pedido7).toFixed(2);
		break;

		case '3':
		resultado_pedido7 = 20.00 * qtPedido7;
		document.getElementById('result_Pedido7').value = "R$ " +  parseFloat(resultado_pedido7).toFixed(2);
		break;

		case '4':
		resultado_pedido7 = 20.00 * qtPedido7;
		document.getElementById('result_Pedido7').value = "R$ " +  parseFloat(resultado_pedido7).toFixed(2);
		break;

		case '5':
		resultado_pedido7 = 20.00 * qtPedido7;
		document.getElementById('result_Pedido7').value = "R$ " +  parseFloat(resultado_pedido7).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 7

// CALCULA PEDIDO 8
function calcula_pedido8() {
	qtPedido8 = document.getElementById('qtPedido8').value;
	switch(qtPedido8) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido8 = 5.99 * qtPedido8;
		document.getElementById('result_Pedido8').value = "R$ " + parseFloat(resultado_pedido8).toFixed(2);
		break;

		case '2':
		resultado_pedido8 = 5.99 * qtPedido8;
		document.getElementById('result_Pedido8').value = "R$ " +  parseFloat(resultado_pedido8).toFixed(2);
		break;

		case '3':
		resultado_pedido8 = 5.99 * qtPedido8;
		document.getElementById('result_Pedido8').value = "R$ " +  parseFloat(resultado_pedido8).toFixed(2);
		break;

		case '4':
		resultado_pedido8 = 5.99 * qtPedido8;
		document.getElementById('result_Pedido8').value = "R$ " +  parseFloat(resultado_pedido8).toFixed(2);
		break;

		case '5':
		resultado_pedido8 = 5.99 * qtPedido8;
		document.getElementById('result_Pedido8').value = "R$ " +  parseFloat(resultado_pedido8).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 8

// CALCULA PEDIDO 9
function calcula_pedido9() {
	qtPedido9 = document.getElementById('qtPedido9').value;
	switch(qtPedido9) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido9 = 6.99 * qtPedido9;
		document.getElementById('result_Pedido9').value = "R$ " + parseFloat(resultado_pedido9).toFixed(2);
		break;

		case '2':
		resultado_pedido9 = 6.99 * qtPedido9;
		document.getElementById('result_Pedido9').value = "R$ " +  parseFloat(resultado_pedido9).toFixed(2);
		break;

		case '3':
		resultado_pedido9 = 6.99 * qtPedido9;
		document.getElementById('result_Pedido9').value = "R$ " +  parseFloat(resultado_pedido9).toFixed(2);
		break;

		case '4':
		resultado_pedido9 = 6.99 * qtPedido9;
		document.getElementById('result_Pedido9').value = "R$ " +  parseFloat(resultado_pedido9).toFixed(2);
		break;

		case '5':
		resultado_pedido9 = 6.99 * qtPedido9;
		document.getElementById('result_Pedido9').value = "R$ " +  parseFloat(resultado_pedido9).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 9

// CALCULA PEDIDO 10
function calcula_pedido10() {
	qtPedido10 = document.getElementById('qtPedido10').value;
	switch(qtPedido10) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido10 = 6.99 * qtPedido10;
		document.getElementById('result_Pedido10').value = "R$ " + parseFloat(resultado_pedido10).toFixed(2);
		break;

		case '2':
		resultado_pedido10 = 6.99 * qtPedido10;
		document.getElementById('result_Pedido10').value = "R$ " +  parseFloat(resultado_pedido10).toFixed(2);
		break;

		case '3':
		resultado_pedido10 = 6.99 * qtPedido10;
		document.getElementById('result_Pedido10').value = "R$ " +  parseFloat(resultado_pedido10).toFixed(2);
		break;

		case '4':
		resultado_pedido10 = 6.99 * qtPedido10;
		document.getElementById('result_Pedido10').value = "R$ " +  parseFloat(resultado_pedido10).toFixed(2);
		break;

		case '5':
		resultado_pedido10 = 6.99 * qtPedido10;
		document.getElementById('result_Pedido10').value = "R$ " +  parseFloat(resultado_pedido10).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 10

// CALCULA PEDIDO 11
function calcula_pedido11() {
	qtPedido11 = document.getElementById('qtPedido11').value;
	switch(qtPedido11) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido11 = 6.99 * qtPedido11;
		document.getElementById('result_Pedido11').value = "R$ " + parseFloat(resultado_pedido11).toFixed(2);
		break;

		case '2':
		resultado_pedido11 = 6.99 * qtPedido11;
		document.getElementById('result_Pedido11').value = "R$ " +  parseFloat(resultado_pedido11).toFixed(2);
		break;

		case '3':
		resultado_pedido11 = 6.99 * qtPedido11;
		document.getElementById('result_Pedido11').value = "R$ " +  parseFloat(resultado_pedido11).toFixed(2);
		break;

		case '4':
		resultado_pedido11 = 6.99 * qtPedido11;
		document.getElementById('result_Pedido11').value = "R$ " +  parseFloat(resultado_pedido11).toFixed(2);
		break;

		case '5':
		resultado_pedido11 = 6.99 * qtPedido11;
		document.getElementById('result_Pedido11').value = "R$ " +  parseFloat(resultado_pedido11).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 11

// CALCULA PEDIDO 12
function calcula_pedido12() {
	qtPedido12 = document.getElementById('qtPedido12').value;
	switch(qtPedido12) {

		case '0':
		alertify.alert('A quantidade mínima é 1!');
		break;

		case '1':
		resultado_pedido12 = 6.99 * qtPedido12;
		document.getElementById('result_Pedido12').value = "R$ " + parseFloat(resultado_pedido12).toFixed(2);
		break;

		case '2':
		resultado_pedido12 = 6.99 * qtPedido12;
		document.getElementById('result_Pedido12').value = "R$ " +  parseFloat(resultado_pedido12).toFixed(2);
		break;

		case '3':
		resultado_pedido12 = 6.99 * qtPedido12;
		document.getElementById('result_Pedido12').value = "R$ " +  parseFloat(resultado_pedido12).toFixed(2);
		break;

		case '4':
		resultado_pedido12 = 6.99 * qtPedido12;
		document.getElementById('result_Pedido12').value = "R$ " +  parseFloat(resultado_pedido12).toFixed(2);
		break;

		case '5':
		resultado_pedido12 = 6.99 * qtPedido12;
		document.getElementById('result_Pedido12').value = "R$ " +  parseFloat(resultado_pedido12).toFixed(2);
		break;
	}
}
// FIM CALCULA PEDIDO 12

// ADICIONA PEDIDO 1
function adiciona_pedido1() {
	switch(qtPedido1) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido1;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido1;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido1').style.backgroundColor = "green";
			document.getElementById('enviar_pedido1').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido1').style.transition = "1s";
			document.getElementById('enviar_pedido1').value = "Adicionado";
			document.getElementById('enviar_pedido1').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = contPedido + 1;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido1;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido1;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido1').style.backgroundColor = "green";
			document.getElementById('enviar_pedido1').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido1').style.transition = "1s";
			document.getElementById('enviar_pedido1').value = "Adicionado";
			document.getElementById('enviar_pedido1').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = contPedido + 1;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido1;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido1;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido1').style.backgroundColor = "green";
			document.getElementById('enviar_pedido1').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido1').style.transition = "1s";
			document.getElementById('enviar_pedido1').value = "Adicionado";
			document.getElementById('enviar_pedido1').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = contPedido + 1;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido1;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido1;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido1').style.backgroundColor = "green";
			document.getElementById('enviar_pedido1').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido1').style.transition = "1s";
			document.getElementById('enviar_pedido1').value = "Adicionado";
			document.getElementById('enviar_pedido1').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = contPedido + 1;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido1;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido1;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido1).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido1').style.backgroundColor = "green";
			document.getElementById('enviar_pedido1').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido1').style.transition = "1s";
			document.getElementById('enviar_pedido1').value = "Adicionado";
			document.getElementById('enviar_pedido1').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 1


// ADICIONA PEDIDO 2
function adiciona_pedido2() {
	switch(qtPedido2) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = contPedido + 1;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido2;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido2;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido2').style.backgroundColor = "green";
			document.getElementById('enviar_pedido2').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido2').style.transition = "1s";
			document.getElementById('enviar_pedido2').value = "Adicionado";
			document.getElementById('enviar_pedido2').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido2;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido2;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido2').style.backgroundColor = "green";
			document.getElementById('enviar_pedido2').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido2').style.transition = "1s";
			document.getElementById('enviar_pedido2').value = "Adicionado";
			document.getElementById('enviar_pedido2').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido2;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido2;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido2').style.backgroundColor = "green";
			document.getElementById('enviar_pedido2').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido2').style.transition = "1s";
			document.getElementById('enviar_pedido2').value = "Adicionado";
			document.getElementById('enviar_pedido2').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido2;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido2;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido2').style.backgroundColor = "green";
			document.getElementById('enviar_pedido2').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido2').style.transition = "1s";
			document.getElementById('enviar_pedido2').value = "Adicionado";
			document.getElementById('enviar_pedido2').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido2;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido2;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido2).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido2').style.backgroundColor = "green";
			document.getElementById('enviar_pedido2').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido2').style.transition = "1s";
			document.getElementById('enviar_pedido2').value = "Adicionado";
			document.getElementById('enviar_pedido2').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 2

// ADICIONA PEDIDO 3
function adiciona_pedido3() {
	switch(qtPedido3) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido3;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido3;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido3).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido3').style.backgroundColor = "green";
			document.getElementById('enviar_pedido3').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido3').style.transition = "1s";
			document.getElementById('enviar_pedido3').value = "Adicionado";
			document.getElementById('enviar_pedido3').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido3;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido3;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido3).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido3').style.backgroundColor = "green";
			document.getElementById('enviar_pedido3').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido3').style.transition = "1s";
			document.getElementById('enviar_pedido3').value = "Adicionado";
			document.getElementById('enviar_pedido3').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido3;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido3;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido3).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido3').style.backgroundColor = "green";
			document.getElementById('enviar_pedido3').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido3').style.transition = "1s";
			document.getElementById('enviar_pedido3').value = "Adicionado";
			document.getElementById('enviar_pedido3').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido3;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido3;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido3).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido3').style.backgroundColor = "green";
			document.getElementById('enviar_pedido3').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido3').style.transition = "1s";
			document.getElementById('enviar_pedido3').value = "Adicionado";
			document.getElementById('enviar_pedido3').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido3;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido3;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido3).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido3').style.backgroundColor = "green";
			document.getElementById('enviar_pedido3').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido3').style.transition = "1s";
			document.getElementById('enviar_pedido3').value = "Adicionado";
			document.getElementById('enviar_pedido3').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 3

// ADICIONA PEDIDO 4
function adiciona_pedido4() {
	switch(qtPedido4) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido4;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido4;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido4).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido4').style.backgroundColor = "green";
			document.getElementById('enviar_pedido4').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido4').style.transition = "1s";
			document.getElementById('enviar_pedido4').value = "Adicionado";
			document.getElementById('enviar_pedido4').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido4;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido4;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido4).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido4').style.backgroundColor = "green";
			document.getElementById('enviar_pedido4').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido4').style.transition = "1s";
			document.getElementById('enviar_pedido4').value = "Adicionado";
			document.getElementById('enviar_pedido4').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido4;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido4;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido4).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido4').style.backgroundColor = "green";
			document.getElementById('enviar_pedido4').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido4').style.transition = "1s";
			document.getElementById('enviar_pedido4').value = "Adicionado";
			document.getElementById('enviar_pedido4').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido4;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido4;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido4).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido4').style.backgroundColor = "green";
			document.getElementById('enviar_pedido4').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido4').style.transition = "1s";
			document.getElementById('enviar_pedido4').value = "Adicionado";
			document.getElementById('enviar_pedido4').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido4;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido4;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido4).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido4').style.backgroundColor = "green";
			document.getElementById('enviar_pedido4').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido4').style.transition = "1s";
			document.getElementById('enviar_pedido4').value = "Adicionado";
			document.getElementById('enviar_pedido4').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 4

// ADICIONA PEDIDO 5
function adiciona_pedido5() {
	switch(qtPedido5) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido5;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido5;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido5).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido5').style.backgroundColor = "green";
			document.getElementById('enviar_pedido5').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido5').style.transition = "1s";
			document.getElementById('enviar_pedido5').value = "Adicionado";
			document.getElementById('enviar_pedido5').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido5;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido5;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido5).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido5').style.backgroundColor = "green";
			document.getElementById('enviar_pedido5').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido5').style.transition = "1s";
			document.getElementById('enviar_pedido5').value = "Adicionado";
			document.getElementById('enviar_pedido5').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido5;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido5;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido5).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido5').style.backgroundColor = "green";
			document.getElementById('enviar_pedido5').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido5').style.transition = "1s";
			document.getElementById('enviar_pedido5').value = "Adicionado";
			document.getElementById('enviar_pedido5').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido5;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido5;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido5).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido5').style.backgroundColor = "green";
			document.getElementById('enviar_pedido5').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido5').style.transition = "1s";
			document.getElementById('enviar_pedido5').value = "Adicionado";
			document.getElementById('enviar_pedido5').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido5;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido5;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido5).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido5').style.backgroundColor = "green";
			document.getElementById('enviar_pedido5').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido5').style.transition = "1s";
			document.getElementById('enviar_pedido5').value = "Adicionado";
			document.getElementById('enviar_pedido5').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 5

// ADICIONA PEDIDO 6
function adiciona_pedido6() {
	switch(qtPedido6) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido6;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido6;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido6).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido6').style.backgroundColor = "green";
			document.getElementById('enviar_pedido6').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido6').style.transition = "1s";
			document.getElementById('enviar_pedido6').value = "Adicionado";
			document.getElementById('enviar_pedido6').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido6;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido6;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido6).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido6').style.backgroundColor = "green";
			document.getElementById('enviar_pedido6').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido6').style.transition = "1s";
			document.getElementById('enviar_pedido6').value = "Adicionado";
			document.getElementById('enviar_pedido6').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido6;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido6;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido6).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido6').style.backgroundColor = "green";
			document.getElementById('enviar_pedido6').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido6').style.transition = "1s";
			document.getElementById('enviar_pedido6').value = "Adicionado";
			document.getElementById('enviar_pedido6').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido6;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido6;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido6).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido6').style.backgroundColor = "green";
			document.getElementById('enviar_pedido6').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido6').style.transition = "1s";
			document.getElementById('enviar_pedido6').value = "Adicionado";
			document.getElementById('enviar_pedido6').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido6;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido6;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido6).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido6').style.backgroundColor = "green";
			document.getElementById('enviar_pedido6').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido6').style.transition = "1s";
			document.getElementById('enviar_pedido6').value = "Adicionado";
			document.getElementById('enviar_pedido6').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 6

// ADICIONA PEDIDO 7
function adiciona_pedido7() {
	switch(qtPedido7) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido7;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido7;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido7).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido7').style.backgroundColor = "green";
			document.getElementById('enviar_pedido7').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido7').style.transition = "1s";
			document.getElementById('enviar_pedido7').value = "Adicionado";
			document.getElementById('enviar_pedido7').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido7;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido7;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido7).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido7').style.backgroundColor = "green";
			document.getElementById('enviar_pedido7').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido7').style.transition = "1s";
			document.getElementById('enviar_pedido7').value = "Adicionado";
			document.getElementById('enviar_pedido7').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido7;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido7;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido7).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido7').style.backgroundColor = "green";
			document.getElementById('enviar_pedido7').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido7').style.transition = "1s";
			document.getElementById('enviar_pedido7').value = "Adicionado";
			document.getElementById('enviar_pedido7').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido7;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido7;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido7).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido7').style.backgroundColor = "green";
			document.getElementById('enviar_pedido7').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido7').style.transition = "1s";
			document.getElementById('enviar_pedido7').value = "Adicionado";
			document.getElementById('enviar_pedido7').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido7;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido7;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido7).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido7').style.backgroundColor = "green";
			document.getElementById('enviar_pedido7').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido7').style.transition = "1s";
			document.getElementById('enviar_pedido7').value = "Adicionado";
			document.getElementById('enviar_pedido7').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 7

// ADICIONA PEDIDO 8
function adiciona_pedido8() {
	switch(qtPedido8) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;
	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido8;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido8;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido8).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido8').style.backgroundColor = "green";
			document.getElementById('enviar_pedido8').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido8').style.transition = "1s";
			document.getElementById('enviar_pedido8').value = "Adicionado";
			document.getElementById('enviar_pedido8').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido8;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido8;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido8).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido8').style.backgroundColor = "green";
			document.getElementById('enviar_pedido8').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido8').style.transition = "1s";
			document.getElementById('enviar_pedido8').value = "Adicionado";
			document.getElementById('enviar_pedido8').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido8;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido8;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido8).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido8').style.backgroundColor = "green";
			document.getElementById('enviar_pedido8').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido8').style.transition = "1s";
			document.getElementById('enviar_pedido8').value = "Adicionado";
			document.getElementById('enviar_pedido8').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido8;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido8;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido8).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido8').style.backgroundColor = "green";
			document.getElementById('enviar_pedido8').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido8').style.transition = "1s";
			document.getElementById('enviar_pedido8').value = "Adicionado";
			document.getElementById('enviar_pedido8').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido8;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido8;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido8).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido8').style.backgroundColor = "green";
			document.getElementById('enviar_pedido8').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido8').style.transition = "1s";
			document.getElementById('enviar_pedido8').value = "Adicionado";
			document.getElementById('enviar_pedido8').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 8

// ADICIONA PEDIDO 9
function adiciona_pedido9() {
	switch(qtPedido9) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido9;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido9;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido9).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido9').style.backgroundColor = "green";
			document.getElementById('enviar_pedido9').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido9').style.transition = "1s";
			document.getElementById('enviar_pedido9').value = "Adicionado";
			document.getElementById('enviar_pedido9').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido9;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido9;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido9).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido9').style.backgroundColor = "green";
			document.getElementById('enviar_pedido9').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido9').style.transition = "1s";
			document.getElementById('enviar_pedido9').value = "Adicionado";
			document.getElementById('enviar_pedido9').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido9;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido9;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido9).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido9').style.backgroundColor = "green";
			document.getElementById('enviar_pedido9').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido9').style.transition = "1s";
			document.getElementById('enviar_pedido9').value = "Adicionado";
			document.getElementById('enviar_pedido9').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido9;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido9;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido9).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido9').style.backgroundColor = "green";
			document.getElementById('enviar_pedido9').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido9').style.transition = "1s";
			document.getElementById('enviar_pedido9').value = "Adicionado";
			document.getElementById('enviar_pedido9').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido9;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido9;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido9).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido9').style.backgroundColor = "green";
			document.getElementById('enviar_pedido9').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido9').style.transition = "1s";
			document.getElementById('enviar_pedido9').value = "Adicionado";
			document.getElementById('enviar_pedido9').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 9

// ADICIONA PEDIDO 10
function adiciona_pedido10() {
	switch(qtPedido10) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido10;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido10;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido10).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido10').style.backgroundColor = "green";
			document.getElementById('enviar_pedido10').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido10').style.transition = "1s";
			document.getElementById('enviar_pedido10').value = "Adicionado";
			document.getElementById('enviar_pedido10').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido10;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido10;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido10).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido10').style.backgroundColor = "green";
			document.getElementById('enviar_pedido10').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido10').style.transition = "1s";
			document.getElementById('enviar_pedido10').value = "Adicionado";
			document.getElementById('enviar_pedido10').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido10;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido10;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido10).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido10').style.backgroundColor = "green";
			document.getElementById('enviar_pedido10').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido10').style.transition = "1s";
			document.getElementById('enviar_pedido10').value = "Adicionado";
			document.getElementById('enviar_pedido10').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido10;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido10;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido10).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido10').style.backgroundColor = "green";
			document.getElementById('enviar_pedido10').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido10').style.transition = "1s";
			document.getElementById('enviar_pedido10').value = "Adicionado";
			document.getElementById('enviar_pedido10').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido10;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido10;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido10).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido10').style.backgroundColor = "green";
			document.getElementById('enviar_pedido10').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido10').style.transition = "1s";
			document.getElementById('enviar_pedido10').value = "Adicionado";
			document.getElementById('enviar_pedido10').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 10

// ADICIONA PEDIDO 11
function adiciona_pedido11() {
	switch(qtPedido11) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido11;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido11;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido11).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido11').style.backgroundColor = "green";
			document.getElementById('enviar_pedido11').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido11').style.transition = "1s";
			document.getElementById('enviar_pedido11').value = "Adicionado";
			document.getElementById('enviar_pedido11').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido11;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido11;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido11).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido11').style.backgroundColor = "green";
			document.getElementById('enviar_pedido11').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido11').style.transition = "1s";
			document.getElementById('enviar_pedido11').value = "Adicionado";
			document.getElementById('enviar_pedido11').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido11;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido11;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido11).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido11').style.backgroundColor = "green";
			document.getElementById('enviar_pedido11').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido11').style.transition = "1s";
			document.getElementById('enviar_pedido11').value = "Adicionado";
			document.getElementById('enviar_pedido11').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido11;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido11;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido11).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido11').style.backgroundColor = "green";
			document.getElementById('enviar_pedido11').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido11').style.transition = "1s";
			document.getElementById('enviar_pedido11').value = "Adicionado";
			document.getElementById('enviar_pedido11').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido11;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido11;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido11).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido11').style.backgroundColor = "green";
			document.getElementById('enviar_pedido11').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido11').style.transition = "1s";
			document.getElementById('enviar_pedido11').value = "Adicionado";
			document.getElementById('enviar_pedido11').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 11

// ADICIONA PEDIDO 12
function adiciona_pedido12() {
	switch(qtPedido12) {

	case 0:
		alertify.alert('A quantidade mínima é 1!');
		return false;
	break;
		
	}

	if (cont > 4) {
		alertify.alert("Limite de pedidos exedido! Você só poderá realizar 5 pedidos a cada 60 minutos");
		return false;
	}

	cont = cont + 1;

	switch(cont) {

		case cont = 0:
		cont = cont + cont;
		alertify.alert('A quantidade mínima deste pedido é 1!');
		break;

		case cont = 1:

		if (booleanPedido1 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('titulo_pedido1').innerHTML = nomePedido12;
			document.getElementById('quantidadePedido1').innerHTML = "Quantidade: " + qtPedido12;
			document.getElementById('valorPedido1').innerHTML = "R$ " + parseFloat(resultado_pedido12).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "330px";

			document.getElementById('titulo_pedido1').style.display = "block";
			document.getElementById('quantidadePedido1').style.display = "block";
			document.getElementById('valorPedido1').style.display = "block";
			document.getElementById('hrPedido1').style.display = "block";

			document.getElementById('enviar_pedido12').style.backgroundColor = "green";
			document.getElementById('enviar_pedido12').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido12').style.transition = "1s";
			document.getElementById('enviar_pedido12').value = "Adicionado";
			document.getElementById('enviar_pedido12').disabled = true;
			booleanPedido1 = true;
		}
		break;

		case cont = 2:

		if (booleanPedido2 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido2').innerHTML = nomePedido12;
			document.getElementById('quantidadePedido2').innerHTML = "Quantidade: " + qtPedido12;
			document.getElementById('valorPedido2').innerHTML = "R$ " + parseFloat(resultado_pedido12).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "595px";

			document.getElementById('titulo_pedido2').style.display = "block";
			document.getElementById('quantidadePedido2').style.display = "block";
			document.getElementById('valorPedido2').style.display = "block";
			document.getElementById('hrPedido2').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido12').style.backgroundColor = "green";
			document.getElementById('enviar_pedido12').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido12').style.transition = "1s";
			document.getElementById('enviar_pedido12').value = "Adicionado";
			document.getElementById('enviar_pedido12').disabled = true;
			booleanPedido2 = true;
		}
		break;

		case cont = 3:

		if (booleanPedido3 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido3').innerHTML = nomePedido12;
			document.getElementById('quantidadePedido3').innerHTML = "Quantidade: " + qtPedido12;
			document.getElementById('valorPedido3').innerHTML = "R$ " + parseFloat(resultado_pedido12).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "710px";

			document.getElementById('titulo_pedido3').style.display = "block";
			document.getElementById('quantidadePedido3').style.display = "block";
			document.getElementById('valorPedido3').style.display = "block";
			document.getElementById('hrPedido3').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido12').style.backgroundColor = "green";
			document.getElementById('enviar_pedido12').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido12').style.transition = "1s";
			document.getElementById('enviar_pedido12').value = "Adicionado";
			document.getElementById('enviar_pedido12').disabled = true;
			booleanPedido3 = true;
		}
		break;

		case cont = 4:
		if (booleanPedido4 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido4').innerHTML = nomePedido12;
			document.getElementById('quantidadePedido4').innerHTML = "Quantidade: " + qtPedido12;
			document.getElementById('valorPedido4').innerHTML = "R$ " + parseFloat(resultado_pedido12).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "830px";

			document.getElementById('titulo_pedido4').style.display = "block";
			document.getElementById('quantidadePedido4').style.display = "block";
			document.getElementById('valorPedido4').style.display = "block";
			document.getElementById('hrPedido4').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido12').style.backgroundColor = "green";
			document.getElementById('enviar_pedido12').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido12').style.transition = "1s";
			document.getElementById('enviar_pedido12').value = "Adicionado";
			document.getElementById('enviar_pedido12').disabled = true;
			booleanPedido4 = true;
		}
		break;

		case cont = 5:

		if (booleanPedido5 == false) {
			document.getElementById('num_pedidos').innerHTML = cont;
			document.getElementById('p_sub_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12 + vl_frete).toFixed(2);
			document.getElementById('titulo_pedido5').innerHTML = nomePedido12;
			document.getElementById('quantidadePedido5').innerHTML = "Quantidade: " + qtPedido12;
			document.getElementById('valorPedido5').innerHTML = "R$ " + parseFloat(resultado_pedido12).toFixed(2);
			document.getElementById('vl_total').innerHTML = "R$ " + parseFloat(resultado_pedido1 + resultado_pedido2 + resultado_pedido3 + resultado_pedido4 + resultado_pedido5 + resultado_pedido6 + resultado_pedido7 + resultado_pedido8 + resultado_pedido9 + resultado_pedido10 + resultado_pedido11 + resultado_pedido12).toFixed(2);
			
			document.getElementById('box_meuPedido').style.height = "945px";

			document.getElementById('titulo_pedido5').style.display = "block";
			document.getElementById('quantidadePedido5').style.display = "block";
			document.getElementById('valorPedido5').style.display = "block";
			document.getElementById('hrPedido5').style.display = "block";

			document.getElementById('sub_total').style.display = "block";
			document.getElementById('p_sub_total').style.display = "block";
			document.getElementById('hr_sub_total').style.display = "block";

			document.getElementById('icon_frete').style.display = "block";
			document.getElementById('p_frete').style.display = "block";
			document.getElementById('hr_frete').style.display = "block";

			document.getElementById('enviar_pedido12').style.backgroundColor = "green";
			document.getElementById('enviar_pedido12').style.cursor = "not-allowed";
			document.getElementById('enviar_pedido12').style.transition = "1s";
			document.getElementById('enviar_pedido12').value = "Adicionado";
			document.getElementById('enviar_pedido12').disabled = true;
			booleanPedido5 = true;
		}
		break;
	}
}
// FIM ADICIONA PEDIDO 12

// FORMULÁRIO HOME
	function checagemFormHome(assunto, nome, telefone, email, mensagem){
		if((assunto==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((nome==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((telefone==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((email==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((mensagem==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else
		{	
			alertify.alert('Mensagem enviada com sucesso!');

		}
	}
// FIM FORMULÁRIO HOME


//FORMULÁRIO FAZER PEDIDO
	function checagemFormFP(cep, rua, cidade, numero, nome, telefone){
		if((cep==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos efetuar corretamente a entrega.');
		}

		else if((rua==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos efetuar corretamente a entrega.');
		}

		else if((cidade==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos efetuar corretamente a entrega.');
		}

		else if((numero==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos efetuar corretamente a entrega.');
		}

		else if((nome==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos efetuar corretamente a entrega.');
		}

		else if((telefone==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos efetuar corretamente a entrega.');
		}

		else
		{	
			alertify.alert('Pedido enviado com sucesso!');
		}
	}
//FIM FORMULÁRIO FAZER PEDIDO


// FORMULÁRIO CONTATO
	function checagemFormContato(assunto, nome, telefone, email, mensagem){
		if((assunto==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((nome==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((telefone==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((email==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}

		else if((mensagem==""))
		{
			alertify.alert('Campo vazio! Por favor, preencha todos os campos do formulário para que possamos responder construtivamente sua mensagem.');
		}


		else
		{	
			alertify.alert('Mensagem enviada com sucesso!');
			location.href="contato.html";
		}
	}
// FIM FORMULÁRIO HOME


function zeraPedido() {

	alertify.alert('Pedido zerado com sucesso!');

	// ZERANDO VARIÁVEIS
	var cont = 0;
	var contPedido = 0;
	var numPedidos = 0;

	var vl_frete = 0;

	var resultado_pedido1 = 0.0;
	var resultado_pedido2 = 0.0;
	var resultado_pedido3 = 0.0;
	var resultado_pedido4 = 0.0;
	var resultado_pedido5 = 0.0;
	var resultado_pedido6 = 0.0;
	var resultado_pedido7 = 0.0;
	var resultado_pedido8 = 0.0;
	var resultado_pedido9 = 0.0;
	var resultado_pedido10 = 0.0;
	var resultado_pedido11 = 0.0;
	var resultado_pedido12 = 0.0;

	var totalMeuPedido = 0;
	var qtPedido1 = 0;
	var qtPedido2 = 0;
	var qtPedido3 = 0;
	var qtPedido4 = 0;
	var qtPedido5 = 0;
	var qtPedido6 = 0;
	var qtPedido7 = 0;
	var qtPedido8 = 0;
	var qtPedido9 = 0;
	var qtPedido10 = 0;
	var qtPedido11 = 0;
	var qtPedido12 = 0;


	var booleanPedido1 = false;
	var booleanPedido2 = false;
	var booleanPedido3 = false;
	var booleanPedido4 = false;
	var booleanPedido5 = false;

	document.getElementById('num_pedidos').innerHTML = 0;
	document.getElementById('p_sub_total').innerHTML = 0;

	document.getElementById('titulo_pedido1').innerHTML = 0;
	document.getElementById('quantidadePedido1').innerHTML = 0;
	document.getElementById('valorPedido1').innerHTML = 0;

	document.getElementById('titulo_pedido2').innerHTML = 0;
	document.getElementById('quantidadePedido2').innerHTML = 0;
	document.getElementById('valorPedido2').innerHTML = 0;

	document.getElementById('titulo_pedido3').innerHTML = 0;
	document.getElementById('quantidadePedido3').innerHTML = 0;
	document.getElementById('valorPedido3').innerHTML = 0;

	document.getElementById('titulo_pedido4').innerHTML = 0;
	document.getElementById('quantidadePedido4').innerHTML = 0;
	document.getElementById('valorPedido4').innerHTML = 0;

	document.getElementById('titulo_pedido5').innerHTML = 0;
	document.getElementById('quantidadePedido5').innerHTML = 0;
	document.getElementById('valorPedido5').innerHTML = 0;

	document.getElementById('vl_total').innerHTML = "R$ 00,00";

	document.getElementById('box_meuPedido').style.height = "240px";

	document.getElementById('titulo_pedido1').style.display = "none";
	document.getElementById('quantidadePedido1').style.display = "none";
	document.getElementById('valorPedido1').style.display = "none";
	document.getElementById('hrPedido1').style.display = "none";

	document.getElementById('titulo_pedido2').style.display = "none";
	document.getElementById('quantidadePedido2').style.display = "none";
	document.getElementById('valorPedido2').style.display = "none";
	document.getElementById('hrPedido2').style.display = "none";

	document.getElementById('titulo_pedido3').style.display = "none";
	document.getElementById('quantidadePedido3').style.display = "none";
	document.getElementById('valorPedido3').style.display = "none";
	document.getElementById('hrPedido3').style.display = "none";

	document.getElementById('titulo_pedido4').style.display = "none";
	document.getElementById('quantidadePedido4').style.display = "none";
	document.getElementById('valorPedido4').style.display = "none";
	document.getElementById('hrPedido4').style.display = "none";

	document.getElementById('titulo_pedido5').style.display = "none";
	document.getElementById('quantidadePedido5').style.display = "none";
	document.getElementById('valorPedido5').style.display = "none";
	document.getElementById('hrPedido5').style.display = "none";

	document.getElementById('sub_total').style.display = "none";
	document.getElementById('p_sub_total').style.display = "none";
	document.getElementById('hr_sub_total').style.display = "none";

	document.getElementById('icon_frete').style.display = "none";
	document.getElementById('p_frete').style.display = "none";
	document.getElementById('hr_frete').style.display = "none";

}