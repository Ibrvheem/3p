let help = document.getElementById("help")
let navbar = document.getElementById("navbar")
function displayHelp(){
    if(help.style.display === "none"){
        help.style.display = "flex"
    }else if(help.style.display === "flex"){
        help.style.display = "none"
    }else{
        help.style.display = "none"
    }
}