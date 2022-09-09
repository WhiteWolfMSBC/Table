
function addData(){
    let Sno=document.getElementById("Sno").value;
    localStorage.setItem("textvalue",Sno);
    document.getElementById("snno").innerHTML=localStorage.getItem("textvalue");

    let name=document.getElementById("txt").value;
    localStorage.setItem("textvalue",name);
    document.getElementById("name").innerHTML=localStorage.getItem("textvalue");

    let age=document.getElementById("Age").value;
    localStorage.setItem("textvalue",age);
    document.getElementById("age").innerHTML=localStorage.getItem("textvalue");

return false;


}



function deleteData(){
    localStorage.clear();
    document.getElementById("name").innerHTML=localStorage.getItem("textvalue");
    document.getElementById("age").innerHTML=localStorage.getItem("textvalue");
    document.getElementById("snno").innerHTML=localStorage.getItem("textvalue");

} 

