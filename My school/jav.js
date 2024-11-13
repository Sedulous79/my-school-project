const bar = document.getElementById('bar');
const nav  = document.getElementById('navbar');
const close = document.getElementById('close');

/*if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}else{
    bar.addEventListener('click', ()=>{
        console.log('Hello')
    })
}
/*if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
        
    })
}*/
/*bar.onclick = ()=>{
    if(!nav){
        nav.classList.add('close')
    }else{
        nav.classList.add('active')
    }
}*/


bar.onclick = function(){
    nav.classList.toggle('active')
    const isopen = nav.classList.contains('active')
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#txt1').onkeydown = ()=>{
        if(document.querySelector('#txt1').value.length > 0){
            document.querySelector('#sub').disabled = false;
        }else{
            document.querySelector('#sub').disabled = true;
        }
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#txt').onkeydown = ()=>{
        if(document.querySelector('#txt').value.length > 0){
            document.querySelector('#subb').disabled = false;
        }else{
            document.querySelector('#subb').disabled = true;
        }
    }
})


// let form = document.forms[0]
// form = ()=>{
//     let texts = document.querySelector('#texts');
//     let emails = document.querySelector('#emails');
//     let Subject = document.querySelector('#Subject');
//     let messages = document.querySelector('.messages');

//     if(texts.value.length ==0 && emails.value.length == 0 && Subject.value.length == 0 && messages.value.length ==0){
        
//         document.querySelector('#k').innerHTML=' complete the form';
//         document.querySelector('#k').style.color='red';
        
//     }else{
//         document.querySelector('#k').innerHTML='succesful'.toLocaleUpperCase();
//         document.querySelector('#k').style.color='green';
       
//     }
//     return false;

// }

// showpass(){
//     if(this.form[0].checked == true){
//         this.form[1].type = 'text'
//     }else{
//         this.form[1].type ='password'
//     }
// }





















