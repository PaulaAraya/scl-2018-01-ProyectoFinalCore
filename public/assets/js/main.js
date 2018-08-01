document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        console.log(user);
        hideAll();
        document.getElementById('menuPage').style.display = 'block';
        document.getElementById('userData').innerHTML= '<i class="fa fa-sign-out" style="margin:5%;font-size:22px;"><a onClick="signOut()">Cerrar Sesion</a></i>';
      }else{
        hideAll();
        document.getElementById('menuPage').style.display = 'none'
        document.getElementById('userData').innerHTML='';// para limpiar al deslogearse
        login();
      }
    });
  } catch (e) {
    console.error(e);
  }
  
  document.getElementById('btnRegistro').addEventListener('click',progessRegister );
  addListenerToClass('btnrecepcion', showRegister);
  addListenerToClass('btnoficina', showAdmission);
  addListenerToClass('btnadministracion', showAdministrador);
  firebase.database().ref('/registro').on('value', drawRegister);
});

