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

const roster = [
    {
        member: "Abdul Hadi",
        club: "Badminton",
        membership: "Student"
    },
    {
        member: "Fatima Noor",
        club: "Volleyball",
        membership: "Student"
    },
    {
        member: "Bilal Ahmed",
        club: "Cricket",
        membership: "Student"
    },
    {
        member: "Shaheer Khan",
        club: "Basketball",
        membership: "Student"
    }
];

const requestContainer = document.getElementById("request-container");

membershipRequests.forEach(function(request){

    const card = document.createElement("div");
    card.classList.add("request-card");

    card.innerHTML = `
        <h3>${request.name}</h3>
        <p><strong>Requested Club:</strong> ${request.club}</p>
    `;

    requestContainer.appendChild(card);

});

const rosterTable = document.querySelector("#roster-table tbody");

roster.forEach(function(record){

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${record.member}</td>
        <td>${record.club}</td>
        <td>${record.membership}</td>
    `;

    rosterTable.appendChild(row);

});
