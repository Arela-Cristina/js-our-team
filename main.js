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
        <img src="${member.img}" alt="employeer">
        <div class="employeerinformation">
            <div class="styleName">${member.name}</div>
            <div class="styleRole">${member.role}</div>
            <div class="styleMail">${member.email}</div>
        </div>
    </div>
    `;
}

formEmployeer.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('click')

    //elementi form DOM
    const picture = document.getElementById('picture').value;
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const mail = document.getElementById('mail').value;
    //foto random
    let imgSrc;

    if (picture) {
        imgSrc = picture;  // se essiste carica la foto
    } else {
        imgSrc = randomPicture(); // altrimenti carica una foto random
    }

    //pushamo il oggetto
    teamMembers.push(
        {
            name: name,
            role: position,
            email: mail,
            img: imgSrc
        }
    )

    //aggiungiamo dinamicamente gli elemeti che provengono del form
    cardContainer.innerHTML += `
    <div class="employeerCard">
        <img src="${imgSrc}" alt="employeer">
        <div class="employeerinformation">
            <div class="styleName">${name}</div>
            <div class="styleRole">${position}</div>
            <div class="styleMail">${mail}</div>
        </div>
    </div>
    `;

});

// foto random
function randomPicture() {
    return `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
}

//consigli
// il codice dentro di InnerHTML, dovrebbe essere dentro una funzione.