let buttons = document.querySelectorAll('.ac');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = "loginpg.html";
    });
});

document.querySelector('.show').addEventListener('click', ()=>{
    document.querySelector('.abc').classList.remove('active')
    document.querySelector('.show').classList.add('active')
})

document.querySelector('.fa-cart-shopping').addEventListener('click', ()=>{
    alert("Login Or SignUp before going to the cart")
})