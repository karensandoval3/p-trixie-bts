/*TEMPERATURA */

const app = document.getElementById('typewriter');

const typewriter = new typewriter(app, {
    loop: true,
    delay: 75
});
 
typewriter
    .typeString('La capital del Sol')
    .pauseFor(200)
    .start();

    

