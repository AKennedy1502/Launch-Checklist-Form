
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

       let form = document.querySelector("form");
       form.addEventListener("submit", function(event) {
        event.preventDefault();   
        let pilotnameInput = document.querySelector("input[name=pilotName]");
        let copilotnameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        if (pilotnameInput.value === "" || !isNaN(pilotnameInput.value) ||
            copilotnameInput.value === "" || !isNaN(copilotnameInput.value) ||
            fuelLevelInput.value === "" || isNaN(fuelLevelInput.value) || fuelLevelInput.value < 0 ||
            cargoMassInput.value === "" || isNaN(cargoMassInput.value) || cargoMassInput.value < 0){
            alert("Make sure to enter valid information for each field!");
        }else if (fuelLevelInput.value <10000){   
            faultyItems.style.visibility = "visible"
            launchStatus.style.color = "red" 
            document.getElementById("launchStatus").innerHTML ="Shuttle not ready for launch";
            document.getElementById("fuelStatus").innerHTML ="Fuel level too low for launch";
            document.getElementById("pilotStatus").innerHTML =`Pilot ${pilotnameInput.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML =`Co-Pilot ${copilotnameInput.value} is ready for launch`;       
        }else if (cargoMassInput.value >10000){   
            faultyItems.style.visibility = "visible"
            launchStatus.style.color = "red" 
            document.getElementById("launchStatus").innerHTML ="Shuttle not ready for launch";
            document.getElementById("cargoStatus").innerHTML ="Cargo mass is too high for launch";
            document.getElementById("pilotStatus").innerHTML =`Pilot ${pilotnameInput.value} is ready for launch`;
            document.getElementById("copilotStatus").innerHTML =`Co-Pilot ${copilotnameInput.value} is ready for launch`;
        }else {
            launchStatus.style.color = "green" 
            document.getElementById("launchStatus").innerHTML ="Shuttle is ready for launch";                           
        }
       });
    });
  