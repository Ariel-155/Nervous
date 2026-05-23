const frases1 = ["Maybe I shouldn't try to be perfect", "I confess, I'm obsessed with the surface"];

const frases2 = ["In the end"];

const frases3 = ["if I fall or if I get it all", "I just hope that it's worth it"];

const frases4 = ["Last year I fell flat on my face", "And last month I knew somethin' should change",
    "Last week I started over again", "Ask me and I'll tell you how I've been", "Mhm, don't get me started"
];

const frases5 = ["You've got me nervous to speak", "So I just won't say anything at all", "I've got an urge to release",
    "And you keep tellin' me to hold on", "You've got me nervous to move", "So I just won't give anything to you", 
    "You've got me turnin' all around", "To be who you need me to"];

const frases6 = ["Should I be quiet?", "Come on, be silent", "You know I'm tryin'", "So don't say nothin'", "Tell me you trust me and", "Kiss me and hug me, yeah",
    "I would do anything for ya", "You just gotta love me and"];

const frases7 = ["I got an itch in my throat", "I don't know which way to go", "I keep on switchin', I know", "I need a different approach",
    "It's all because I wanna", "Show you that I'm so capable"];

const frases8 = ["Hush, baby, don't you say another word", "Hush, baby, don't you say another word, be quiet", "Hush, baby, don't you say another word",
    "Hush, baby, when you do, I just get hurt"];

const frases9 = ["Come on, baby, don't you hurt me anymore", "I'm not the same way that I was before", "I got goosebumps all over me"];

const frases10 = ["When you're around, hard for me to breathe"];

const frases11 =["Come on, baby, don't you do that anymore", "It's not like the days, at night, I feel so short",
    "My nerves, they give me a sign", "Tell me I'm not fine, mhm"];

const frases12 = ["You've got me nervous to speak", "So I just won't say anything at all", "I've got an urge to release",
    "And you keep tellin' me to hold on"];

const frases13 = ["You've got me nervous to move", "So I just won't give anything to you", "You've got me turnin' all around", "To be who you need me to"];

const frases14 = ["Gracias por escuchar mi proyecto :D"];

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
const mayusculas11 = frases11.map(frase => frase.toUpperCase());
const mayusculas12 = frases12.map(frase => frase.toUpperCase());
const mayusculas13 = frases13.map(frase => frase.toUpperCase());
const mayusculas14 = frases14.map(frase => frase.toUpperCase());

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

function iniciarParpadeo() {
    document.body.classList.add("parpadeo-activo");
}

function detenerParpadeo() {
    document.body.classList.remove("parpadeo-activo");
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

    setTimeout(() => {
        let letra6 = 0;
        animarTexto(document.getElementById("todo"), mayusculas6[letra6]);
        letra6++;

        const intervalo6 = setInterval(() => {
            if (letra6 >= mayusculas6.length) {
                clearInterval(intervalo6); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas6[letra6]);
            letra6++;
        }, 2100); // cada 3s cambia frase, ajusta a la canción

    }, 69000);

     setTimeout(() => {
        let letra7 = 0;
        animarTexto(document.getElementById("todo"), mayusculas7[letra7]);
        letra7++;

        const intervalo7 = setInterval(() => {
            if (letra7 >= mayusculas7.length) {
                clearInterval(intervalo7); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas7[letra7]);
            letra7++;
        }, 2000); // cada 3s cambia frase, ajusta a la canción

    }, 85000);

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

    }, 102000);

    setTimeout(() => {
        let letra8 = 0;
        animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
        letra8++;

        const intervalo8 = setInterval(() => {
            if (letra8 >= mayusculas8.length) {
                clearInterval(intervalo8); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
            letra8++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 133000);

    setTimeout(() => {
        iniciarParpadeo();
    }, 146000); // Comienza parpadeo

    setTimeout(() => {
        detenerParpadeo();
    }, 148000); // Termina parpadeo

    setTimeout(() => {
        let letra9 = 0;
        animarTexto(document.getElementById("todo"), mayusculas9[letra9]);
        letra9++;

        const intervalo9 = setInterval(() => {
            if (letra9 >= mayusculas9.length) {
                clearInterval(intervalo9); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas9[letra9]);
            letra9++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 149000);

    setTimeout(() => {
        let letra10 = 0;
        animarTexto(document.getElementById("todo"), mayusculas10[letra10]);
        letra10++;

        const intervalo10 = setInterval(() => {
            if (letra10 >= mayusculas10.length) {
                clearInterval(intervalo10); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas10[letra10]);
            letra10++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 162000);

    setTimeout(() => {
        let letra11 = 0;
        animarTexto(document.getElementById("todo"), mayusculas11[letra11]);
        letra11++;

        const intervalo11 = setInterval(() => {
            if (letra11 >= mayusculas11.length) {
                clearInterval(intervalo11); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas11[letra11]);
            letra11++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 166000);

    setTimeout(() => {
        let letra12 = 0;
        animarTexto(document.getElementById("todo"), mayusculas12[letra12]);
        letra12++;

        const intervalo12 = setInterval(() => {
            if (letra12 >= mayusculas12.length) {
                clearInterval(intervalo12); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas12[letra12]);
            letra12++;
        }, 4100); // cada 3s cambia frase, ajusta a la canción

    }, 182000);

    setTimeout(() => {
        let letra13 = 0;
        animarTexto(document.getElementById("todo"), mayusculas13[letra13]);
        letra13++;

        const intervalo13 = setInterval(() => {
            if (letra13 >= mayusculas13.length) {
                clearInterval(intervalo13); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas13[letra13]);
            letra13++;
        }, 4100); // cada 3s cambia frase, ajusta a la canción

    }, 198000);

    setTimeout(() => {
        let letra8 = 0;
        animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
        letra8++;

        const intervalo8 = setInterval(() => {
            if (letra8 >= mayusculas8.length) {
                clearInterval(intervalo8); // para cuando terminen las frases
                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas8[letra8]);
            letra8++;
        }, 4000); // cada 3s cambia frase, ajusta a la canción

    }, 213000);

    setTimeout(() => {
        let letra14 = 0;
        animarTexto(document.getElementById("todo"), mayusculas14[letra14]);
        letra14++;

        const intervalo14 = setInterval(() => {
            if (letra14 >= mayusculas14.length) {
                clearInterval(intervalo14);

                // Limpia las frases anteriores
                document.getElementById("todo").textContent = "";

                // Muestra la frase final
                setTimeout(() => {
                    animarTexto(document.getElementById("ultimaparte"), mayusculas14[0]);

                    // La frase desaparece después de 5 segundos
                    setTimeout(() => {
                        document.getElementById("ultimaparte").textContent = "";
                    }, 7500);

                }, 500);

                return;
            }
            animarTexto(document.getElementById("todo"), mayusculas14[letra14]);
            letra14++;
        }, 4000);

    }, 229000);


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
