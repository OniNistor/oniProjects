"use strict";

let level;
let race = ["Orc", "Dwarf", "Human", "Elf", "Halfling"];
let role = ["Barbarian", "Paladin", "Rogue", "Sorceror", "Cleric", "Ranger"];
let party = [];
let partyScore = 0;
let partySize = 0;
let averageScore = 0;
let numberOfRecruitTimes = 0;
let numberOfRejectTimes = 0;
const buttonSearch = document.getElementById("buttonSearch");
const buttonRecruit = document.getElementById("buttonRecruit");
const buttonReset = document.getElementById("buttonReset");
const buttonReject = document.getElementById("buttonReject");
const boxContainer = document.getElementById("boxContainer");
const rosterContainer = document.getElementById("rosterContainer");
const rulesContainer = document.getElementById("rulesContainer");
const finalScore = document.getElementById("finalScore");

const buttonBegin = document.getElementById("buttonBegin");
const raceTest = document.getElementById("raceTest");
const roleTest = document.getElementById("roleTest");
const levelTest = document.getElementById("levelTest");
const raceImg = document.getElementById("raceImg");
const roleImg = document.getElementById("roleImg");
const levelImg = document.getElementById("levelImg");
const yourParty = document.getElementById("yourParty");
const yourRejects = document.getElementById("yourRejects");


function randomLevel() {
    let level = Math.floor(Math.random() * 20) + 1;
    return level;
}

function randomRace() {
    let x = Math.floor(Math.random() * race.length);
    return race[x];
}

function randomRole() {
    let x = Math.floor(Math.random() * role.length)
    return role[x];
}

function getNewAdventurers() {
    partyMember = new Adventurer;
    party.unshift(partyMember);
    raceTest.textContent = partyMember.race;
    roleTest.textContent = partyMember.role;
    levelTest.textContent = partyMember.level;

    let boxOneImage = document.createElement("img");
    boxOneImage.src = `raceImages/${partyMember.race}.png`;
    raceImg.innerHTML = '';
    raceImg.appendChild(boxOneImage);

    let boxTwoImage = document.createElement("img");
    boxTwoImage.src = `roleImages/${partyMember.role}.png`;
    roleImg.innerHTML = '';
    roleImg.appendChild(boxTwoImage);

    let boxThreeImage = document.createElement("img");
    boxThreeImage.src = `levelImages/${partyMember.level}.png`;
    levelImg.innerHTML = '';
    levelImg.appendChild(boxThreeImage);

    boxContainer.style.visibility = "visible";
    rosterContainer.style.visibility = "visible";
    raceImg.style.visibility = "visible";
    roleImg.style.visibility = "visible";
    levelImg.style.visibility = "visible";
}

class Adventurer {
    constructor(level, race, role) {
        this.level = randomLevel();
        this.race = randomRace();
        this.role = randomRole();
    }
}

let partyMember = new Adventurer;

buttonSearch.addEventListener("click", event => {
    buttonSearch.style.visibility = "hidden";
    rulesContainer.style.visibility = "visible";
})

buttonBegin.onclick = function searchMembers() {
    getNewAdventurers();
};
buttonBegin.addEventListener("click", event => {
    buttonSearch.style.display = "none";
    buttonRecruit.style.display = "inline";
    buttonReject.style.display = "inline";
    buttonReset.style.display = "inline";
    rulesContainer.style.visibility = "hidden";

})

buttonReset.addEventListener("click", event => {
    buttonSearch.style.visibility = "visible";
    rulesContainer.style.visibility = "hidden";
    finalScore.style.visibility = "hidden";
    raceTest.textContent = "***";
    roleTest.textContent = "***";
    levelTest.textContent = "***";
    party = [];
    yourParty.innerHTML = "";
    yourRejects.innerHTML = "";
    buttonSearch.style.display = "inline";
    buttonRecruit.style.display = "none";
    buttonReject.style.display = "none";
    buttonReset.style.display = "none";
    raceImg.style.visibility = "hidden";
    roleImg.style.visibility = "hidden";
    levelImg.style.visibility = "hidden";
    boxContainer.style.visibility = "hidden";
    rosterContainer.style.visibility = "hidden";
    numberOfRecruitTimes = 0;
    buttonRecruit.disabled = false;
    numberOfRejectTimes = 0;
    buttonReject.disabled = false;
    partyScore = 0;
    partySize = 0;
});

buttonRecruit.addEventListener("click", event => {
    if (party.length > 0) {
        let p = document.createElement("p");
        let firstPartyMember = party[0];
        p.textContent = `Level ${firstPartyMember.level} ${firstPartyMember.race} ${firstPartyMember.role}`;
        yourParty.appendChild(p);
        getNewAdventurers();
        numberOfRecruitTimes++;
        partyScore += firstPartyMember.level;
        partySize++;

    }
    if (numberOfRecruitTimes === 5) {
        buttonRecruit.disabled = true;
        buttonReject.disabled = true;
        finalScore.style.visibility = "visible";
        finalScore.innerHTML = `<p>FINAL SCORE: ${averageScore}</p>`;
    } else {
        buttonRecruit.disabled = false;
    }

    if (partySize > 0) {
        averageScore = (partyScore / partySize);
        console.log(averageScore);
    }
});

buttonReject.addEventListener("click", event => {
    if (party.length > 0) {
        let badMember = party[0];
        let p = document.createElement("p");
        p.textContent = `Level ${badMember.level} ${badMember.race} ${badMember.role}`;
        yourRejects.appendChild(p);
        getNewAdventurers();
        numberOfRejectTimes++;
    }
    if (numberOfRejectTimes === 7) {
        buttonReject.disabled = true;
    } else {
        buttonReject.disabled = false;
    }
});

