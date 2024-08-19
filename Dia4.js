let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 2;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Ingresa un número entre 0 y ${numeroMaximoPosible}  por favor:`));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        intentos+=1;
        if (intentos > maximosIntentos) {
            alert(`Lo siento no acertaste el numero el cual era: ${numeroSecreto}`);
            break;
        }
    }
}