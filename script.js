
window.addEventListener("load", function(){

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json) {
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[0].name}</li>
                    <li>Diameter: ${json[0].diameter}</li>
                    <li>Star: ${json[0].star}</li>
                    <li>Distance from Earth: ${json[0].distance}</li>
                    <li>Number of Moons: ${json[0].moons}</li>
                </ol>
                <img src="${json[0].image}">
            `;
        });
    });    
});