let titleInput = document.getElementById("title_input");
let mainTitle = document.getElementById("main_title")
let nounInput = document.getElementById("noun");
let verbInput = document.getElementById("verb");
let adjInput = document.getElementById("adjective");
let submitBtn = document.getElementById("submit_button");

function changeTitle(e){
    e.preventDefault();
    let userInput = titleInput.value; 
    mainTitle.textContent = userInput;
}

function detectBlank(e){
    e.preventDefault();

    let title = titleInput.value;
    let noun = nounInput.value;
    let adj = adjInput.value;

    if (title === "" || noun === "" || adj === ""){
        alert("Please fill in all fields");
        return;
    }
    


}



titleInput.addEventListener("input", changeTitle);
submitBtn.addEventListener("click", detectBlank);
