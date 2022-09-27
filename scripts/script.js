var data = new Date();
var horario = new Date()
var dataAtual = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
document.getElementById("p1").innerHTML = dataAtual;

function setarHorario() {
   var horario = new Date()
   var horarioAtual = horario.getHours() + ":" + horario.getMinutes() + ":" + horario.getSeconds();
   document.getElementById("p2").innerHTML = horarioAtual;
}

setInterval(setarHorario, 1000);

var i = 0;
// var A = 0;
		var tag = document.getElementById("wellcome");
		var html = document.getElementById("wellcome").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 170;

		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("wellcome").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}

typeWriter();
