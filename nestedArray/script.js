let form=document.querySelector("form");

let inp=document.querySelector("#inpTag");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let input;
    try{
        if(inp.value!="")
            {
                input=JSON.parse(inp.value);
            }
    }
    catch(error)
    {
        let output=document.querySelector("#outputTag");
        output.style.color="red";

        output.innerHTML=`Input Error. Please Enter Input in Array Format like mentioned Above..`;
    }
    if(inp==="" || !Array.isArray(input))
    {
        inp.nextElementSibling.style.color="red";
        inp.style.borderColor="red";
        inp.nextElementSibling.innerHTML="Enter Valid Input";
    }
    else
    {
        //Function To Add an Elements
        function recursive(arr)
        {
            return arr.reduce((a,b)=>{
                if(Array.isArray(a))
                {
                    if(Array.isArray(b))
                    {
                        recursive(a) + recursive(b);
                    }
                    else{
                        return recursive(a)+b;
                    }
                }
                else if(Array.isArray(b))
                {
                    return a+recursive(b);
                }
                else 
                {
                    return a+b;
                }
            })
        }

        //Function Call -- Result
        let result=recursive(input);

        //Error Handling
        
        inp.style.borderColor="green";
        inp.nextElementSibling.innerHTML="";

        //output tag Design and content
        let output=document.querySelector("#outputTag");
        output.style.color="green";
        output.innerHTML=`Output: ${result}`;
    }
    
});