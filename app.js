/*var a =1;
var b="fernando";
console.log(a);
console.error(a);
console.warn(a);
console.info(a);*/
/*
function imprimir() {
    for (var i = 0; i <=8000; i++) {
        console.log("imprimiendo");
        
    }
}

function  presionarClick() {
    console.log("presiono click ");
}
imprimir();
*/
//leccion numero 8
/*var nombre = "carlos";
// calse 9
var obj= {
    nombre:"carlos",
    edad:27,
    objHijo:{
        nombre:"carlos2",
        edad:0
    }
};


console.log(obj);
//clase 10 pasar valores por referencia 
var a = 10;
var b = a;
 console.log( "a", a);
 console.log("b ", b);
 var a = 20 ;

 console.log("a", a);
 console.log("b ", b);


 var c ={
     nombre:"juana"
 }
 var d = c;
 console.log("c:" , c);
 console.log("d:", d );

 c.nombre="maria";
 console.log("c:" , c);
 console.log("d:", d );

// clase 11 notacion de punto y de corchete 

var persona= {
    nombre:"carlos",
    edad: 27,
    nacionalidad :"mexicana",
    domicilio:{
        calle:"general martin carrera",
        colonia:"santa cristina",
        numero:" 15",
        edificio:{
            nombre: "edificio1",
            telefono: 22-22-22-22

        }
    }

 }

 console.log(persona.nombre);
 console.log(persona.domicilio.calle);
 persona.domicilio.zipcode=28973;

 console.log(persona.domicilio);

 var  edificio = persona.domicilio.edificio;
edificio.piso="octavo piso";
 console.log(persona);



 var espacio ="edad";
 console.log(persona[espacio]);

 console.log(persona["domicilio"] ["calle"]);
//leccion 12 

function primerFuncion() {
    var a=20;
    console.log(a);

}

primerFuncion();

function miPrimerafuncion() {
    console.log("invocada");
}

var miFuncion= miPrimerafuncion 

miFuncion();


//leccion 13
 function imprimir(nombre, apellido) {
    /* {

    apellido=apellido || "apellido"
         if (apellido=== undefined) {
             apellido="basura"
         }
     console.log(nombre +" "+ apellido)
          }
    console.log(nombre);
}

// imprimir("juan" );

 imprimir({
     nombre: "carlos",
     apellido: "Gonzalez "
 })


 function imprimir (fn) {
     fn();
 }
 var persona = {
     nombre:"carlos",
     apellido:"gonzalez"
 }
/*
 imprimir(function () {
     console.log("funcion anomia");
 });
 var miFuncion= function () {
     console.log("mi funcion ")
 }
 imprimir(miFuncion);
 */

 // leccion 14
/*
 function aleatorio(){
     return Math.random();
 }

 function nombre() {
     return "juan"
 }

 console.log(nombre()+ " padilla");

 function esMayor05() {
     if ( aleatorio () >0.5) {
         return true;
     }else{
         return false;
     }
 }
 if (esMayor05()) {
     console.log("es mayor a 0.5");
 } else {
     console.log("es menor a 0.5");
 }

 function crearPersona(nombre, apellido) {
     return{
         nombre:nombre,
         apellido:apellido
     }
 }
 var persona = crearPersona("maria" ,"paz")

 console.log(persona.nombre);
 console.log(persona.apellido);

 function crearFuncion() {
     return function (nombre){
         console.log("me crao " + nombre )
         return function () {
             console.log("segunda funcion")
         }
     }
 }

 var nuevaFuncion = crearFuncion();
 var segundaFuncion = nuevaFuncion(persona.nombre);
 segundaFuncion();

*/
 // clase 16
