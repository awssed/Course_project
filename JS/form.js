let form=document.querySelector('#zakaz')
let butON=document.querySelector('.open_form')
let butOFF=document.querySelector("#form_off")
butON.addEventListener('click',()=>{
    form.classList.remove('close')
    form.classList.toggle('active')
})
butOFF.addEventListener('click',()=>{
    form.classList.remove('active')
    form.classList.toggle('close')
})