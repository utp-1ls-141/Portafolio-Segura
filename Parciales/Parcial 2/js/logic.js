$(document).ready(function() {      
  $('.carousel').carousel('pause');
});

function validaNumericos(event) {
  if(event.charCode >= 48 && event.charCode <= 57){
    return true;
   }
   return false;        
}

var problemaActual = 1;

function mostrar(n){
    problemaActual = n;
    $('#resultado').html('');

    if(problemaActual === 0){
        var cad1 = (document.getElementById("cadena1").value).toLowerCase();
        var cad2 = (document.getElementById("cadena2").value).toLowerCase();
        var cad3 = (document.getElementById("cadena3").value).toLowerCase();

        
        if (cad1.length === 0 || cad2.length === 0 || cad3.length === 0){ 
            $("#error").html("Llena todos los campos.");
            return;
        }

        var arr1 = cad1.split("");
        var arr2 = cad2.split("");
        var arr3 = cad3.split("");
        var len = cad1.length;

        if (len !== cad2.length && len !== cad3.length){ 
            $("#error").html("No puede ser una cadena isomorfica porque no son del mismo tamaño");
            return;
        }
    
        if(esIsomorfa(arr1, arr2) && esIsomorfa(arr2, arr3) && esIsomorfa(arr1, arr3)){
            $('#modalResultado').modal(focus);
            $("#info").html("Las primera cadena fue: " + $("#cadena1").val() + " y la segunda: " + $("#cadena2").val() + " y la tercera: " + $("#cadena3").val());
            $("#resultado").html("Las cadenas son isomorficas");
        }else{
            $('#modalResultado').modal(focus);
            $("#resultado").html("Las cadenas no son isomorficas");
        }
    }else if(problemaActual === 1){
        var num = $('#cadena1_prob2').val();  
        if(num.length === 0){
            $('#info').html('Resultado');
            $('#resultado').html('Escribe un número');
            $('#modalResultado').modal(focus);
            return;
        }
        generarMatriz(num);
    }else if(problemaActual === 2){
        var num = $('#cadena1_prob3').val();
        if(num.toString().length === 0){
            $('#info').html('Resultado');
            $('#resultado').html('Escribe un número');
            $('#modalResultado').modal(focus);
            return;
        }
        if(esPalindromo(num)){
            $('#resultado').html('Es palindromo');
        }else{
            $('#resultado').html('No es palindromo');
        }
        $('#info').html('Resultado');
        $('#modalResultado').modal(focus);
    }else{
        $('#info').html('Resultado');
        $('#resultado').html(primosRotar($('#cadena2_prob2').val()));
        $('#modalResultado').modal(focus);
    }
}

function esIsomorfa(arr1, arr2){
    var temp = {};
    var x, name, y;

    document.getElementById("error").innerHTML = ""; 
        for (x = 0; x < arr1.length; x++){
            name = arr1[x];
            y = Object.keys(temp);
            if (y.indexOf(name)> -1){
            if (temp[name] == arr2[x]){
                    temp[name] = arr2[x];
                }
                else{
                    return false;
                }
            }else{
            y = Object.values(temp);
            if (y.indexOf(arr2[x])> -1){
                if (temp[name] == arr2[x]){
                    temp[name] = arr2[x];
                }else {
                    return false;
                }
            }
            temp[name] = arr2[x];
        }
    }
    return true;
}

function generarMatriz(n){
    var str = '';
    var mac = 0;
    
    var tb = document.createElement('table');
    tb.className = 'table';

    var tr = document.createElement('tr');
    tb.appendChild(tr);

    for(var y = 0; y < n; y++){
        var pmul = [], sprim = [];
        for(var x = 0; x < n; x++){
            mac++;
            if(x === y && mac !== Math.round((n*n)/2)){
                var mulf = true;
                var mulr;
                do{
                    mulr = Math.floor((Math.random() * (23*n)) + 1);
                    if(!pmul.includes(mulr)){
                        if(mulr%23 === 0 && mulr !== 23){
                            pmul.push(mulr);
                            mulf = false;
                        }
                    }
                }while(mulf);
                var td = document.createElement('td');
                td.innerHTML = mulr;
                tr.appendChild(td);
                //str += mulr+' ';
            }else if(mac === Math.round((n*n)/2)){
                //str += ' 23 ';
                var td = document.createElement('td');
                td.innerHTML = '23';
                tr.appendChild(td);
            }else{
                if(((n-1)-y) === x){
                    var prif = false;
                    var primr;
                    do{
                        primr = Math.floor((Math.random() * (23*n)) + 1);
                        if(!sprim.includes(primr)){
                            if(23%primr !== 0 && primr !== 23){
                                sprim.push(primr);
                                prif = true;
                            }
                        }
                    }while(!prif);
                    //str += primr+' ';
                    var td = document.createElement('td');
                    td.innerHTML = primr;
                    tr.appendChild(td);
                }else{
                    //str += '- ';
                    var td = document.createElement('td');
                    td.innerHTML = '-';
                    tr.appendChild(td);
                }
            }
        }
        //str += '<br>';
        tr = document.createElement('tr');
        tb.appendChild(tr);
    }

    $('#info').html('Resultado');
    $('#resultado').append(tb);
    $('#modalResultado').modal(focus);
}

function esPalindromo(s1){
    var s2 = '';
    s1 = parseInt(s1, 10).toString(2);
    for(var i = s1.length - 1; i >= 0; i--){
        s2 += s1.charAt(i);
    }
    
    if(s1 === s2){
        return true;
    }
    return false;
}

function primosRotar(n){
    var s = n.toString();
    if(s.length === 0){
        return 'Escribir un número.';
    }
    var arrs = s.split('');

    function arrToString(arr){
        var str = '';
        for(var i = 0; i < arr.length; i++){
            str += arr[i];
        }
        return str;
    }

    function esPrimo(num) {
        for(var i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return num !== 1;
    }

    function primoARespuesta(b){
        if(b){
            return 'es primo.';
        }
        return 'no es primo.';
    }

    var res = '';
    var an = '';
    do{
        var es = arrs.shift();
        arrs.push(es)
        an = arrToString(arrs);
        res += an+' '+primoARespuesta(esPrimo(parseInt(an)))+'<br>';
    }while(an !== s);

    return res;

}