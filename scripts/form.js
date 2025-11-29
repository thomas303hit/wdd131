const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-US');
const lastModifiedTime = new Date(document.lastModified).toLocaleTimeString('en-US');
const lastModifiedParagraph = document.getElementById('lastmodified');
lastModifiedParagraph.innerHTML = `Last modified on: ${lastModifiedDate} at ${lastModifiedTime}`;

const year = new Date().getFullYear();
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = year;
}

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

populateProduct(products);

function populateProduct(products) {
    products.forEach(product => {
        let item = document.createElement("option");
        item.textContent = product.name;
        item.setAttribute("value", product.id);
        document.querySelector("#product").appendChild(item);
    });
}