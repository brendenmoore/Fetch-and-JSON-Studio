// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            displayNumberOfAstronauts(json);
            json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);
            let divContainer = document.getElementById("container");
            for (let astronaut of json) {
                divContainer.innerHTML += makeAstronautDiv(astronaut);
            }
        });
    });
});

function makeAstronautDiv(astronaut) {
    let skills = astronaut.skills.join(", ");
    return (`
    <div class="astronaut">
        <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                <li class=${astronaut.active ? "green" : "default"}>Active: ${astronaut.active}</li>
                <li>Skills: ${skills}</li>
            </ul>
        </div>
        <img class="avatar" src="${astronaut.picture}"/>
    </div>
    `);
}

function displayNumberOfAstronauts(json) {
    let body = document.getElementById("count");
    body.innerHTML = `<h3>Number of astronauts: ${json.length}</h3>`;
}