/*
 var persona={
     nombre:"pispia",
     edad: 27 ,
     imprimirNombre: function () {
         console.log(this.nombre+ " "+ this.edad)
     },
     direccion :{
       pais: "mexico",
       obtenerPais: function () {
           var self= this
           var nuevaDireccion = function(){
               console.log(self);
               console.log("obtener pais el apis es " + self.pais);

           }
          nuevaDireccion();
       }    
     }
        
 };
persona.imprimirNombre();
persona.direccion.obtenerPais();

 persona.nombre = "andres"
 */
 // clase 17
 /*
 function Persona(nombre, apellido) {
     this.nombre= "pispireta"
     this.apellido= "Gonzalez",
     this.edad= 32;
     this.imprimirPersona = function () {
return this.nombre + " "+ this.apellido +"("+ this.edad+")";
     }
 }
 var pispia= new Persona("juan", "mendoza");

 console.log(pispia);
 console.log(pispia.nombre);
 console.log(pispia. imprimirPersona());
*/
 // clase 18
 /*

 function jugador(nombre) {
     this.nombre= nombre;
     this.pv =100;
     this.sp =100;

this.curar = function(jugadorObjetivo) {
       if (this.sp >=40) {
        this.sp -=40;
        jugadorObjetivo.pv+=20;

       }else{
           console.log(this.nombre +"no tiene sp")

       }
       this.estado(jugadorObjetivo);
       }
       this.tirarflecha =function (jugadorObjetivo) {
           if (jugadorObjetivo.pv >=40) {
            jugadorObjetivo.pv -=40; 

           }else{
               jugadorObjetivo.pv=0;
               console.error(jugadorObjetivo.nombre +" murio nooo ")
           }
           this.estado(jugadorObjetivo);
    
        }
       this.estado = function (jugadorObjetivo) {
        console.log(this);
        console.log(jugadorObjetivo)

     }

 };

 var gandalf = new jugador("gandalf");
 var legolas = new jugador("legolas");

 console.log(legolas);
 console.log(gandalf);

 gandalf.curar(legolas);

*/

//clase 19
/*
function Persona() {
    this.nombre="pispia";
    this.apellido="gonzalez";
    this.edad=30;
    this.pais= "Mexico";
    this.imprimirInfo= function () {
    }
} 
Persona.prototype.imprimirInfo = function () {
    console.log(this.nombre + " "+this.apellido +  " " + "(" + this.edad +")")

}
//Persona.prototype.pais="costa Rica";
var fer = new Persona();
/*
console.log(fer);
console.log(fer.imprimirInfo);

Number.prototype.esPositivo = function(){
    if (this > 0) {
        return true;
    }else{
        return false;
    }
};
*/
// leccion 20 funciones anonimas 
/*
(function () {
    var a =10;
console.log(a);
 
function cambiaA() {
     a =20;
}
cambiaA();
console.log(a);
}) ();

function ejecutarFuncion(fn) {
    if (fn()===1) {
        return true;

    }else{
        return false;
    }
    fn();
};

console.log(
    ejecutarFuncion( function () {
    console.log("funcicon anonima ejecutada")
    return 1;
})
);
*/

// calse numero 21
/*
function identifica(param) {
    console.log(typeof param );
}
identifica(function () {});
 function persona() {
     
 }
 var juan = new Person();



function identificar(param) {
    if ( typeof param =="function" ) {
        param();
    }else{
    console.log(param);
    }
}

function Persona() {
    this.nombre="carlos";
    this.edad=27;
}

var carlos= new Persona()

identificar(carlos);

function identificar(param) {
    console.log ( param instanceof Persona ) ;
  
}

function Persona() {
    this.nombre="carlos";
    this.edad=27;
}

var carlos= new Persona();

identificar(carlos);
*/

//clase numero 22

/*
var arr= [5,4,3,2,1]

console.log(arr[0]);

arr.reverse();
console.log(arr);

arr= arr.map(function(elem){
  elem *=elem;
  return elem;
});

console.log(arr)

arr= arr.map(Math.sqrt);

console.log(arr);

arr=arr.join("|");
console.log(arr);

arr =arr.split("Ì");
console.log(arr)

arr.push("6")
console.log(arr);

arr.unshift("0");
console.log(arr);

console.log(arr.toString());

var eliminar=arr.pop();
console.log(arr,eliminar);

arr.splice(1,1,"10");
console.log(arr);

arr= arr.slice(0,2)
console.log(arr);

*/

//clase 23
/*
var arr=[
    true,
    {
        nombre: "Carlos",
        Apellido: "Gonzalez "
    },
    function () {
        console.log("estoy viviendo en una simulacion ");
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.Apellido);
    },
    ["Carlos ", 
    " Itzel",
     "melisa", 
     "Fernando",
     ["Itzel",
      "Chel",
      "Matias" ,
      function () {
        console.log(this) ;}]
      
       
     ]
];

console.log(arr);
console.log(arr[1].nombre +" " + arr[1].Apellido);
arr[2]();  
arr[3](arr[1]);
console.log(arr[4][4][1]);

var arreglo2 = arr[4][4];

arreglo2[1] = "Pedra"

console.log(arreglo2);
console.log(arr);

arreglo2[3]();
*/


