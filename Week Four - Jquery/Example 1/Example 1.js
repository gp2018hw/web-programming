function appendText() {
    var txt1 = `<div style="border-style:dotted">Test</div>`; // Create text with HTML
    $("body").append(txt1);   // Append new elements
  }

/*The above code creates and append text function. What it does is every time a button is clicked
it creates a dotted border below the button containing the word "Test". There is no limit to how many
times the button can be clicked and the borders do not overlap, one is created under an existing one if
it exists.
*/