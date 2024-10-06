
// New code
const exoplanetList = document.getElementById("exoplanet-list");
const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");

fetch("https://exoplanetarchive.ipac.caltech.edu/TAP/sync")
    .then(response => response.json())
    .then(data => {
        const exoplanets = data.results;
        exoplanetList.innerHTML = "";
        exoplanets.forEach(exoplanet => {
            const listItem = document.createElement("li");
            listItem.textContent = `${exoplanet.name} - Size: ${exoplanet.radius} - Mass: ${exoplanet.mass}`;
            exoplanetList.appendChild(listItem);
        });
    });

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const size = document.getElementById("size").value;
//     const mass = document.getElementById("mass").value;
//     fetch(`https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=SELECT * FROM ps WHERE radius > ${size} AND mass > ${mass}`)
//         .then(response => response.json())
//         .then(data => {
//             const exoplanets = data.results;
//             searchResults.innerHTML = "";
//             exoplanets.forEach(exoplanet => {
//                 const paragraph = document.createElement("p");
//                 paragraph.textContent = `${exoplanet.name} - Size: ${exoplanet.radius} - Mass: ${exoplanet.mass}`;
//                 searchResults.appendChild(paragraph);
//             });
//         });
// });