   const password1 = document.getElementById('Password1');
              const password2 = document.getElementById('Password2');
              const message = document.getElementById('password-message');

              const signpassword3 = document.getElementById('signinpwd');
              const signemail1 = document.getElementById('signinemail');


              function checkPasswordsMatch() {
                if (password1.value && password2.value && password1.value !== password2.value) {
                  message.textContent = "Passwords do not match!";
                } else {
                  message.textContent = "Passwords match";
                }
              }

              password1.addEventListener('input', checkPasswordsMatch);
              password2.addEventListener('input', checkPasswordsMatch);
