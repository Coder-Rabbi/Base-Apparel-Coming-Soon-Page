const form = document.getElementById("emailForm");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {

    const validEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(!validEmail.test(email.value)){
        email.classList.add("email-error");
        e.preventDefault();
    }
})