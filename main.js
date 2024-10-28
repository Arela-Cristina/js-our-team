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

//form DOM
const formEmployeer = document.getElementById('formEmployeer')


//ciclo ogni oggetto del array
for (let i = 0; i < teamMembers.length; i++) {
    let member = teamMembers[i];
    console.log(member.name)

    //template literal per inject innerHTML in maniera dinamica
    cardContainer.innerHTML += `
    <div class="employeerCard">
        <img id="employeerPicture" src="${member.img}" alt="employeer">
        <div class="employeerinformation">
            <div id="employeerName">${member.name}</div>
            <div id="employeerPosition">${member.role}</div>
            <div id="employeerMail">${member.email}</div>
        </div>
    </div>
    `;
}

formEmployeer.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('click')

    //elementi form DOM
    const Picture = document.getElementById('Picture').value;
    const Name = document.getElementById('Name').value;
    const Position = document.getElementById('Position').value;
    const Mail = document.getElementById('Mail').value;

    teamMembers.push(
        {
            name: Name,
            role: Position,
            email: Mail,
            img: Picture
        }
    )


});