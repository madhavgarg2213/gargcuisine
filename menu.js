
document.querySelector('.dine').addEventListener("click", () => {
    window.scrollTo({
        top: 1139,
        behavior: "smooth" 
    });
});
document.querySelector('.luncheon').addEventListener("click", () => {
    window.scrollTo({
        top: 2478,
        behavior: "smooth" 
    });
});
document.querySelector('.brunch').addEventListener("click", () => {
    window.scrollTo({
        top: 3825,
        behavior: "smooth" 
    });
});
document.querySelector('.cocktails').addEventListener("click", () => {
    window.scrollTo({
        top: 4915,
        behavior: "smooth" 
    });
});
const logpg = ()=>{
    window.location.href = 'loginpg.html';
 }
let login = document.querySelector('.in')
login.addEventListener('click', logpg);

document.querySelector('.book').addEventListener('click', ()=>{
    window.location.href = 'index.html?scrollTo=1952';
    
})

