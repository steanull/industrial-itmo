const formCallBack = document.querySelector('.callback__about');
const inputFirstname= formCallBack.querySelector('.callback__firstname');
const inputSurname = formCallBack.querySelector('.callback__surname');
const textareaMessage= formCallBack.querySelector('.callback__message');
const inputPhone= formCallBack.querySelector('.callback__phone');
const inputMail= formCallBack.querySelector('.callback__mail');
const buttonSendForm = formCallBack.querySelector('.callback__submit');

buttonSendForm.addEventListener('click', function(event) {
  event.preventDefault(); 
  if(requestFields(inputFirstname.value, inputSurname.value, textareaMessage.value, inputPhone.value, inputMail.value)){
    const formObj = {
      'firstName' : inputFirstname.value,
      'surname' : inputSurname.value,
      'message' : textareaMessage.value,
      'phone' : inputPhone.value,
      "email" : inputMail.value,
    }
    console.log(formObj)
    return formObj;
  }
})


function requestFields(...arrayFields) {
  result = arrayFields.every(element => {
    if(element !== '' && element !== undefined) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}