// ****************************** STEP 1 : ouvrir un onglet de l'accordéon
let title = document.querySelector("#titre1");
let content = document.querySelector("#contenu1");

title.addEventListener("click", function () {
  content.classList.toggle("contenu-open");
});

// **************************** STEP 2 : ouvrir un onglet en utiliser nexteElementSibling
// let title = document.querySelector("#titre1");

// title.addEventListener("click", function () {
//   console.log(title);
//   let content = title.nextElementSibling;
//   content.classList.toggle("contenu-open");
// });

// ****************************** STEP 3 : ouvrir tous les onglets en les selectionnant un par un
// let title = document.querySelector("#titre1");
// let title2 = document.querySelector("#titre2");

// title.addEventListener("click", function () {
//   let content = title.nextElementSibling;
//   content.classList.toggle("contenu-open");
// });

// title2.addEventListener("click", function () {
//   let content = title2.nextElementSibling;
//   content.classList.toggle("contenu-open");
// });

// **************************** STEP 4 : ouvrir tous les onglets en les selectionnant avec une boucle
// let titres = document.querySelectorAll(".titre");
// console.log(titres);

// titres.forEach((element) => {
//   element.addEventListener("click", function () {
//     let content = element.nextElementSibling;
//     content.classList.toggle("contenu-open");
//   });
// });
