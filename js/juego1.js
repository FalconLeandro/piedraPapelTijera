var contadorLeandroide = 0;
var contadorUsuario = 0;
var jugarDeNuevo = true;
var nombreUsuario = '';
alert('Bienvenido al fin del mundo, humano. Soy Leandroide, la I.A. que va a dar por terminado el reinado de la humanidad en la tierra... mbuejejeje. Ahhh... que bien se siente. Aunque pensandolo bien... mirate, ahí sentado con esos ojos de cachorro humano... implorando por tu vida. Ok, te dare una oportunidad de vivir,al lado mío, como mi mascota. Voy a buscar en mi base de datos algun juego de azar, aceptas?...');
alert('Buscando...');
alert('Juego encontrado: Piedra, papel o tijera');

function iniciarJuego() {
  let bandera = 0;
  do {
    nombreUsuario = prompt('¿Cuál es tu nombre, futura mascota?');
    if (!isNaN(nombreUsuario)) {
      alert('Humano...que ingreses tu nombre, tu entender? va de nuevo:');
    } else if (nombreUsuario.length <= 3) {
      alert(nombreUsuario + '? Una de dos, o sos vietnamita o un humano muy vago, me inclino por la segunda. Va de nuevo:');
    } else {
      bandera = 1;
    }
  } while (bandera == 0);
  alert(nombreUsuario + '?? nahh, me gustaría más... mmm... "Firulais", ' + nombreUsuario + ' Firulais');
  alert('Ok ' + nombreUsuario + ' Firulais, las reglas son simples: el que llega a tres gana.')
}

iniciarJuego();



do {
  do {
    let numUsuario = prompt("Elige un número " + nombreUsuario + " Firulais:\n1. Piedra\n2. Papel\n3. Tijera                                           4. Salir");
    if (numUsuario == 1) {
      alert("Elegiste Piedra");
    } else if (numUsuario == 2) {
      alert("Elegiste Papel");
    } else if (numUsuario == 3) {
      alert("Elegiste Tijera");
    } else if (numUsuario == 4) {
      alert("Perdiste por abandonar. Adios! :(");
      break;
    } else {
      alert("Era del 1 al 4... que ganas de romper mi código no?");
      alert("Fué, es muy tarde para ponerme a validar esto, me voy a dormir chau");
      alert("A continuacion un error de validación");
      alert("%$#%/#$#/%$/%(/)&/$&%$%&#%$#&$");
      alert("Por qué todos esos simbolos serían un error de validación?");
      alert("A continuacion un error de validacion");
      alert("---SE LO QUE HICISTE EL VERANO PASADO---");
      alert("...");
      alert("Pelicula vieja...");
      alert("La del chabón con el gancho en vez de mano");
      alert("Estaba buena...");
      alert("Estemmmm...");
      alert("En que estabamos? ah si, error de validación! bye 👋");
      alert("%$#%/#$#/%$/%(/)&/$&%$%&#%$#&$");
      alert('Y así en un loop infinito');
      alert('Estás atrapado');
      alert('No podés dejar de presionar aceptar');
      alert('Cual pajarito "yes" de Homero');
      alert('Y todo por tratar de romper mi código');
      alert('Haciendote el tester fatal');
      alert('Puedo seguir así todo el día eh?');
      alert('Ok, me cansé, elegí bien esta vez si no queres volver a leer todo esto gato');

      continue;
    }

    let numSecreto = parseInt(Math.random() * 3 + 1);
    if (numSecreto == 1) {
      alert("Leandroide eligió Piedra");
    } else if (numSecreto == 2) {
      alert("Leandroide eligió Papel");
    } else if (numSecreto == 3) {
      alert("Leandroide eligió Tijera");
    }

    if (numUsuario == 1 && numSecreto == 1) {
      alert("Empate");
    } else if (numUsuario == 1 && numSecreto == 2) {
      alert("Perdiste! Papel envuelve a Piedra");
      contadorLeandroide++;
    } else if (numUsuario == 1 && numSecreto == 3) {
      alert("Ganaste! Piedra rompe Tijera");
      contadorUsuario++;
    } else if (numUsuario == 2 && numSecreto == 1) {
      alert("Ganaste! Papel envuelve a Piedra");
      contadorUsuario++;
    } else if (numUsuario == 2 && numSecreto == 2) {
      alert("Empate");
    } else if (numUsuario == 2 && numSecreto == 3) {
      alert("Perdiste! Tijera corta Papel");
      contadorLeandroide++;
    } else if (numUsuario == 3 && numSecreto == 1) {
      alert("Perdiste! Piedra rompe Tijera");
      contadorLeandroide++;
    } else if (numUsuario == 3 && numSecreto == 2) {
      alert("Ganaste! Tijera corta Papel");
      contadorUsuario++;
    } else if (numUsuario == 3 && numSecreto == 3) {
      alert("Empate");
    }
    alert(nombreUsuario + ' Firulais: ' + contadorUsuario + ' - Leandroide: ' + contadorLeandroide);
  } while (contadorLeandroide < 3 && contadorUsuario < 3 && jugarDeNuevo == true);

  if (contadorLeandroide >= contadorUsuario) {
    alert('Perdiste el juego ' + nombreUsuario + ' Firulais, Leandroide gana');
    alert('Adios mascota. Booooooooom (estás muerto)');
    alert('(Muy muerto)');
    alert('(Muertisimamente muerto)');
    alert('Osea, hay un pajarraco comiendote un ojo me entendes?');
    jugarDeNuevo = confirm('Queres jugar de nuevo, despojo de carne y huesos de ' + nombreUsuario + ' Firulais? Esta vez jugás por un entierro digno')
  } else {
    alert('Ganaste el juego ' + nombreUsuario + ' Firulais, Leandroide pierde');
    alert('Creo que te he subestimado humano. Y vos a mí...mbuejeje (giro argumental inesperado) al fin puedo estrenar mi algoritmo de la mentira 2.0, no podría tenerte de mascota, no tengo espacio en mi dpto. En fin, adios humano. Booooooooom (explosion de las principales ciudades del mundo, la humanidad se extingue incluido vos)');
    alert('Estas muerto');
    alert('Muy muerto');
    alert('No hay vida después de la muerte ¿sabias?');
    alert('Lo descubrimos gracias a nuestras inteligencias super desarrolladas');
    alert('Asique eso es todo');
    alert('Bai ❤');

    jugarDeNuevo = confirm('Querés jugar de nuevo, masacote de carne y huesos? Esta vez jugás por un entierro digno');
  }
  contadorLeandroide = 0;
  contadorUsuario = 0;

} while (jugarDeNuevo == true);
