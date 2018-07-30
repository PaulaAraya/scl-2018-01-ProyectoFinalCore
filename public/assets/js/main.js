document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    
  firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      console.log(user);
      document.getElementById('userData').innerHTML='Hola' + user.displayName + '<a href="#" onClick="firebase.auth().signOut()">Cerrar Sesion</a>';
    }else{
      document.getElementById('userData').innerHTML='';// para limpiar al deslogearse
    }
  });
} catch (e) {
  console.error(e);
}
});