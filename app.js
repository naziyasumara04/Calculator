let string=" ";
let buttons=document.querySelectorAll(".button");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.target);
        try{
            if(e.target.innerHTML=="="){
                string=eval(string);
                let inp=document.querySelector("input");
            inp.value=string;
            }else if(e.target.innerHTML=="c"){
                string=" ";
                let inp=document.querySelector("input");
            inp.value=string;
    
            }else if(e.target.innerHTML=="Backspace"){
                let inp=document.querySelector("input");
                inp.value=inp.value.slice(0,-1);

            }
            else{
            string=string+e.target.innerHTML;
            let inp=document.querySelector("input");
            inp.value=string;
            }

        }catch(err){
            console.log("error is",err);
        }
       
    });
});