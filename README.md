Teste Prático sistema de Login AVATI!
Este projeto consiste em uma aplicação simples de login e cadastro de usuários, onde é possível registrar e autenticar usuários utilizando e-mail ou nome de usuário. O sistema realiza validação de campos, como garantir que o e-mail contenha o caractere "@" e que a senha tenha pelo menos 6 caracteres. As informações de cadastro são armazenadas no localStorage.

Tecnologias Utilizadas
HTML: Estrutura da página.
CSS: Estilos da página (pode ser expandido conforme a necessidade).
JavaScript: Lógica de validação e manipulação do localStorage.
Funcionalidades
Cadastro de usuários: Permite o cadastro de novos usuários com nome, e-mail e senha.
Login de usuários: Permite o login com e-mail ou nome de usuário.
Validação de campos: Verifica se o e-mail contém o caractere "@" e se a senha tem pelo menos 6 caracteres.
Armazenamento de dados: As informações de cadastro são salvas no localStorage, garantindo que os dados persistam entre atualizações de página.
Mensagens de erro e sucesso: O sistema exibe mensagens informando se o login foi bem-sucedido ou se houve erro.
Como Rodar o Projeto
1. Clone o repositório (ou baixe os arquivos)
bash
Copiar
Editar
git clone https://github.com/seu-usuario/login-form.git
cd login-form
2. Abra o arquivo index.html em um navegador
Você pode simplesmente clicar duas vezes no arquivo index.html ou abrir o navegador e usar a opção "Abrir arquivo" para selecionar o arquivo.

3. Interaja com o formulário
Insira um nome de usuário (ou e-mail) e uma senha.
Escolha o tipo de usuário (e-mail ou nome de usuário) e clique no botão "Entrar".
O formulário realizará validações e exibirá mensagens de erro ou sucesso.
Funcionalidades
Escolha entre usar um nome de usuário ou um e-mail para login.
Validação para garantir que o e-mail contém "@" se o tipo de usuário selecionado for e-mail.
Validação para garantir que a senha tenha pelo menos 6 caracteres.
Mensagens de feedback para o usuário.
Tecnologias Utilizadas
HTML
CSS
JavaScript
Contribuição
Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, siga os passos abaixo:

Faça um fork do projeto.
Crie uma nova branch:
git checkout -b feature/nome-da-sua-feature
Faça suas alterações e commit:
git commit -m 'Adicionando nova feature'
Envie para o repositório remoto:
git push origin feature/nome-da-sua-feature
Abra um Pull Request.
Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
