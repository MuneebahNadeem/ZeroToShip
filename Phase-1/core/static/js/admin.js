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