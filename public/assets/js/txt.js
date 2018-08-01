const numberInput = document.getElementById('number'),
textInput = document.getElementById('msg'),
button = document.getElementById('button'),
response = document.querySelector('.response');

button.addEventListener('click',send,false);

function send() {
const number = numberInput.nodeValue.replace(/\D/g,'');
const text = textInput.value;

fetch(' /' , {
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({number: number, text: text})

})
   .then(function(res){
       console.log(res);
   })
   .catch(function(err){
   console.log(err);
});
}