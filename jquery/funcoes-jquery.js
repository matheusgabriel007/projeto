$(document).ready(function(){
	//alert('Jquery Funcionando');

	//SCRIPT DE ANCORAGEM (ANIMAÇÃO)
	$(".scroll").click(function(event){        
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	$(".zerarPedido").click(function(){
	    $(".zerarPedido").addClass("scroll");
	   	window.location.href = 'fazer-pedido.html';
	});
	
	//SCRIPT PARA FIXAR O BOX MEU PEDIDO
	//$(window).scroll(function(){
	//	if($(this).scrollTop() > $('.boxPedido1').offset().top){
	//		$('.meuPedido').addClass('meuPedidoFixed');
	//	}
	//	else {

	//		$('.meuPedido').removeClass('meuPedidoFixed');
	//	}

	//});
});

