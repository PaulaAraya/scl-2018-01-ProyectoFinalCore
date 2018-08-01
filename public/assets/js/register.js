//regista las visitas
const progessRegister = () => {
  const currentUser = firebase.auth().currentUser;
  const nameInput = document.getElementById('name');
  const lastNameInput =  document.getElementById('lastName');
  const rutInput = document.getElementById('rut');
  const photo = document.getElementById('photo');
  const selectSpace = document.getElementById('selectSpace')
 
  //variable con ruta agregar nuevo registro
  const rutaRegistro = firebase.database().ref().child(`registro`).push().key;
  firebase.database().ref(`registro/${rutaRegistro}`).set({
    creator: currentUser.uid,
    name: nameInput.value,
    lastName: lastNameInput.value,
    rut: rutInput.value,
    space: selectSpace.value
  });
  nameInput.value = '';
  lastName.value = '';
  rut.value = '';
 };

 const drawRegister = (snapshot)=>{
  let printRegister = '';
  Object.entries(snapshot.val()).forEach((registro) => {
    console.log(registro);
    printRegister = `
    <tr>
    <td> ${registro[1].name}</td>
    <td> ${registro[1].lastName}</td>
    <td> ${registro[1].rut}</td>
    <td> ${registro[1].space}</td>
    </tr>` 
    + printRegister;
 });
 document.getElementById('printRegister').innerHTML = printRegister;
};

