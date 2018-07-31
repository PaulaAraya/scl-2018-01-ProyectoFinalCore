const addListenerToClass = (className, callback) => {
  const elements = document.getElementsByClassName(className);
  for (let i = 0; i < elements.length; i++) {
    elements.item(i).addEventListener('click', callback);    
  }
};
const hideAll = () => {
  document.getElementById('registerPage').style.display = 'none';
  document.getElementById('admissionPage').style.display = 'none';
  document.getElementById('administradorPage').style.display = 'none';
}

const showAdmission = () => {
  hideAll();
  document.getElementById('admissionPage').style.display = 'block';
  document.getElementById('menuPage').style.display = 'none'
}

const showAdministrador = () => {
  hideAll();
  document.getElementById('administradorPage').style.display = 'block';
  document.getElementById('menuPage').style.display = 'none'
}

const showRegister = () => {
  hideAll();
  document.getElementById('registerPage').style.display = 'block';
  document.getElementById('menuPage').style.display = 'none'
}
