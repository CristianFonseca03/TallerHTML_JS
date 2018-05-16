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
    gif_ok();
  }else {
    aux=cadena+" -----> "+cadenaInvertida+" : No es palindromo";
    gif_NoOk();
  }
  h3.appendChild(document.createTextNode(aux));
  r.innerHTML="";
  r.appendChild(h3);
}
function gif_ok(){
  var r = document.getElementById("gif_p");
  var imagen=document.createElement("img");
  imagen.setAttribute("src", "images/ok.gif");
  imagen.setAttribute("class","img-thumbnail");
  r.innerHTML="";
  r.appendChild(imagen);
}
function gif_NoOk(){
  var r = document.getElementById("gif_p");
  var imagen=document.createElement("img");
  imagen.setAttribute("src", "images/noOk.gif");
  imagen.setAttribute("class","img-thumbnail");
  r.innerHTML="";
  r.appendChild(imagen);
}
