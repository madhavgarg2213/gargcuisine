const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
}
)

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}
)

document.querySelector(".close").addEventListener('click', ()=>{
    window.location.href = "index.html"
})