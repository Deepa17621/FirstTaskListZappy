//1.Login Page - Business Logics
let firstName=document.getElementById("firstName");
let password=document.getElementById("loginPass");

let loginForm=document.querySelector("#loginForm");

var localStorageData;
// console.log(localStorageData);
//Login Form Event
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
     localStorageData=JSON.parse(localStorage.getItem(firstName.value));
    console.log(localStorageData);
    //Handling Error by Ternary Operator
    !firstName.value?setError(firstName):setSuccess(firstName);

    !password.value?setError(password):setSuccess(password);

    if(!localStorageData||firstName.value!=localStorageData.FirstName || password.value!=localStorageData.Password )
    {
        firstName.style.cssText=`border-color:red`;
        password.style.cssText=`border-color:red`;
        let er=document.getElementById("error1");er.textContent="Not Found!..Enter Valid Credentials.";
        er.style.color="red";
    }
    else
    {
        if(firstName.value==localStorageData.FirstName&&password.value==localStorageData.Password)
        {
            let er=document.getElementById("error1");er.textContent=" Successfully LoggedIn";
            er.style.color="#00FF00"; 
            document.getElementById("secondPage").style.display="flex";
            document.getElementById("frontPage").style.display="none";
        }
    }

    
    // console.log(localStorageData);
});
console.log("Outside the event");
setTimeout(()=>{console.log(localStorageData)},10000);


//-------------------------Login Form Completed------------------

//2.CheckBalance-Business Logic
let checkBalBtn=document.getElementById("idForCheckBal");
let displayBalance=document.createElement("h3");
displayBalance.style.cssText=`
        text-align:center;
        color:green`;
        document.getElementById("secondPage").appendChild(displayBalance);
        
checkBalBtn.addEventListener("click", ()=>{
    document.getElementById("secondPage").style.display="flex";
    document.getElementById("frontPage").style.display="none";
    document.getElementById("deposit").style.display="none";
    document.getElementById("withdrawAmount").style.display="none";

    if(firstName.value==localStorageData.FirstName&&password.value==localStorageData.Password)
    {
        displayBalance.innerHTML=`Your Account Balance: Rs.${localStorageData.Balance}/-`;
    }
});

//3.Deposit -Business Logic
let depositBtn=document.getElementById("idForDeposit");
let depositForm=document.getElementById("depositForm")

let depositAmount=document.getElementById("depositAmount");

depositBtn.addEventListener("click",()=>{
    console.log("Inside the deposit:   ");
    console.log(localStorageData);
    document.getElementById("secondPage").style.display="none";
    document.getElementById("frontPage").style.display="none";
    document.getElementById("deposit").style.display="flex";
    document.getElementById("withdrawAmount").style.display="none";

});
 //DepositForm  Ok Event
 depositForm.addEventListener("submit",(e)=>
    {
        e.preventDefault();
        console.log("FirstName"+firstName.value);
        //Handling Error by Ternary Operator
        !depositAmount.value?setError(depositAmount):setSuccess(depositAmount);
        if(firstName.value==localStorageData.FirstName&&password.value==localStorageData.Password)
        {
            let depsoitedMoney=Number(localStorageData.Balance)+Number(depositAmount.value);
            localStorageData.Balance=depsoitedMoney;
            localStorage.setItem(`${localStorageData.FirstName}`,JSON.stringify(localStorageData) );
            let er=document.getElementById("error2");
            er.textContent=`Amount Deposited SuccessFully \n Your Bank Balance=${depsoitedMoney}`;
            er.style.color="#00FF00"; 
        }
    });

    //Deposit Form Cancel Event
    let depoCancelBtn=document.getElementById("depoCancelBtn");
    depoCancelBtn.addEventListener("click", ()=>
    {
        document.getElementById("deposit").style.display="none";
        document.getElementById("secondPage").style.display="flex";
        document.getElementById("frontPage").style.display="none";
        document.getElementById("withdrawAmount").style.display="none";
    });


//4.withdrawMoney -Business Logic
let withdrawBtn=document.getElementById("idForWithdraw");
let formWithdraw=document.getElementById("withdrawForm");
let amountInp=document.getElementById("amountInp");
withdrawBtn.addEventListener("click",()=>{
    document.getElementById("secondPage").style.display="none";
    document.getElementById("frontPage").style.display="none";
    document.getElementById("deposit").style.display="none";
    document.getElementById("withdrawAmount").style.display="flex";
});
//Event For Withdraw Ok
formWithdraw.addEventListener("submit",(e)=>
    {
        e.preventDefault();
        if(amountInp.value=="")
        {
            setError(amountInp);
        }
        else if(firstName.value==localStorageData.FirstName&&password.value==localStorageData.Password)
        {
            if(Number(amountInp.value)>Number(localStorageData.Balance))
            {
                amountInp.style.borderColor="red";
                let er=document.getElementById("error3");
                er.textContent=`Account Balance is Not Sufficient To Withdraw.`;
                er.style.color="#FF0000";
                
            }
            else
            {
                //Start---------------------
                let BalAfterWithdrawMoney=Number(localStorageData.Balance)-Number(amountInp.value);
                localStorageData.Balance=BalAfterWithdrawMoney;
                localStorage.setItem(`${localStorageData.FirstName}`,JSON.stringify(localStorageData) );
                let er=document.getElementById("error3");
                er.textContent=`Successfully Withdrawn  Money:${amountInp.value} \n Your Bank Balance=${BalAfterWithdrawMoney}`;
                er.style.color="#00FF00"; 
                //End-----------------------
            }
        }
        
    });

    //Event For Withdraw Cancel

    let CancelBtn=document.getElementById("CancelBtn");
    CancelBtn.addEventListener("click", ()=>
    {
        document.getElementById("secondPage").style.display="flex";
        document.getElementById("frontPage").style.display="none";
        document.getElementById("deposit").style.display="none";
        document.getElementById("withdrawAmount").style.display="none";

    });

//BackToHomePage Display Property 
let backToHome=document.querySelectorAll(".btHBtn");
backToHome.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.getElementById("secondPage").style.display="flex";
    });
});


//Empty Field Error Function
function setError(tag)
{
    tag.style.borderColor="red";
    tag.nextElementSibling.textContent="required..";
    tag.nextElementSibling.style.cssText=`color:red`;
}

//Recover Feild From Error Handling
function setSuccess(tag)
{
    tag.style.cssText=`border-color:black`;
    tag.nextElementSibling.textContent="";
}