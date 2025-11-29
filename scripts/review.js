const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-US');
const lastModifiedTime = new Date(document.lastModified).toLocaleTimeString('en-US');
const lastModifiedParagraph = document.getElementById('lastmodified');
lastModifiedParagraph.innerHTML = `Last modified on: ${lastModifiedDate} at ${lastModifiedTime}`;

const year = new Date().getFullYear();
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = year;
}

let count = Number(localStorage.getItem("reviewSubmit")) || 0;
count++;
localStorage.setItem("reviewSubmit", count);
document.getElementById("counter").textContent = `You have submitted ${count} review(s).`;