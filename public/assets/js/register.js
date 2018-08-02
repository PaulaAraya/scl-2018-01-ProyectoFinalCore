//regista las visitas
const progessRegister = () => {
  const currentUser = firebase.auth().currentUser;
  const nameInput = document.getElementById('name');
  const lastNameInput = document.getElementById('lastName');
  const rutInput = document.getElementById('rut');
  const selectSpace = document.getElementById('selectSpace')

  //variable con ruta agregar nuevo registro
  const rutaRegistro = firebase.database().ref().child('registro').push({
    startedAt: firebase.database.ServerValue.TIMESTAMP,
    creator: currentUser.displayName,
    name: nameInput.value,
    lastName: lastNameInput.value,
    rut: rutInput.value,
    space: selectSpace.value
  }).key

  if (document.getElementById('photo').files[0]) {
    const file = document.getElementById('photo').files[0];
    firebase.storage().ref(`/registro/${rutaRegistro}`).put(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        firebase.database().ref().child('registro/' + rutaRegistro).update({
          photoURL: downloadURL
        });
      }).catch(() => { });
    });
  };
  nameInput.value = '';
  lastName.value = '';
  rut.value = '';
};

const drawPhoto = (url) => {
  if (url) {
    return `<img src="${url}?alt=media" height="128" width="128">`;
  }
  return '';
}

const drawRegister = (snapshot) => {
  let printRegister = '';
  Object.entries(snapshot.val()).forEach((registro) => {
    let date = new Date();
    console.log(registro);
    printRegister = `<tr>
    <td> ${drawPhoto(registro[1].photoURL)}</td>
    <td> ${registro[1].name}</td>
    <td> ${registro[1].lastName}</td>
    <td> ${registro[1].rut}</td>
    <td> ${new Date(registro[1].startedAt)}</td>
    <td> ${registro[1].space}</td>
    </tr>` + printRegister;
  });
  document.getElementById('printRegister').innerHTML = printRegister;
};


