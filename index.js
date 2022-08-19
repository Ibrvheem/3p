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
let solutions = document.getElementById("solutions")
function displaySolution(){
    console.log("working")
    if(solutions.style.display === "none"){
        solutions.style.display = "flex"
    }else if(solutions.style.display === "flex"){
        solutions.style.display = "none"
    }else{
        solutions.style.display = "none"
    }
}
let support = document.getElementById("support")
function displaySupport(){
    console.log("working")
    if(support.style.display === "none"){
        support.style.display = "flex"
    }else if(support.style.display === "flex"){
        support.style.display = "none"
    }else{
        support.style.display = "none"
    }
}
let about = document.getElementById("about")
function displayAbout(){
    console.log("working")
    if(about.style.display === "none"){
        about.style.display = "flex"
    }else if(about.style.display === "flex"){
        about.style.display = "none"
    }else{
        about.style.display = "none"
    }
}