<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .Back{
           background-color: #202142; 
           height: 100vh;
           font-family: Verdana, Geneva, Tahoma, sans-serif;
           color: white;
           text-align: center;
           font-size: 25px;
        }
        .Calculadora{
            position: absolute;
            background-color: black;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            border-radius: 20px;
            padding: 20px;
        }
        .button{
            width: 70px;
            height: 60px;
            padding: 0;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 25px;
            border: #202142;
            margin: 1px;
            cursor: pointer;
            color: aliceblue;
            background-color: #202124;
        }
        .button:hover{
            background-color: rgb(235, 160, 21);
        }
        #Resultado{
            width: 287px;
            background-color: #000000;
            height: 37px;
            margin: 5px;
            font-size: 30px;
            color: white;
            text-align: right;
        }
    </style>
</head>
<body>
    <div class="Back">
    <div class="Calculadora">
        <h2>Calculadora</h2>    
        <p id="Resultado"></p>
        <table>
            <tr>
                <td><button class="button" onclick="limpar()">C</button></td>
                <td><button class="button" onclick="menos()">±</button></td> 
                <td><button class="button" onclick="porcentagem('')">%</button></td> 
                <td><button class="button" onclick="clicar('/')">÷</button></td> 
            </tr>
            <tr>
                <td><button class="button" onclick="clicar('7')">7</button></td>
                <td><button class="button" onclick="clicar('8')">8</button></td>
                <td><button class="button" onclick="clicar('9')">9</button></td>
                <td><button class="button" onclick="clicar('*')">x</button></td>
            </tr>
            <tr>
                <td><button class="button" onclick="clicar('4')">4</button></td>
                <td><button class="button" onclick="clicar('5')">5</button></td>
                <td><button class="button" onclick="clicar('6')">6</button></td>
                <td><button class="button" onclick="clicar('-')">-</button></td>
            </tr>
            <tr>
                <td><button class="button" onclick="clicar('1')">1</button></td>
                <td><button class="button" onclick="clicar('2')">2</button></td>
                <td><button class="button" onclick="clicar('3')">3</button></td>
                <td><button class="button" onclick="clicar('+')">+</button></td>
            </tr>
            <tr>
                <td><button class="button" onclick="clicar('0')">0</button></td>
                <td><button class="button" onclick="clicar('(')">(</button></td>
                <td><button class="button" onclick="clicar(')')">)</button></td>
                <td><button class="button" onclick="clicar('.')">.</button></td>
            </tr>
            <tr>
                <td colspan="2"><button class="button" style="width: 145px;" onclick="del('6')"><--</button></td>
                <td colspan="2"><button class="button" style="width: 145px;" onclick="calculo('')">=</button></td>
            </tr>
        </table>
    </div>    
    </div>
     <script>
        function clicar(num)
        {
            var numero = document.getElementById('Resultado').innerHTML;
            document.getElementById('Resultado').innerHTML = numero + num
        }
        function limpar()
        {
            document.getElementById('Resultado').innerHTML = "";
        }
        function del()
        {
            var Resultado = document.getElementById('Resultado').innerHTML
            document.getElementById('Resultado').innerHTML = Resultado.substring(0,Resultado.length -1);
        }
        function calculo()
        {
            var Resultado = document.getElementById('Resultado').innerHTML
            if(Resultado)
            {
                document.getElementById('Resultado').innerHTML = eval(Resultado)
            }
            else
            {
                document.getElementById('Resultado').innerHTML = 'Erro'
            }
        }
        function menos()
        {
            var numero = document.getElementById('Resultado').innerHTML;
            document.getElementById('Resultado').innerHTML = numero * -1
        }
        function porcentagem()
        {
            var numero = document.getElementById('Resultado').innerHTML;
            document.getElementById('Resultado').innerHTML = numero / 100
        }

     </script>   
    </body>
    </html>
