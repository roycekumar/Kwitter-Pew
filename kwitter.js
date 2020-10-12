 function addUser(){
     user_name=document.getElementById("user_name").value;
     if(user_name=="Sahil Merchant"){
        localStorage.setItem("user_name",user_name);
        localStorage.setItem("Admin","No");
        window.location="passcode.html";
     }
     else if(user_name=="sahil merchant"){
        localStorage.setItem("user_name",user_name);
        localStorage.setItem("Admin","No");
        window.location="passcode.html";
     }
     else if(user_name=="sahil"){
        localStorage.setItem("user_name",user_name);
        localStorage.setItem("Admin","No");
        window.location="passcode.html";
     }
     else if(user_name=="Sahil"){
        localStorage.setItem("user_name",user_name);
        localStorage.setItem("Admin","No");
        window.location="passcode.html";
     }
     else if(user_name=="Admin"){
        localStorage.setItem("user_name","Royce Kumar");
        localStorage.setItem("Admin","Yes");
        window.location="passcode.html";
     }
     else if(user_name=="Harneet"){
      localStorage.setItem("user_name",user_name);
      localStorage.setItem("Admin","No");
      window.location="passcode.html";
   }
     else{
         document.getElementById("not").innerHTML="User Name not found";
     }
 }
 
