let userName = document.getElementById('userName')
let password = document.getElementById('password')
let btn = document.getElementById('btn')
let emoji = document.getElementById('emoji')


//validating credentials
btn.addEventListener ('click',(e)=>{
    e.preventDefault()  //prevents the page from reloading 
    
    if(userName.value =="p" && password.value == 1234){
        //redirect to home page
        window.location.href ="./project.html"
    }
    else{
  //      alert('invalid credentials')
       emoji.style.display = 'block'
   //  console.log(userName.value, password.value);
    }
    //console.log(userName.value, password.value);
   
} )