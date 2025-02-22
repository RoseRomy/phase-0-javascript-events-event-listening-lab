function addingEventListener() {
    const button = document.getElementById("button");
    if (!button) {
        console.error("Button not found!");
        return;
    }
    button.addEventListener("click", function() { 
        console.log("Button clicked!")     
    });
}
