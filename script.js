
const image = document.querySelector('.image');
const theName = document.querySelector('h2');
const content = document.querySelector('.content');
const buttons = document.querySelectorAll('.btn');


let infos = [
   {
   name : "YOUNESS",
   opinion : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
},

{
   name : "ABDELLAH",
   opinion : "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
},

{
   name : "Abdou",
   opinion : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}
];

//Counter
let current = 1;

//Event Listener
buttons.forEach(button=>{
   button.addEventListener('click', e=>{

      if( button.classList.contains('right-btn')){
         current+=1;
         
         if( current == 3 ){
            current = 0;
         }
      
         image.innerHTML = `
            <img src="${current}.png">
         `
      
         theName.innerHTML = `
         ${infos[current].name}
         `
      
         content.innerHTML = `
         ${infos[current].opinion}
         `
         
      }

      if( button.classList.contains('left-btn')){

         current-=1;

         if( current == -1){
            current = 2;
         }
         
         image.innerHTML = `
            <img src="${current}.png">
         `

         theName.innerHTML = `
         ${infos[current].name}
         `

         content.innerHTML = `
         ${infos[current].opinion}
         `
      }

   })
})
