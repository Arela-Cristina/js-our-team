// //Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "assets/img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "assets/img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "assets/img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "assets/img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "assets/img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "assets/img/female3.png"
    }
];



//container DOM
const cardContainer = document.getElementById('cardContainer')
const employeerCard = document.getElementById('employeerCard')

//elementi DOM
const employeerPicture = document.querySelector('.employeerPicture')
const employeerName = document.querySelector('.employeerName')
const employeerPosition = document.querySelector('.employeerPosition')
const employeerMail = document.querySelector('.employeerMail')

//ciclo ogni oggetto del array
for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    console.log(member.name)

    cardContainer.innerHTML += `
    <div class="employeerCard">
        <img class="employeerPicture" src="${member.img}" alt="employeer">
        <div class="employeerinformation">
            <div class="employeerName">${member.name}</div>
            <div class="employeerPosition">${member.role}</div>
            <div class="employeerMail">${member.email}</div>
        </div>
    </div>
    `;
}