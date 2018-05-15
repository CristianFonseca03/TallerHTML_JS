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
