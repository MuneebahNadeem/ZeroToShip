fetch("/api/club/listings/")
    .then(function(response){
        return response.json();
    })
    .then(function(clubs){

        const clubContainer = document.getElementById("club-container");

        clubs.forEach(function(club){

            const card = document.createElement("div");
            card.classList.add("club-card");

            card.innerHTML = `
                <h3>${club.club_name}</h3>
                <p><strong>Coach:</strong> ${club.coach_name}</p>
                <p><strong>Capacity:</strong> ${club.max_capacity_students}</p>
            `;

            clubContainer.appendChild(card);

        });

    })
    .catch(function(error){
        console.error("Error loading clubs:", error);
    });

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

const form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Registration Submitted Successfully!");
});