function inicializarGestores()
{
	var cont = 0;
	var imagenes = ['sesamo', 'melon', 'manzanas', 'mandarinas', 'limon', 'fresas'];
	var imagen = document.getElementById("imagen");

	function cambiarImagen() {
		imagen.style.backgroundImage = "url(images/"+imagenes[cont]+".jpg)"
	}

	var reloj = setInterval(() =>{
		cambiarImagen();
		if (cont === 5){
			cont = 0;
		}else{
			cont++;
		}
	}, 5000);


	var imagen = document.getElementById("imagen");
	imagen.onclick = function()
	{
		cont = 0;
		cambiarImagen();
	}

	var usuario = document.getElementById("usuario");
	usuario.value = 'tu@email';

	usuario.onblur = function(){
		if (usuario.value == ''){
			usuario.value = "tu@email";
		}
	}

	usuario.onfocus = function(){
		if (usuario.value == 'tu@email'){
			usuario.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change",gestorCombo);

	function gestorCombo(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	} 

	var formulario = document.getElementById('formulario');
	formulario.onsubmit = function(){
		console.log("click en submit");
		return false;
	}

}

window.onload = inicializarGestores;
