let createPage=document.getElementById("submitForm");
let n=0;
// const arr=new Array();
// let arrLength=arr.length;
    let firstName=document.getElementById("fname");
    let lastName=document.querySelector("#lname");
    let mail=document.querySelector("#mail");
    let mobile=document.querySelector("#mobile");
    let dob=document.querySelector("#dob");
    let address=document.querySelector("#address");
    let password=document.querySelector("#passWord");
    let cPassword=document.querySelector("#cPassword");

createPage.addEventListener("click", ()=>{
    // e.preventDefault();

    let obj={};
    let temparr=[firstName, lastName,mail,mobile,dob, address, password, cPassword];

    let key=["FirstName", "LastName","Mail", "Mobile", "Dob", "Address", "Password", "CPassword"];
    
    for(let i=0; i<key.length; i++)
    {
        if(temparr[i].value!="")
        {
            if(key[i]=="CPassword")
                {
                    if(temparr[i].value===password.value)
                    {
                        setSuccess(temparr[i]);
                        obj[key[i]]=temparr[i].value;
                        break;
                    }
                    else{
                        temparr[i].style.cssText=`border-color:red`;
                        temparr[i].nextElementSibling.textContent="password mismatch...";
                        temparr[i].nextElementSibling.style.color="red";
                        break;
    
                    }
                }
            else
            {
                setSuccess(temparr[i]);
                obj[key[i]]=temparr[i].value;
            }
            

        }
        else
        {   
            emptyFieldError(temparr[i]);
        }
    }
    // arr.push(obj);
    // console.log("Json Object");
    // let jsonObj=JSON.stringify(arr);
    // console.log(JSON.stringify(obj));
    obj.Balance='0';
    localStorage.setItem(firstName.value, JSON.stringify(obj));
    console.log(localStorage.getItem(firstName.value));
    console.log(JSON.parse(localStorage.getItem(firstName.value)));
    console.log("Sanjay's Initial Balance");
    console.log(JSON.parse(localStorage.getItem(firstName)).Balance);
    
    alert(`${firstName.value}, Account Created Successfully`);

});
// localStorage.clear();

function emptyFieldError(field)
{
        field.style.cssText=`border-color:red;`;
        field.nextElementSibling.textContent="should'nt be Empty...";
        field.nextElementSibling.style.color="red";
    
}

function setSuccess(tag)
{
    tag.style.cssText=`border-color:black`;
    tag.nextElementSibling.textContent="";
   
}


