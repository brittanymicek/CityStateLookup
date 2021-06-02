"use strict";

let cityStates = [
    {
        state: "California",
        stateAbbr: "CA",
        cities: ["San Diego", "Los Angeles", "San Francisco", "Marin", "Hillsboro", "Chula Vista", "Menlo Park", "Palo Alto", "Oakland", "Berkeley", "Sacramento", "Santa Barbara", "San Luis Ibspo"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Denver", "Colorado Springs"]
    },
    {
        state: "Washington",
        stateAbbr: "WA",
        cities: ["Seattle", "Bellevue"] 
    },
    {
        state: "Oregon",
        stateAbbr: "OR",
        cities: ["Portland", "Hillsboro"] 
    },
    {
        state: "Montana",
        stateAbbr: "MO",
        cities: ["Missoula"] 
    },
    {
        state: "New Mexico",
        stateAbbr: "NM",
        cities: ["Albuquerque"] 
    },
    {
        state: "Nebraska",
        stateAbbr: "NE",
        cities: ["Omaha"] 
    },
    {
        state: "Oklahoma",
        stateAbbr: "OK",
        cities: ["Tulsa", "Sapulpa"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Houston", "Dallas", "San Antonio", "Corpus Christi", "Austin"] 
    },
    {
        state: "Minnesota",
        stateAbbr: "MN",
        cities: ["Minneapolis"]
    },
    {
        state: "Arkansas",
        stateAbbr: "AR",
        cities: ["Little Rock", "Texarkana", "Hot Springs"] 
    },
    {
        state: "Illinois",
        stateAbbr: "IL",
        cities: ["Chicago", "Evanston"] 
    },
    {
        state: "Connecticut",
        stateAbbr: "CT",
        cities: ["Stamford"]
    },
    {
        state: "Florida",
        stateAbbr: "FL",
        cities: ["Tallahassee", "Miami", "St. Augustine"]
    },
    {
        state: "Georgia",
        stateAbbr: "GA",
        cities: ["Atlanta"]
    },
    {
        state: "Maryland",
        stateAbbr: "MD",
        cities: ["Baltimore"]
    },
    {
        state: "Massachusetts",
        stateAbbr: "MA",
        cities: ["Boston", "Cambridge"]
    },
    {
        state: "Michigan",
        stateAbbr: "MI",
        cities: ["Detroit"]
    },
    {
        state: "New Jersey",
        stateAbbr: "NJ",
        cities: ["Newark", "Jersey City", "Paterson", "West Orange"]
    },
    {
        state: "New York",
        stateAbbr: "NY",
        cities: ["New York City", "New Paltz", "West Point", "Irvington"]
    },
    {
        state: "North Carolina",
        stateAbbr: "NC",
        cities: ["Charlotte", "Asheville"]
    },
    {
        state: "Pennsylvania",
        stateAbbr: "PA",
        cities: ["Philadelphia"]
    },
    {
        state: "Tennessee",
        stateAbbr: "TN",
        cities: ["Nashville", "Memphis"]
    }, 
];


window.onload = function () {
    // load states dropdown when page first loads
    loadStatesDropdown();
    // connect onchange event handler for the states dropdown (hook up a function to it)
    // find the state dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;
    // connect onchage evvent handler for the city dropdown (hook up a function to it)
    // find the city dropdown
    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.onchange = onCityDropdownChanged;
}

function loadStatesDropdown() {
    // find the state dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    // add a "Select one..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    stateDropdown.appendChild(selectOneOption);
    // loop through the cityStates array to create an <option> for each state
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option"); // creates <option> element 
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);
    }
   
    addSelectStateFirstOptionToCityDropdown()
  
}
function onStateDropdownChanged() {
    // find the state and city dropdowns
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");
    // erase previous city message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    // remove the previous city from the city dropdown because the state has changed
    cityDropdown.options.length = 0;
    // find the state dropdown selection
    let selectedStateAbbr = stateDropdown.value;
    // did they pick "Select one..." <option>
    if (selectedStateAbbr == "") {
        // Add a "Select state first..." <option>

        addSelectStateFirstOptionToCityDropdown()
       
        return;
    }
    // go use the selected stateAbbr to find the matching state from the array
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateAbbr);
    // Add a "Select one..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
    // loop through the city in the matching state and create <option> elements for each
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropdown.appendChild(theOption);
    }
}
function onCityDropdownChanged() {
    // find the state and city dropdowns
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");
    // erase previous city message
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    // get the selected city
    let selectedCity = cityDropdown.value;
    // if "Select one..." is picked, just exit the function
    if (selectedCity == "") {
        return;
    }
    // get the selected state
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;
    // build a message w/ city and state info and display in <p>
    let message = "City: " + selectedCity + "<br>" +
        "State: " + selectedState;
    messagePara.innerHTML = message;
}

function  addSelectStateFirstOptionToCityDropdown() {
    const cityDropdown = document.getElementById("cityDropdown");

    // Add a "Select state first..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select state first...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
}