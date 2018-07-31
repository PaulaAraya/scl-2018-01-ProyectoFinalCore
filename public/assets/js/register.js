//regista las visitas

const progessRegister = () => {
  const currentUser = firebase.auth().currentUser;
  const nameInput = document.getElementById('name');
  const lastNameInput =  document.getElementById('lastName');
  const rutInput = document.getElementById('rut');
  const photo = document.getElementById('photo');
 
 
  //variable con ruta agregar nuevo registro
  const rutaReguster = firebase.database().ref().child(`registro`).push().key;
  firebase.database().ref(`registro/${rutaReguster}`).set({
    creator: currentUser.uid,
    name: nameInput.value,
    lastName: lastNameInput.value,
    rut: rutInput.value
  });
  name.value = '';
  lastName.value = '';
  rut.value = '';
 };
