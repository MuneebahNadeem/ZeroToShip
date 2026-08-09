let clubs = [];

fetch("/api/club/listings/")
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Failed to load clubs.");
        }

        return response.json();
    })
    .then(function(data) {

        clubs = data;

        const clubContainer = document.getElementById("club-container");
        const clubSelect = document.getElementById("club");

        clubs.forEach(function(club) {

            // Create club card
            const card = document.createElement("div");
            card.classList.add("club-card");

            card.innerHTML = `
                <h3>${club.club_name}</h3>
                <p><strong>Coach:</strong> ${club.coach_name}</p>
                <p><strong>Capacity:</strong> ${club.max_capacity_students}</p>
            `;

            clubContainer.appendChild(card);


            // Add club to registration dropdown
            const option = document.createElement("option");

            option.value = club.club_id;
            option.textContent = club.club_name;

            clubSelect.appendChild(option);

        });

    })
    .catch(function(error) {
        console.error("Error loading clubs:", error);
    });


// Registration form
const form = document.querySelector("#registration-form form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const selectedClubId = document.getElementById("club").value;

    console.log("Selected club value:", selectedClubId);
    console.log("All clubs:", clubs);

    if (!selectedClubId) {
        alert("Please select a club.");
        return;
    }

    fetch("/api/club/enroll/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            club_id: selectedClubId
        })
    })
    .then(function(response) {

        if (!response.ok) {
            throw new Error("Enrollment request failed.");
        }

        return response.json();
    })
    .then(function(data) {

        console.log("Enrollment response:", data);

        alert(data.message);

    })
    .catch(function(error) {

        console.error("Enrollment error:", error);

        alert("Something went wrong while enrolling.");

    });

});