function validarCampos(event) {
  
  event.preventDefault(); 
  
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagemUsuario = document.getElementById("mensagemUsuario").value.trim();
  const mensagem = document.getElementById("mensagem");

 
  if (!nome || !email || !mensagemUsuario) {
    mensagem.textContent = "Por favor, preencha todos os campos.";
    mensagem.style.color = "red";
    return false; 
  }

  
  mensagem.textContent = "Mensagem enviada com sucesso!";
  mensagem.style.color = "green";

  
  document.getElementById("contact-form").reset();  

  return false; 
}


document.getElementById("contact-form").addEventListener("submit", validarCampos);
