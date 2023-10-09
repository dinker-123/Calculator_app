let string="";
let buttons=document.querySelectorAll('.button');
const specicalChars=["%","*","/","-","+","="];

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="&&string!==""&&!string.includes("/0")){

            string=eval(string);
            document.querySelector('input').value=string;
            string="";  
          }else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector('input').value=""; 
          }else if(string.includes("/0")){
            document.querySelector('input').value="Cannot divide by zero";
          }  
          else{
            console.log(e.target)
            if(!specicalChars.includes(e.target.innerHTML)||document.querySelector('input').value!==""){
              string=string+e.target.innerHTML;
              document.querySelector('input').value=string;
            }
          }       
    })
})

