document.querySelector('form').addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("done");
});

function toggleOtherInput(selectElement) {
    const otherInput = document.getElementById("otherInput1234");
    if (selectElement.value == "other") {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = ''; // Clear previous text if hidden
    }
    console.log("done");
}

const otherInput = document.getElementById("otherInput1234");
console.log("done");