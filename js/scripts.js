function sumar(){
  var outPut=0;
  var aux="";
  var r = document.getElementById("result");
  var h3 = document.createElement("h3");
  var nOne = parseInt(document.getElementById("nOne").value);
  var nTwo = parseInt(document.getElementById("nTwo").value);
  aux=document.getElementById("nOne").value+" + "+document.getElementById("nTwo").value+" = "+(nOne+nTwo);
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function restar(){
  var outPut=0;
  var aux="";
  var r = document.getElementById("result");
  var h3 = document.createElement("h3");
  var nOne = parseInt(document.getElementById("nOne").value);
  var nTwo = parseInt(document.getElementById("nTwo").value);
  outPut=nOne>nTwo? nOne-nTwo:nTwo-nOne;
  if(nOne>nTwo){
    aux=document.getElementById("nOne").value+" - "+document.getElementById("nTwo").value+" = "+outPut;
  }else{
    aux=document.getElementById("nTwo").value+" - "+document.getElementById("nOne").value+" = "+outPut;
  }
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function multiplicar(){
  var outPut=0;
  var aux="";
  var r = document.getElementById("result");
  var h3 = document.createElement("h3");
  var nOne = parseInt(document.getElementById("nOne").value);
  var nTwo = parseInt(document.getElementById("nTwo").value);
  aux=document.getElementById("nOne").value+" * "+document.getElementById("nTwo").value+" = "+(nOne*nTwo);
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function dividir(){
  var outPut=0;
  var aux="";
  var r = document.getElementById("result");
  var h3 = document.createElement("h3");
  var nOne = parseInt(document.getElementById("nOne").value);
  var nTwo = parseInt(document.getElementById("nTwo").value);
  outPut=nOne>nTwo? nOne/nTwo:nTwo/nOne;
  if(nOne>nTwo){
    aux=document.getElementById("nOne").value+" /"+document.getElementById("nTwo").value+" = "+outPut;
  }else{
    aux=document.getElementById("nTwo").value+" / "+document.getElementById("nOne").value+" = "+outPut;
  }
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function validateNumber(e){
  var code = window.event ? e.which : e.keyCode;
  if (code >= 48 && code <=57) {
    return true;
  }
  return false;
}
function validateNoSpace(e){
  var code = window.event ? e.which : e.keyCode;
  if ((code >= 48 && code <=57)||(code==32)) {
    return false;
  }
  return true;
}
function palindroma(){
  var aux="";
  var r = document.getElementById("result_p");
  var h3 = document.createElement("h3");
  var cadena=document.getElementById("word").value;
  var x = cadena.length;
  var cadenaInvertida = "";
  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  cadena=cadena.toUpperCase();
  cadenaInvertida=cadenaInvertida.toUpperCase();
  if(cadenaInvertida==cadena){
    aux=cadena+" -----> "+cadenaInvertida+" : Es palindromo";
    gif_ok("gif_p");
  }else {
    aux=cadena+" -----> "+cadenaInvertida+" : No es palindromo";
    gif_NoOk("gif_p");
  }
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function gif_ok(id){
  var r = document.getElementById(""+id+"");
  var imagen=document.createElement("img");
  imagen.setAttribute("src", "images/ok.gif");
  imagen.setAttribute("class","img-thumbnail");
  r.innerHTML="";
  r.appendChild(imagen);
}
function gif_NoOk(id){
  var r = document.getElementById(""+id+"");
  var imagen=document.createElement("img");
  imagen.setAttribute("src", "images/noOk.gif");
  imagen.setAttribute("class","img-thumbnail");
  r.innerHTML="";
  r.appendChild(imagen);
}
function factorial(){
  var fact="";
  var nOne = parseInt(document.getElementById("number").value);
  var nOne_r=parseInt(document.getElementById("number").value);
  var r = document.getElementById("result_f");
  var h3 = document.createElement("h3");
  nOne=Math.abs(nOne);
  if(nOne==0){
    fact="El factorial de 0 es 1";
  }else{
    var total = 1;
  	for (i=1; i<=nOne; i++) {
  		total = total * i;
  	}
    fact="El factorial de "+nOne+" es "+total;
    if(nOne_r<0){
      fact="El factorial de -"+nOne+" es -"+total;
    }
  }
  h3.appendChild(document.createTextNode(fact));
  r.innerHTML="";
  r.appendChild(h3);
}
function capicua(){
  var r = document.getElementById("result_c");
  var h3 = document.createElement("h3");
  var numero=parseInt(document.getElementById("number_c").value);
  var invertido = 0;
  var resto = numero;
  var respuesta="";
  do {
    invertido = invertido * 10 + (resto % 10);
    resto = Math.floor(resto / 10);
  } while ( resto > 0 );
  if (numero<10) {
    respuesta="Ingrese un numero positivo y mayor a 10";
  }else{
    if (numero==invertido) {
      respuesta=numero+" ---> "+invertido+" : es un numero Capicua";
      gif_ok("gif_c");
    }else {
      respuesta=numero+" ---> "+invertido+" : no es un numero Capicua";
      gif_NoOk("gif_c");
    }
  }
  h3.appendChild(document.createTextNode(respuesta));
  r.innerHTML="";
  r.appendChild(h3);
}
