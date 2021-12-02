
/*Function to display an alert message when the user submits a form*/
function submission() {
    alert("Submission Received. Click OK to close.");
}

/*Function to highlight the navigation tab when the mouse is hovering over it*/
function hoverHighlight(c) {
    c.style.backgroundColor = "dodgerblue";
}

/*Function to remove the highlight on the navigation tab when the mouse is not hovering over it*/
function notHoverHighlight(d) {
    d.style.backgroundColor = "burlywood"
}

/*Function to create a shadow on the box when the mouse is hovering over it*/
function hoverHistory(a) {
    a.style.boxShadow = "15px 15px gray";
}

/*Function to remove the shadow on the box when the mouse is not hovering over it*/
function notHoverHistory(b) {
    b.style.boxShadow = "";
}