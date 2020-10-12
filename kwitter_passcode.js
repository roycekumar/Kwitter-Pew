function password_check(){
    var user=localStorage.getItem("user_name");
    var written=document.getElementById("password").value;
    if(user=="sahil"){
        if(written=="9930"){
            window.location="kwitter_room.html";
        }
        else{
            document.getElementById("noting").innerHTML="Wrong Password";
        }
    }
    else if(user=="Sahil"){
        if(written=="9930"){
            window.location="kwitter_room.html";
        }
        else{
            document.getElementById("noting").innerHTML="Wrong Password";
        }
    }
    else if(user=="Sahil Merchant"){
        if(written=="9930"){
            window.location="kwitter_room.html";
        }
        else{
            document.getElementById("noting").innerHTML="Wrong Password";
        }
    }
    else if(user=="Royce Kumar"){
        if(written=="080576"){
            window.location="kwitter_room.html";
        }
        else{
            document.getElementById("noting").innerHTML="Wrong Password";
        }
    }
    else if(user=="Harneet"){
        if(written=="7890"){
            window.location="kwitter_room.html";
        }
        else{
            document.getElementById("noting").innerHTML="Wrong Password";
        }
    }
}
function logout(){
    localStorage.removeItem("user_name");
    window.location="index.html";
}