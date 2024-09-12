
// localStorage.clear()
// let arr=[];
let tblcontainer=document.getElementById("tblContainer");
// localStorage.setItem("Books", JSON.stringify(arr));
let arr=JSON.parse(localStorage.getItem("Books"));

// 1.ADD BOOK FORM,EVENT
let formContainer=document.getElementById("formContainer");
let addBookBtn=document.getElementById("addBookBtn");

addBookBtn.addEventListener("click", ()=>{
    formContainer.style.display="flex";
     tblcontainer.style.display="none";
     document.getElementById("searchContainer").style.display="none";
   
});

let form=document.getElementById("form");
let inpTag=document.getElementById("BookName");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(inpTag.value=="")
    {
        inpTag.style.cssText=`border-color:red`;
        let h4=document.getElementById("rr")
            h4.innerHTML="Required";
            h4.style.color="red"


            let abc=document.getElementById("err")
            abc.innerHTML="";
            abc.style.color="green"
            return;
    }
    else
    {
        //
        inpTag.style.cssText=`border-color:black`;
        let h4=document.getElementById("rr")
            h4.innerHTML="";
            h4.style.color="red"
        //
        let obj={};
    for(let i=0;i<arr.length;i++)
    {
        let obj=arr[i];
        
        if(obj[inpTag.value]==inpTag.value)
        {
            let h4=document.getElementById("err")
            h4.innerHTML="Already Added....!"
            return;
                    
        }
        else{
            let h4=document.getElementById("err")
            h4.innerHTML="Book Added Successfully!!";
            h4.style.color="green"
        }
    }
    obj[(inpTag.value)]=inpTag.value;
    arr.push(obj);
    localStorage.setItem("Books", JSON.stringify(arr));
    }
    
});


let h3=document.querySelector("h3");
let table=document.querySelector("table");
let displayBtn=document.getElementById("displayBooksBtn");
// 2.DISPLAY ALL BOOK EVENT
displayBtn.addEventListener("click",()=>
{
    formContainer.style.display="none";
    tblcontainer.style.display="flex";
    searchContainer.style.display="none";
    while(table.hasChildNodes())
    {
       table.removeChild(table.firstChild); 
    }
    let theadArr=["Book ID", "Book Name", "Delete"];
    let thead=document.createElement("tr");
    table.appendChild(thead);
    for(let i=0;i<theadArr.length;i++)
    {
        let td=document.createElement("th");
        td.innerHTML=theadArr[i];
        thead.appendChild(td);
    }

    for(let i=0;i<arr.length;i++)
    {
        let obj=arr[i];
        for (const key in obj)
        {
            let tr=document.createElement("tr");
            let td0=document.createElement("td");
            let td1=document.createElement("td");
            let td2=document.createElement("td");

            td2.addEventListener("click",()=>{
                td2.parentElement.remove();
                // obj[(inpTag.value)]="";
                arr.splice(i,i+1);;
                localStorage.setItem("Books", JSON.stringify(arr));

            });
            td0.innerHTML=i+1;
            td1.innerHTML=obj[key];
            td2.innerHTML="Delete";
            table.appendChild(tr);
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
    }

});
//==============================================

// 3. Search BOOK

let searchBtn=document.getElementById("searchBookBtn");
let searchContainer=document.getElementById("searchContainer")
searchBtn.addEventListener("click", ()=>
{
    formContainer.style.display="none";
    tblcontainer.style.display="none";
     searchContainer.style.display="flex";
});

let form22=document.getElementById("form2");
let deep=document.getElementById("deep");
form22.addEventListener("submit", (e)=>
{
    e.preventDefault();
    while(table.hasChildNodes())
        {
           table.removeChild(table.firstChild); 
        }
        let theadArr=["Book ID", "Book Name", "Delete"];
        let thead=document.createElement("tr");
        table.appendChild(thead);
        
        for(let i=0;i<theadArr.length;i++)
        {
            let td=document.createElement("th");
            td.innerHTML=theadArr[i];
            thead.appendChild(td);
        }
    
        for(let i=0;i<arr.length;i++)
        {
            let obj=arr[i];
            for (const key in obj)
            {
                if(key===(document.getElementById("search")).value)
                {
                    let tr=document.createElement("tr");
                    let td0=document.createElement("td");
                    let td1=document.createElement("td");
                    let td2=document.createElement("td");
                    td0.innerHTML=i+1;
                    td1.innerHTML=obj[key];
                    td2.innerHTML="Delete";
                    table.appendChild(tr);
                    tr.appendChild(td0);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    document.getElementById("err2").innerHTML="";
                    tblcontainer.style.display="flex";
                    td2.addEventListener("click",()=>{
                        td2.parentElement.remove();
                        arr.splice(i,i+1);
                        localStorage.setItem("Books", JSON.stringify(arr));
                    });
                    return;
                    
                }
                else
                {
                    tblcontainer.style.display="none";
                    document.getElementById("err2").innerHTML="Not Found....";
                    document.getElementById("err2").style.color="red";
                    // return;
                }
                // return;
            }
        }
});


