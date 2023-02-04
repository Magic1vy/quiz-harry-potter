const btn = document.querySelector("#btn");
btn.addEventListener("click", result);

const par = document.querySelector("#par");

function result(e){
e.preventDefault();

let score = 0;

if (document.querySelector("#answerOne").checked){
    score ++;
}

if (document.querySelector("#answerTwo").checked){
    score ++;
}

if (document.querySelector("#answerThree").checked){
    score ++;
}

if (document.querySelector("#answerFour").checked){
    score ++;
}

if (document.querySelector("#answerFive").checked){
    score ++;
}

if (document.querySelector("#answerSix").checked){
    score ++;
}

if (document.querySelector("#answerSeven").checked){
    score ++;
}

if (document.querySelector("#answerEight").checked){
    score ++;
}

if (document.querySelector("#answerNine").checked){
    score ++;
}

if (document.querySelector("#answerTen").checked){
    score ++;
}


 par.textContent = score+ "/10";

if (score === 1){

    Swal.fire({
        title: '10% You need more practice',
        text: "Bad luck – but at least it’s another excuse to read the books again and become a platform pro!",
        imageUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 2){

    Swal.fire({
        title: '20% You need more practice',
        text: "Bad luck – but at least it’s another excuse to read the books again and become a platform pro!",
        imageUrl: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 3){

    Swal.fire({
        title: '30% Avada Kedaverage',
        text: "Not terrible but not great either. Better give this quiz another run, if you're nervous.",
        imageUrl: 'https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 4){

    Swal.fire({
        title: '40% Avada Kedaverage',
        text: "Not terrible but not great either. Better give this quiz another run, if you're nervous.",
        imageUrl: 'https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 5){

    Swal.fire({
        title: '50% Avada Kedaverage',
        text: "Not terrible but not great either. Better give this quiz another run, if you're nervous.",
        imageUrl: 'https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhhcnJ5JTIwcG90dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 6){

    Swal.fire({
        title: '60% We can expect great things',
        text: "Nearly! But you need to do a little more spellwork before you hit top marks here.",
        imageUrl: 'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 7){

    Swal.fire({
        title: '70% We can expect great things',
        text: "Nearly! But you need to do a little more spellwork before you hit top marks here.",
        imageUrl: 'https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 8){

    Swal.fire({
        title: '80% Yer a Quizzard',
        text: "Bravo! Your knowledge of the magical platform has put you head and shoulders above the competition.",
        imageUrl: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 9){

    Swal.fire({
        title: '90% Yer a Quizzard',
        text: "Bravo! Your knowledge of the magical platform has put you head and shoulders above the competition.",
        imageUrl: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

if (score === 10){

    Swal.fire({
        title: '100% Yer a Quizzard',
        text: "Bravo! Your knowledge of the magical platform has put you head and shoulders above the competition.",
        imageUrl: 'https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        imageWidth: 400,
        imageHeight: 200,
        confirmButtonColor: '#3b1413',
      })
}

}

const music = document.querySelector("#play");
const audio = document.querySelector("#myAudio");
const playBtn = document.querySelector("#playButton");
const pauseBtn = document.querySelector("#pauseButton");
music.addEventListener("click", () => {
    if (audio.paused){
        audio.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
      }
      else {
        audio.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "block";
        
      }
});