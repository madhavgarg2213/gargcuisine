console.log("Welcome to Garg Cuisine");

let book = document.querySelector(".book");
book.addEventListener("click", () => {
    window.scrollTo({
        top: 1952,
        behavior: "smooth" 
    });
});
// document.querySelector('.about').addEventListener("click", () => {
//     window.scrollTo({
//         top: 2212,
//         behavior: "smooth" 
//     });
// });
const logpg = ()=>{
    window.location.href = 'loginpg.html';
 }
let login = document.querySelector('.in')
login.addEventListener('click', logpg);
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get('scrollTo');
    if (scrollTo) {
        window.scrollTo({
            top: parseInt(scrollTo, 10),
            behavior: 'smooth'
        });
    }
});
