// 1) Sembrar usuarios por defecto si no existen
    (function seedUsers() {
      if (!localStorage.getItem('users')) {
        const defaultUsers = [
          { username: 'Contadora Ivett',   email: 'admin1@conta.com',   password: 'Admin123', role: 'admin'    },
          { username: 'Contadora Janette', email: 'admin2@conta.com',   password: 'Admin456', role: 'admin'    },
          { username: 'David',             email: 'david@sis.com',      password: 'AdminDev', role: 'admin'    },
          { username: 'Adriel',            email: 'adriel@conta.com',   password: 'Admin123', role: 'admin'    },
          { username: 'Citlali',           email: 'citlali@conta.com',  password: 'Cit123',   role: 'asociado' },
          { username: 'Donnovan',          email: 'donnovan@conta.com', password: 'Donn456',  role: 'asociado' },
          { username: 'Luis',              email: 'luis@conta.com',     password: 'Luis789',  role: 'asociado' }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
      }
    })();

    // 2) Manejar submit del formulario
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const u = document.getElementById('usuario').value.trim();
      const c = document.getElementById('correo').value.trim();
      const p = document.getElementById('loginPassword').value;

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const found = users.find(uObj =>
        uObj.username === u &&
        uObj.email === c &&
        uObj.password === p
      );

      if (found) {
        localStorage.setItem('currentUser', JSON.stringify(found));
        window.location.href = 'index2.html';
      } else {
        showError('Usuario, correo o contraseña incorrectos.');
      }
    });

    // 3) Función para mostrar alerta de error
    function showError(msg) {
      const container = document.getElementById('errorMsg');
      container.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          ${msg}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>
      `;
    }


function togglePasswordVisibility(inputId, toggleIconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(toggleIconId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.src = '../src/img/eye.png'; // Cambiar a imagen de ojo abierto
    } else {
        passwordInput.type = 'password';
        toggleIcon.src = '../src/img/eye-cerrado.png'; // Cambiar a imagen de ojo cerrado
    }
}
