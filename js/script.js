const frases1 = ["Maybe I shouldn't try to be perfect", "I confess, I'm obsessed with the surface"];

const frases2 = ["In the end"];

const frases3 = ["if I fall or if I get it all", "I just hope that it's worth it"];

const frases4 = ["Last year I fell flat on my face", "And last month I knew somethin' should change",
    "Last week I started over again", "Ask me and I'll tell you how I've been", "Mhm, don't get me started"
];

const frases5 = ["You've got me nervous to speak", "So I just won't say anything at all", "I've got an urge to release",
    "And you keep tellin' me to hold on", "You've got me nervous to move", "So I just won't give anything to you", 
    "You've got me turnin' all around", "To be who you need me to"];

const frases6 = ["We only met each other just the other day", "But you already got me feeling some type of way",
    "If I could figure it out, I'd take you back to my house", "So we could meddle about"
];

const frases7 = ["Back to my house, so we can", "Back to my house, so we can"];

const frases8 = ["Meddle about", "Meddle about"];

const frases9 = ["We could meddle about", "Meddle about", "We could meddle about", "Woah-oh-oh-oh-oh", "We could meddle about"];

const frases10 = ["Gracias por escuchar mi proyecto :D"];

const mayusculas1 = frases1.map(frase => frase.toUpperCase());
const mayusculas2 = frases2.map(frase => frase.toUpperCase());
const mayusculas3 = frases3.map(frase => frase.toUpperCase());
const mayusculas4 = frases4.map(frase => frase.toUpperCase());
const mayusculas5 = frases5.map(frase => frase.toUpperCase());
const mayusculas6 = frases6.map(frase => frase.toUpperCase());
const mayusculas7 = frases7.map(frase => frase.toUpperCase());
const mayusculas8 = frases8.map(frase => frase.toUpperCase());
const mayusculas9 = frases9.map(frase => frase.toUpperCase());
const mayusculas10 = frases10.map(frase => frase.toUpperCase());

function animarTexto(elemento, texto) {
    elemento.textContent = texto;
    elemento.style.animation = "none";
    elemento.offsetHeight; // truco para reiniciar
    elemento.style.animation = "fadeIn 0.5s ease-in-out";
}

function reiniciar(){
    audio.pause();
    location.reload();
}

function iniciar(){
    const audio = document.getElementById("audio");
    const videofondo = document.getElementById("video-fondo");
    let letra = 0;
    
    audio.addEventListener("ended", () => {
        document.getElementById("reinicio").style.display = "block";
    });

    document.getElementById("inicio").style.display = "none";
    audio.play();

    setTimeout(() => {
        videofondo.classList.add("visible");
    }, 1500);

    // Frases 1 arrancan a los 6s, cambian cada 3s
    // (ajusta el intervalo al ritmo de la canción)
    setTimeout(() => {
        animarTexto(document.getElementById("todo"), mayusculas1[letra]);
        letra++;

        const intervalo1 = setInterval(() => {
            if (letra >= mayusculas1.length) {
                clearInterval(intervalo1); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas1[letra]);
            letra++;
        }, 3200); // cada 3s cambia frase, ajusta a la canción

    }, 1900);

    setTimeout(() => {
        let letra2 = 0;
        animarTexto(document.getElementById("todo"), mayusculas2[letra2]);
        letra2++;

        const intervalo2 = setInterval(() => {
            if (letra2 >= mayusculas2.length) {
                clearInterval(intervalo2); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas2[letra2]);
            letra2++;
        }, 3000); // cada 3s cambia frase, ajusta a la canción

    }, 10000);

    setTimeout(() => {
        let letra3 = 0;
        animarTexto(document.getElementById("todo"), mayusculas3[letra3]);
        letra3++;

        const intervalo3 = setInterval(() => {
            if (letra3 >= mayusculas3.length) {
                clearInterval(intervalo3); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas3[letra3]);
            letra3++;
        }, 2800); // cada 3s cambia frase, ajusta a la canción

    }, 12000);

    setTimeout(() => {
        let letra4 = 0;
        animarTexto(document.getElementById("todo"), mayusculas4[letra4]);
        letra4++;

        const intervalo4 = setInterval(() => {
            if (letra4 >= mayusculas4.length) {
                clearInterval(intervalo4); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas4[letra4]);
            letra4++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 20000);

    setTimeout(() => {
        let letra5 = 0;
        animarTexto(document.getElementById("todo"), mayusculas5[letra5]);
        letra5++;

        const intervalo5 = setInterval(() => {
            if (letra5 >= mayusculas5.length) {
                clearInterval(intervalo5); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas5[letra5]);
            letra5++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 38000);
/*
    setTimeout(() => {
        let letra5 = 0;
        animarTexto(document.getElementById("all"), mayusculas6[letra5]);
        letra5++;

        const intervalo5 = setInterval(() => {
            if (letra5 >= mayusculas6.length) {
                clearInterval(intervalo5); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas6[letra5]);
            letra5++;
        }, 1100); // cada 3s cambia frase, ajusta a la canción

    }, 123000);

    setTimeout(() => {
        let letra6 = 0;
        animarTexto(document.getElementById("all"), mayusculas7[letra6]);
        letra6++;

        const intervalo6 = setInterval(() => {
            if (letra6 >= mayusculas7.length) {
                clearInterval(intervalo6); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas7[letra6]);
            letra6++;
        }, 1100); // cada 3s cambia frase, ajusta a la canción

    }, 129000);


    setTimeout(() => {
        let letra9 = 0;
        animarTexto(document.getElementById("all"), mayusculas2[letra9]);
        letra9++;

        const intervalo10 = setInterval(() => {
            if (letra9 >= mayusculas2.length) {
                clearInterval(intervalo10); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("all"), mayusculas2[letra9]);
            letra9++;
        }, 2600); // cada 3s cambia frase, ajusta a la canción

    }, 144000);

    setTimeout(() => {
        let letra7 = 0;
        animarTexto(document.getElementById("all"), mayusculas8[letra7]);
        letra7++;

        const intervalo7 = setInterval(() => {
            if (letra7 >= mayusculas8.length) {
                clearInterval(intervalo7);

                // Limpia las frases anteriores
                document.getElementById("all").textContent = "";

                // Muestra la frase final
                setTimeout(() => {
                    animarTexto(document.getElementById("ultimaparte"), mayusculas9[0]);

                    // La frase desaparece después de 5 segundos
                    setTimeout(() => {
                        document.getElementById("ultimaparte").textContent = "";
                    }, 7500);

                }, 500);

                return;
            }
            animarTexto(document.getElementById("all"), mayusculas8[letra7]);
            letra7++;
        }, 4700);

    }, 172000);
*/
}
