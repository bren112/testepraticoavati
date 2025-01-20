const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.getElementById('userType').value;
    const userInput = document.getElementById('userInput').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (userType === 'email') {
        if (!userInput.includes('@')) {
            messageDiv.textContent = 'Erro: O e-mail deve conter "@"';
            messageDiv.style.color = 'red';
            return;
        }
    } else if (userType === 'username') {
        if (userInput.trim() === '') {
            messageDiv.textContent = 'Erro: O nome de usuário não pode estar vazio.';
            messageDiv.style.color = 'red';
            return;
        }
    }

    if (password.length < 6) {
        messageDiv.textContent = 'Erro: A senha deve ter pelo menos 6 caracteres.';
        messageDiv.style.color = 'red';
        return;
    }

 
    const userExists = registeredUsers.some(user => 
        (userType === 'email' && user.email === userInput) ||
        (userType === 'username' && user.name === userInput) 
        && user.password === password
    );

    if (userExists) {
        messageDiv.textContent = 'Sucesso: Login realizado com sucesso!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Erro: Usuário ou senha inválidos.';
        messageDiv.style.color = 'red';
    }
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('registerPassword').value;
    const registerMessageDiv = document.getElementById('registerMessage');

    if (name.trim() === '') {
        registerMessageDiv.textContent = 'Erro: O nome não pode estar vazio.';
        registerMessageDiv.style.color = 'red';
        return;
    }

    if (!email.includes('@')) {
        registerMessageDiv.textContent = 'Erro: O e-mail deve conter "@"';
        registerMessageDiv.style.color = 'red';
        return;
    }

    if (password.length < 6) {
        registerMessageDiv.textContent = 'Erro: A senha deve ter pelo menos 6 caracteres.';
        registerMessageDiv.style.color = 'red';
        return;
    }


    registeredUsers.push({ name, email, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    registerMessageDiv.textContent = 'Cadastro realizado com sucesso!';
    registerMessageDiv.style.color = 'green';

    
    closeModal();
});


const openModalButton = document.querySelector('.open-modal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', function() {
    modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});


window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