// clase 24
//pasa algo rarro en est capitulo no funciono igual en mi pc 
/*
var argument = 10;

function miFuncion(a,b,c,d) {

    if (argument.length !==4) {
        console.error("la funcion necesita 4 parametros ")
        return;
    }
  //  console.log(argument);
  console.log(a ,b , c , d)
}

miFuncion(10,20,30,40);
*/

// calse 25
/*

function crearProducto(nombre, precio) {
    nombre  =nombre || "sin nombre"
    precio  =precio || 0;
    console.log("Producto :", nombre ,"precio:", precio )
}


function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}
function crearCamisa(precio) {
    crearProducto("Camisa",precio);
}
crearProducto("lapiz");
crearProducto100("corrector");
crearCamisa(75);

*/
//clase 26
/*

function  determinarDato(a) {
    if (a=== undefined) {
        console.log(" a es undefined no se que hacaer");
    }if (typeof a === "number") {
       console.log("a es un numero puedo hacer operaqciones con el ")
    }if (typeof a ==="string") {
        console.log("a es un texto , puedo hacer operaciones on texto")
    }if (typeof a ==="object " ) {
         console.log("a es un  objeto pero puede ser cualquier cosa ")
     if (a instanceof Number) {
         console.log("a es un objeto numerico ")
     }    
    }
}
determinarDato({
    nombre:"fernando"
} );
var b = new Number(3);
console.log(b);
determinarDato(b);
*/

// clase 27 
/*

var letraA =10.34899945 ;
var letraB = new Number(10);

console.log(letraA.toFixed(33));

letraA =letraA.toString();
console.log(letraA);

//console.log(letraA.toPrecision(7)); // da error


var a = 10
a=a*"f";

console.log(a);

var b = new Number("20e");
console.log(b);
console.log(b.valueOf());

*/

// clase 29  bolleanos 
/*

var a = new Boolean(undefined)

console.log(a.valueOf());
if (a.valueOf()); {
    console.log("me imprimi!!");
}
*/
// clase numero 30 }

/*
 
var a = new String("Carlos Javier Gonzalez Sanchez");

console.log(a);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("Herrera");
console.log("la letra esta en la posicion :",i);

i=a.lastIndexOf("n")
console.log("la ultima letra esta en la posicion:" , i); 


var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);


var split= a.split(" ");
console.log(split);
console.log(split.length);

document.write(a.italics());

var b= 30;
var c=b-55;

console.log(c);

*/

// clase numero 31
/*
var hoy = new Date();
var miliseg = new Date(1);
var fija=new Date(2020,11,14);

console.log(hoy);
console.log(miliseg);
console.log(fija);

console.log(hoy.getFullYear());
console.log(hoy.getYear())

hoy.getDate();
3
hoy.getHours();
18
hoy.getMilliseconds();
467
hoy.getMonth();
6

*/
/*
var inicio = new Date();

for (let index = 0; index < 15000; index++) {
    console.log("algo ...");   
}


var fin = new Date();
/*
console.log(inicio);
console.log(fin);


var duracion = fin.getTime() - inicio.getTime();

console.log(duracion, "milisegundos");
console.log(duracion/1000, "segundos");
*/

//moment.js libreria  para fechas
// clase numero 32
/*
var fecha = new Date(2020,10, 14);
/*
console.log(fecha);
fecha.setDate(31);
console.log(fecha);


Date.prototype.sumardias= function (dias) {
    this.setDate(this.getDate() + dias);  //sumar dias 
    return this;
}
Date.prototype.sumarAnios= function (anios) {
    this.setFullYear(this.getFullYear() + anios);  //sumar dias 
    return this;
}


console.log(fecha);
console.log(fecha.sumardias(5));


console.log(fecha.sumarAnios(5));

*/

// clase 33 
/*
var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1= 10.274384586;
console.log(num1);
console.log(Math.round(num1*100)/100);
console.log(Math.floor(num1));

var rnd =Math.random();
console.log(rnd);


// dado prototipo
function ramdom (min, max) {
    return Math.floor(Math.random() *(max-min+1) +min);
}
console.log(ramdom(1,6));

console.log(Math.sqrt(22));
console.log(Math.pow(6,2));

*/

// clase 34
// var reg1 = RegExp("z");

