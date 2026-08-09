const membershipRequests = [
    {
        name: "Ali Khan",
        club: "Cricket"
    },
    {
        name: "Sara Ahmed",
        club: "Basketball"
    },
    {
        name: "Ahmed Raza",
        club: "Badminton"
    },
    {
        name: "Meena Bukhari",
        club: "Football"
    }
];


const requestContainer = document.getElementById("request-container");

membershipRequests.forEach(function(request) {

    const card = document.createElement("div");
    card.classList.add("request-card");

    card.innerHTML = `
        <h3>${request.name}</h3>
        <p><strong>Requested Club:</strong> ${request.club}</p>
    `;

    requestContainer.appendChild(card);

});


fetch("/api/club/roster/")
    .then(function(response) {

        if (!response.ok) {
            throw new Error("Failed to load roster.");

        }

        return response.json();

    })
    .then(function(roster) {

        const rosterTable = document.querySelector("#roster-table tbody");

        roster.forEach(function(record) {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${record.member_name}</td>
                <td>${record.club_name}</td>
                <td>${record.membership_type}</td>
            `;

            rosterTable.appendChild(row);

        });

    })
    .catch(function(error) {

        console.error("Error loading roster:", error);

    });