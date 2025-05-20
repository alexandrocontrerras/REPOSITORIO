function  calcular(){




	var n1 = document.getElementById("nhoras").value;

	var n2=document.getElementsByTagName("select")[0].value;

	var n;

	if (n2 == "chico") {
		n = 20;
	}
	if (n2 == "camioneta"){

		n=30;
	}
	if(n2== "camion"){
		n=40;

	}

	document.getElementById("resultadom").style.display = "block";

	var res = parseInt(n1) * n;
	document.getElementById("resultado").innerHTML = "$" +res+" Pesos";

}

function ocultar() {
	document.getElementById("resultadom").style.display = "none";
}