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
        state: "Arkansas",
        stateAbbr: "AR",
        cities: ["Little Rock", "Texarkana", "Hot Springs"] 
    },
];


window.onload = function () {
    loadStatesDropdown();
    
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;
   
    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.onchange = onCityDropdownChanged;
}

function loadStatesDropdown() {
    const stateDropdown = document.getElementById("stateDropdown");
    
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    stateDropdown.appendChild(selectOneOption);
    
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);
    }
   
    addSelectStateFirstOptionToCityDropdown()
  
}
function onStateDropdownChanged() {
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");
    
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
   
    cityDropdown.options.length = 0;
   
    let selectedStateAbbr = stateDropdown.value;
   
    if (selectedStateAbbr == "") {

        addSelectStateFirstOptionToCityDropdown()
       
        return;
    }
   
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateAbbr);
    
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
    
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropdown.appendChild(theOption);
    }
}
function onCityDropdownChanged() {
   
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");
  
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
  
    let selectedCity = cityDropdown.value;
    
    if (selectedCity == "") {
        return;
    }
   
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;
    // build a message w/ team and league info and display in <p>
    let message = "City: " + selectedCity + "<br>" +
        "State: " + selectedState;
    messagePara.innerHTML = message;
}

function  addSelectStateFirstOptionToCityDropdown() {
    const cityDropdown = document.getElementById("cityDropdown");

    
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select state first...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
}