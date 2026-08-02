const clubs = [
    {
        clubName: "Badminton",
        coach: "Ms. Muneebah",
        capacity: 16
    },
    {
        clubName: "Basketball",
        coach: "Ms. Claudia",
        capacity: 20
    },
    {
        clubName: "Volleyball",
        coach: "Ms. Sara",
        capacity: 15
    },
    {
        clubName: "Cricket",
        coach: "Mr. Bilal",
        capacity: 25
    }
];

const schedules = [
    {
        club: "Badminton",
        day: "Tuesday",
        time: "6:00 PM"
    },
    {
        club: "Basketball",
        day: "Wednesday",
        time: "4:00 PM"
    },
    {
        club: "Volleyball",
        day: "Thursday",
        time: "6:00 PM"
    },
    {
        club: "Cricket",
        day: "Friday",
        time: "3:00 PM"
    }
];

const clubContainer = document.getElementById("club-container");

clubs.forEach(function(club){

    const card = document.createElement("div");
    card.classList.add("club-card");

    card.innerHTML = `
        <h3>${club.clubName}</h3>
        <p><strong>Coach:</strong> ${club.coach}</p>
        <p><strong>Capacity:</strong> ${club.capacity}</p>
    `;

    clubContainer.appendChild(card);
});

const scheduleContainer = document.getElementById("schedule-container");

schedules.forEach(function(schedule){

    const scheduleCard = document.createElement("div");
    scheduleCard.classList.add("schedule-card");

    scheduleCard.innerHTML = `
        <h3>${schedule.club}</h3>
        <p><strong>Day:</strong> ${schedule.day}</p>
        <p><strong>Time:</strong> ${schedule.time}</p>
    `;

    scheduleContainer.appendChild(scheduleCard);

});

const clubDropdown = document.getElementById("club");

clubs.forEach(function(club){

    const option = document.createElement("option");

    option.value = club.clubName;
    option.textContent = club.clubName;

    clubDropdown.appendChild(option);

});

const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Registration Submitted Successfully!");
});