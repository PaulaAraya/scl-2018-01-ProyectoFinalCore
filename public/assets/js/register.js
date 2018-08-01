//regista las visitas
const progessRegister = () => {
  const currentUser = firebase.auth().currentUser;
  const nameInput = document.getElementById('name');
  const lastNameInput =  document.getElementById('lastName');
  const rutInput = document.getElementById('rut');
 
 
  //variable con ruta agregar nuevo registro
  const rutaReguster = firebase.database().ref().child('registro').push({
    creator: currentUser.displayName,
    name: nameInput.value,
    lastName: lastNameInput.value,
    rut: rutInput.value
  }).key
  if(document.getElementById('photo').files[0]) {
    const file = document.getElementById('photo').files[0];
    firebase.storage().ref(`/registro/${rutaReguster}`).put(file).then((snapshot) => {
      snapshot.ref.getDownloadURL().then((downloadURL) => {
        firebase.database().ref().child('registro/' + rutaReguster).update({
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

const drawRegister = (snapshot)=>{
  let printRegister = '';
  Object.entries(snapshot.val()).forEach((registro) => {
    console.log(registro);
    printRegister = `<tr>
    <td> ${registro[1].name}</td>
    <td> ${registro[1].lastName}</td>
    <td> ${registro[1].rut}</td>
    </tr>` + printRegister;
 });
 document.getElementById('printRegister').innerHTML = printRegister;
};
