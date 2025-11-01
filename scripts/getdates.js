document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    
    // Removed: Set last modified (line commented out or deleted to not show the date)
    // document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});