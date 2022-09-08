let help = document.getElementById("help")
let navbar = document.getElementById("navbar")
let solutions = document.getElementById("solutions")
let support = document.getElementById("support")
let about = document.getElementById("about")
let educators = document.getElementById("educators")
let subject2 = document.getElementById("subject2")
let solution2 = document.getElementById("solution2")
let company = document.getElementById("company")
let support2 = document.getElementById("support2")
let openDisplay = document.getElementById("opendisplay")






function displayHelp(){
    if(help.style.display === "none"){
        help.style.display = "flex";
        solutions.style.display = "none";
        support.style.display = "none";
        about.style.display = "none";
        openDisplay.style.display = "none";
    }else if(help.style.display === "flex"){
        help.style.display = "none"
    }else{
        help.style.display = "none"
    }
}
function displaySolution(){
    console.log("working")
    if(solutions.style.display === "none"){

        help.style.display = "none";
        solutions.style.display = "flex";
        support.style.display = "none";
        about.style.display = "none";
        openDisplay.style.display = "none";
        }else if(solutions.style.display === "flex"){
        solutions.style.display = "none"
    }else{
        solutions.style.display = "none"
    }
}
function displaySupport(){
    console.log("working")
    if(support.style.display === "none"){

        help.style.display = "none";
        solutions.style.display = "none";
        support.style.display = "flex";
        about.style.display = "none";
        openDisplay.style.display = "none";
        }else if(support.style.display === "flex"){
        support.style.display = "none"
    }else{
        support.style.display = "none"
    }
}
function displayAbout(){
    console.log("working")
    if(about.style.display === "none"){

        help.style.display = "none";
        solutions.style.display = "none";
        support.style.display = "none";
        about.style.display = "flex";
        openDisplay.style.display = "none";
        }else if(about.style.display === "flex"){
        about.style.display = "none"
    }else{
        about.style.display = "none"
    }
}
function displayEducators(){
    console.log("working")
    if(educators.style.display === "none"){
        educators.style.display = "flex"
        subject2.style.display = "none"
        solution2.style.display = "none"
        company.style.display = "none"
        support2.style.display = "none"
    }else if(educators.style.display === "flex"){
        educators.style.display = "none"
    }else{
        educators.style.display = "none"
    }
    console.log("edu")
}
function displaySubject2(){
    console.log("working")
    if(subject2.style.display === "none"){
        educators.style.display = "none"
        subject2.style.display = "flex"
        solution2.style.display = "none"
        company.style.display = "none"
        support2.style.display = "none"
    }else if(subject2.style.display === "flex"){
        subject2.style.display = "none"
    }else{
        subject2.style.display = "none"
    }
    console.log("sub")
}
function displaySolution2(){
    console.log("working")
    if(solution2.style.display === "none"){
        educators.style.display = "none"
        subject2.style.display = "none"
        solution2.style.display = "flex"
        company.style.display = "none"
        support2.style.display = "none"
    }else if(solution2.style.display === "flex"){
        solution2.style.display = "none"
    }else{
        solution2.style.display = "none"
    }
    console.log("sub")
}
function displayCompany(){
    console.log("working")
    if(company.style.display === "none"){
        educators.style.display = "none"
        subject2.style.display = "none"
        solution2.style.display = "none"
        company.style.display = "flex"
        support2.style.display = "none"
    }else if(company.style.display === "flex"){
        company.style.display = "none"
    }else{
        company.style.display = "none"
    }
    console.log("sub")
}
function displaySupport2(){
    console.log("working")
    if(support2.style.display === "none"){
        educators.style.display = "none"
        subject2.style.display = "none"
        solution2.style.display = "none"
        company.style.display = "none"
        support2.style.display = "flex"
    }else if(support2.style.display === "flex"){
        support2.style.display = "none"
    }else{
        support2.style.display = "none"
    }
    console.log("sub")
}
function displays(){
    console.log("working")
    if(openDisplay.style.display === "none"){
        openDisplay.style.display = "flex"
    }else if(openDisplay.style.display === "flex"){
        openDisplay.style.display = "none"
    }else{
        openDisplay.style.display = "none"
    }
    console.log("sub")
}