/*
var reg2 = /a/;
var texto = "Hoola Mundo. \n hola de nuevoo 123124";
console.log(texto);
var arr = texto.match(/^a/);
var arr = texto.match(/o$/);
var arr = texto.match(/.../);
var arr = texto.match(/^.o/);
var arr = texto.match(/[0-9]/);
var arr = texto.match(/[a-zA-z]/);
var arr = texto.match(/[aeiou].$/);
var arr = texto.match(/\s/);
var arr = texto.match(/\w/);
var arr = texto.match(/\d/);
var arr = texto.match(/m/i);
var arr = texto.match(/[aeiou]/ig);

var arr = texto.match(/o+/g);
var arr = texto.match(/o?/g);


var arr = texto.match(/o{2}/);
var arr = texto.match(/o{2}/g);




console.log(arr);
*/

// calse 35 
/*
var texto = "la respuesta de la suma es : 50 + 50 =100";
console.log(texto);

var arr = texto.match(/[aeiou{2,2}]/ig);
var arr = texto.match(/\w{2,2}/ig);
var arr = texto.match(/\d{1,}|respuesta/g);


console.log(arr);

*/
// clase 37
/*
var arr = [
    "Carlos",{
        nombre: "carlos",
        apellido: "Gonzalez",
        getNombre: function (){
            return this.nombre +" " + this.apellido;
                }
 } ,true , function () {
     console.log(this);
 }]

 console.log(arr);

 */

 //clase 38
/*
 try {
     var a =100;

     if (a ===103){
         throw 'que mal'
     }else{
         throw  'oh oh!'
     }
     console.log("el valor de a es :",a)
 } catch (e) {
     if (e==="que mal...") {
        console.log("error tipo 1");        
     }
     if (e==="oh oh") {
         console.log("error tipo 2");
     }

 }finally{
     console.log("finalmente ")
 }

 */
/*
//  throw error;
try {

    throw 1;

  //  throw new Error ("erro tipo 1");
  /*
  throw function () {
      console.log("function del throw");
      
  }
  /*
    throw{
        nombre :"error ",
        acction:"salir corriendo a echarle agua al servidor ",
        codeError:1
    }
    console.log("esta parte nunca se ejecuta ");
} catch (e) {
    
    registraErrores(e);
    /*console.log("parte del cath");
     e();
     

    console.log(e);
    console.log(e.nombre);
    console.log(e.acction);
    console.log(e.codeError);
    * //console.log(e.message);
}finally {

console.log("finalmente");

}
 function registraErrores(e) {
var ahora= new Date();

     console.log("se registro un error",e,"a las ", ahora);
 }
 */

 // clase numero 43
/*
 var carro={
    color :"blanco",
    marca: "mazda",
    imprimir : function () {
        var salida = this.marca + "-" + this.color;
        return salida;
    
    }
}

var carro2 ={
    color : "rojo",
    marca: "toyota",
}

console.log(carro.imprimir());

var logCarro= function (arg1, arg2 ) {
    
    console.log("carro:", this.imprimir());
    console.log(arg1,arg2);
    console.log("=================");
    
    
}

var logModeloCarro = logCarro.bind(carro);
logModeloCarro("abc", "xyz");
logModeloCarro.call(carro, "123","456");
logModeloCarro.call(carro, ["asd","qwd"]);



console.log(carro.imprimir.call(carro2));
 

*/
//clase 44
/*
var notas = 60;

if (notas >=90 ) {
console.log("A");

}else if (notas >=80 ) {
console.log("B");
   
}else if (notas >= 70) {    
console.log("C");
    
}else if (notas >= 60) {
console.log("D")
} else{
    console.log("F");
}
console.log("terminado");

var a =10;
var b =20;

var c = 0;

if (a > b) {
    c = a ;
} else {
    c = b;
}
console.log(c);

var a =10;
var b =20;

//var c = (a>b)? a:b;
var c = (a>b)? function () {
    console.log("a es mayor que b");
    return a ;
}():function () {
    console.log("b es mayor que a");
    return b ;
}();
console.log(c);

var a =10;
var b =undefined;

var c = a || b;
console.log(c);



function geetNombre(nombre) {
    var nomb  = nombre || "<sin nombre>" || "<sin apellido>";
    console.log(nomb);
    
};
geetNombre();

|| // alt 124
*/


//clase numero 45
/*
 var mes = 40;

 switch (mes) {
    case (10> 5)? 40:1:
       console.log("enero");
       break;

    case 2:
       console.log("febrero");
       break;

    case 3:
        console.log("marzo");
        break;

    case 4:
        console.log("abril");
        break;

    case 5 :
        console.log("mayo");
        break;

    case 6:
        console.log("junio");
        break;

    case 7:
        console.log("julio");
    case 8:
        console.log("agosto");
        break;

    case 9 : 
    console.log("Septiembre")
        break;

    case 10: 
        console.log("octubre");
        break;

        case 11:
        console.log("noviembre")
        break;

    case 12 :
        console.log("diciembre");      
         break;
 
     default:
         console.log("cualquiera ");
         
         break;
 }

 */
 // clase  numero 46
