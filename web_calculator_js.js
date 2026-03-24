// Select all calculator buttons
const all_buttons = document.querySelectorAll(".btn");

//Select  display input
const display_text = document.getElementById("display");

//Track if "=" was pressed
let equal_clicked = false;

const operators = ["+", "-", "*", "/"];

// Check if the last character in the display is an operator
function is_last_char_operator() {
    // Get the last character of the current expression
    let last_char = display_text.value.slice(-1);

    // Return true if it is an operator (+, -, *, /)
    return operators.includes(last_char);
}

// Function to calculate result
function calculate_result()
{
   
    // This function uses eval() for simplicity.
    // In real-world applications, eval() should be avoided for security reasons.
    // The same logic can be implemented manually for safer code.
    try 
    {
        display_text.value = eval(display_text.value);
    }
    catch 
    {
        display_text.value = "Error!";
    }
   
}

// Loop trough all buttons
all_buttons.forEach(button => {button.addEventListener("click", function () //DOPO RICORDA I COMMENTI PER TUTTO
{
    // Reset display if previous result was an error
    if (display_text.value == "Error!") 
        { display_text.value = "";}


    // Handle behavior after "=" was clicked
    if (equal_clicked && button.value !== "=")
    {
        // If a number is pressed -> clear display
        if (!["+", "-", "*", "/"].includes(button.value))
        { display_text.value = ""};
        equal_clicked = false;
    }

    switch(button.value)
    {
        case "C":
            // Clear display
            display_text.value = "";
            break;
        case "=":
            // Calculate result
            calculate_result();
            equal_clicked = true;
            break;
        default:
            // Prevent inserting two operators in a row (e.g. "7++")
            if (operators.includes(button.value) && is_last_char_operator())
            {
                return;
            }
            // Append the clicked value (number or operator) to the display
             display_text.value += button.value;
    }
}
)})

