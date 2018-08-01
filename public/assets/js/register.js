//regista las visitas
const progessRegister = () => {
  const currentUser = firebase.auth().currentUser;
  const nameInput = document.getElementById('name');
  const lastNameInput =  document.getElementById('lastName');
  const rutInput = document.getElementById('rut');
  const photo = document.getElementById('photo');
 
  //variable con ruta agregar nuevo registro
  const rutaRegistro = firebase.database().ref().child(`registro`).push().key;
  firebase.database().ref(`registro/${rutaRegistro}`).set({
    creator: currentUser.uid,
    name: nameInput.value,
    lastName: lastNameInput.value,
    rut: rutInput.value
  });
  nameInput.value = '';
  lastName.value = '';
  rut.value = '';
 };

 const drawRegister = (snapshot)=>{
  let printRegister =+ '';
  Object.entries(snapshot.val()).forEach((registro) => {
    console.log(registro);
    printRegister = `
    <tr>
    <th> ${registro[1].name}</th>
    <th> ${registro[1].lastName}</th>
    <th> ${registro[1].rut}</th>
    </tr>
    ` + printRegister;
 });
 document.getElementById('printRegister').innerHTML = printRegister;
};
