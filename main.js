let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 100,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy estudiante de QFB y estoy interesada en la programación')
  .pauseFor(200)
  .deleteChars(10)
  .start();
