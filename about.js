document.querySelector('.rev').addEventListener('click', ()=>{
    document.querySelector('.rev').classList.add('hide');
    document.querySelector('.write').classList.remove('hide')
})
document.querySelector('.submit').addEventListener('click',()=>{
    alert("Thank you for the feedback")
})
document.querySelector('.book').addEventListener('click', ()=>{
    window.location.href = 'index.html?scrollTo=1952';
    
})
const logpg = ()=>{
    window.location.href = 'loginpg.html';
 }
let login = document.querySelector('.in')
login.addEventListener('click', logpg);