/* PRODUCT TAB SHOWCASE */
function showTab(tabId) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    var tabButtons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    document.getElementById(tabId).style.display = "block";
    document.querySelector(`button[onclick="showTab('${tabId}')"`).classList.add("active");
}


/* FOOTER SECTION CURRENT YEAR GENERATE */
// Get current year
        const currentYear = new Date().getFullYear();
        // Find element with the id "currentYear"
        const yearElement = document.getElementById('currentYear');
        //Set the innerHTML of the element to the current year
        yearElement.innerHTML = currentYear;