// This function runs when button is clicked
function convert() {

    // Get value from input box
    let c = document.getElementById("celsius").value;

    // Convert Celsius to Fahrenheit
    let f = (c * 9 / 5) + 32;

    // Show result on the page
    document.getElementById("result").innerHTML =
        "Fahrenheit: " + f;
}
