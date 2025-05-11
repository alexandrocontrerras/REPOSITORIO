

var p=0,s1=0,s2=0,s3=0,s4=0, p=0;
var nombre="", a="", b="", c="", d="";



function  leer(){

//Referencia por pseudoclase
	var nombre=document.forms["formulario"].elements[0].value;

	//Referencia por Name
	var uno=document.getElementsByName("preguno");

	var i,a;
	for(i=0;i<uno.length;i++)
	{
		if(uno[i].checked){ //Verdadero seleccionado
			a=uno[i].value;

			if(a=="V"){
				p++;
				s1=1;
			}

		}
	}


	var dos=document.getElementsByName("pregdos");

	var i,b;
	for(i=0;i<dos.length;i++)
	{
		if(dos[i].checked){ //Verdadero seleccionado
			b=dos[i].value;

			if(b=="V"){
				p++;
				s2=1;
			}
		}
	}


	var tres=document.getElementsByName("pregtres");

	var i,c;
	for(i=0;i<tres.length;i++)
	{
		if(tres[i].checked){ //Verdadero seleccionado
			c=tres[i].value;

			if(c=="V"){
				p++;
				s3=1;
			}

		}
	}



	var cuatro=document.getElementsByName("pregcuatro");

	var i,d;
	for(i=0;i<cuatro.length;i++)
	{
		if(cuatro[i].checked){ //Verdadero seleccionado
			d=cuatro[i].value;

			if(d=="V"){
				p++;
				s4=1;
			}

		}
	}


	document.getElementById("datos").innerHTML=
	"Nombre: "+nombre+
	"\<br>RESPUESTA 1: "+a+
	"\<br>RESPUESTA 2: "+b+
	"\<br>RESPUESTA 3: "+c+
	"\<br>RESPUESTA 4: "+d+
	"\<br>Resultado: "+p;

	
const celdaa = document.getElementById('celdagrafico');
    celdaa.style.display = 'block';

const cajota = document.getElementById('cajapdf');
    cajota.style.display = 'block';


}


function drawChart() {




        var data = google.visualization.arrayToDataTable([
          ['PREGUNTA', 'ACIERTO', 'VALOR'],
          ['Uno', s1, 1],
          ['Dos', s2, 1],
          ['Tres', s3, 1],
          ['Cuatro', s4, 1]
        ]);

        var options = {
          chart: {
            title: 'RESULTADOS DEL CUESTIONARIO',
            subtitle: 'MAYO 2025',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('barchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }


function generar()
		{
			var doc = new jsPDF();
			
			doc.setFontSize(10);
			doc.setTextColor(250, 0, 0);
			doc.text(20, 40, 'HAS OBTENIDO UN TOTAL DE: '+p+' PUNTOS');
			doc.text(20,60, 'GRACIAS POR HABER RESPONDIDO EL CUESTIONARIO');
	

			var string = doc.output('datauristring');
			$('iframe').attr('src', string);
		
		}








   
function mostrar_formulario() {
   const caja = document.getElementById('mitad1');
    caja.style.display = 'none';

    const cajab = document.getElementById('mitad2');
    cajab.style.display = 'block';

	

	
}










// --CAJA DEL PDF
function mostrarCaja() {
  const cajax = document.getElementById("cajapdf");
  cajax.style.display = "block";
}


function mostrarpdf(){

    const abrir = document.getElementById("ifpdf");
  abrir.style.display = "block";

}


