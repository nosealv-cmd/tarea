const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e) {
  let errores = [];

  if (nombre.value.trim() === '') {
    errores.push('El nombre es obligatorio');
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    errores.push('El correo debe contener "@" y "."');
  }

  if (password.value.length < 8) {
    errores.push('La contraseña debe tener mínimo 8 caracteres');
  }

  if (errores.length > 0) {
    e.preventDefault();
    alert(errores.join('\n'));
  }
});