/*
 var objetJs = {
     nombre : "Carlos",
     edad: 27,
     imprimir : function () {
         console.log(this.nombre , this.edad);
     }
 };

 console.log("objeto literal", objetJs );

 var jsonString = JSON.stringify(objetJs);

 console.log(jsonString);

 var objetoDesdeJson = JSON.parse(jsonString);

 console.log(objetoDesdeJson);

 console.log(objetoDesdeJson.nombre);
 console.log(objetoDesdeJson.edad);

 
 */

 // clase numero 47
/*
 var i = 1;

 while (i <= 10) {
     console.log(1);
     i++;
 }

*/
/*
var i = 0;

while (i< 10) {
    i++;

    if (i ===5) {
      //  break
      //continue
}    
console.log(i);
 }

var i = 0;

do {
    i++;
    if(i ===5){
        continue
    }
  //  break
    console.log(i);

    
    
} while (i <10);

 */
 
 // clase 48
 /*
 for (let index = 0; index <=10; index++) {
     if (index ==5) {

     //continue         
    break ;
     }
     console.log(index);

 }



var persona= function () {
    this.nombre ="Carlos",
    this.apellido= "Gonzalez",
    this.edad= 27;
}

var juan = new persona()
persona.prototype.direccion = "General martin Carrera"
// reflejo 
 for (prop in juan ) {
     if (juan.hasOwnProperty(prop)) {
         continue
     }     
     console.log(prop , juan[prop]);
     }
    
     for (num in[ 1,2,3,4,5,67,8,9,10]){
         console.log(num);
         
     }

     [1,2,3,4,5,6,7,8,9,10].forEach(function (val) {
         console.log(val);
         
     });
      */
// clase numero 49 
/*
for_principal:
for (let index = 1; index <=5; index++) {
  console.log("i ", index);
  for_secundario:
  for (let j = 1;  j<=5; j++) {
      console.log("j", j);
     // continue for_principal;
      for (let x = 1; x <=5; x++) {
        console.log("x", x);
        break for_principal;
          
      }
    
  }
      
}
*/


// clase numero 50 funciones de tiempo
/*
 setTimeout(function () {
   console.log("paso un segundo");
     
 }, 1000)

 var seg = 0;
 var intervalo =setInterval(() => {
     seg ++;
     console.log("seg",seg);
     
if (seg ===3) {
clearInterval(intervalo);
}     
 }, 1000);



 var persona= {
     nombre:"carlos",
     apellido:"gonzalez",
     edad: 27,
     imprimir : function (){ 
         var self = this;
         setTimeout(function(){ 
            console.log(self.nombre , self.edad);

     },1000)

      }
 }

persona.imprimir()
 
 */

 // clase numero 50
 /*
 function evento(arg) {
     console.log("me dispare");
     console.log(arg.x , arg.y );
     
     
 }

 var objeto = document.getElementById("objDemo") 
 console.log(objeto);
 

 objeto.addEventListener("click", evento)


 objeto.click();
 */
// clase numero 52
/*
document.onmousedown=function (arg) {
    if (arg.button ===2) {
        alert("click bloqueado");
        return;
    }
    console.log("no hay problema");

}

document.onmouseup = function () {
    var texto = window.getSelection().toString();
    console.log(texto);
    
}

*/

// clase 53
/*
function validar() {
    var nombre = document.getElementById("txnombre").value;
    var apellido = document.getElementById("txtapellido").value;

    if (nombre.length < 1) {
        return false;
    }
    if (apellido.length < 1) {
        return false;
    }


    return true;
}
console.log(window.location.search);
console.log(window.location.search.split("&"));

*/
// clase numero 54  
/*
var acepto = confirm("esta seguro de borrar ");
var acepto2 = prompt("esta seguro de borrar " , "nombre");

console.log(acepto);
console.log(acepto2);
*/
//javascript  notifications

//sweet alert 
//encapsulacimiento de modo estricto 
/*
(function() {
    "use strict"
    function name() {
        nombre2 = "juan";
        return nombre2 
    
    }
    
    var nombre ="carlos"
    console.log(nombre);
    console.log(name());
    
})();
*/