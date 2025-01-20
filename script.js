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
    } else {
       
        messageDiv.textContent = 'Sucesso: Login realizado com sucesso!';
        messageDiv.style.color = 'green';

    }
});