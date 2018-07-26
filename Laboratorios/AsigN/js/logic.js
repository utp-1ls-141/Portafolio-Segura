
      $('#modal_result').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
    
      $('#modal_result2').on('shown.bs.modal2', function () {
            $('#myInput2').trigger('focus')
        })

      function analizar(){
          
             var cad1 = document.getElementById('inp_cad1').value;
             var cad2 = document.getElementById('inp_cad2').value;

              if(cad1=== '' || cad2=== '')
              {
                 document.getElementById('resultados').querySelector('.cad1').innerHTML = "Cadena 1: Error";
                 document.getElementById('resultados').querySelector('.cad2').innerHTML = "Cadena 2: Error";
                 document.getElementById('resultados').querySelector('.res').innerHTML = "Introduzca Algun Texto en ambos inputs >:v <br><br>" ;
                 document.getElementById('preview').style.display = 'block';
                 document.getElementById("preview").innerHTML="<img src='./john-travolta-pulp-fiction-tiempos-violentos-gif-transparente-4mb.gif'width='180' height='200'>";
              }
              else
              {  
                document.getElementById('resultados').querySelector('.cad1').innerHTML = "Cadena 1: "+cad1;
                document.getElementById('resultados').querySelector('.cad2').innerHTML = "Cadena 2: "+cad2;
                document.getElementById('resultados').querySelector('.res').innerHTML = "Resultado: "+cad1+cad2;
                document.getElementById('preview').style.display = 'none';
                
              }
           }
           
        function analizar2(){  
            var cadm = document.getElementById('inp_m').value;
             if(cadm === '')
             { 
                document.getElementById('resultados2').querySelector('.res2').innerHTML = "Introduzca un numero >:v <br><br>";
                document.getElementById('preview2').style.display = 'block';
                document.getElementById("preview2").innerHTML="<img src='./tenor.gif'>";
             }
             else
             {  
                var m = [];
                var result = "<table border=1>";
                for(var i = 0; i < cadm; i++) { 
                  result += "<tr>";
                   m[i]=[];
                    for( var j = 0; j < cadm; j++){
                      m[i][j]=8;
                      result += "<td>"+m[i][j]+"</td>";
                    }

                    result += "</tr>";
                 }
                 result += "</table>";
                 return result;
                document.getElementById('preview2').style.display = 'none';
                
             }
           
           }
        

        function validaNumericos(event) {
            if(event.charCode >= 48 && event.charCode <= 57){
              return true;
             }
             return false;        
        }
      

