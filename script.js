const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Prendo elementi del DOM
let img = document.getElementById('imgCard')
let nome = document.getElementById('nomeCognome')
let ruolo = document.getElementById('ruoloUtente')
let mail = document.getElementById('mailUtente')


// Ciclare array di oggetti

for (let i = 0; i < teamMembers.length; i++) {
  console.log(teamMembers[i])
  const allTeamMembers = teamMembers[i]
  console.log(allTeamMembers)

  // for (let key in allTeamMembers) {
  //   console.log(key)

  const card = `
    <div class="col">
                    <div class="card mb-3 border-0" style="max-width: 540px;">
                        <div class="row g-0 card-template">
                            <div class="col-md-4">
                                <img id="imgCard" src="${allTeamMembers.img}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 id="nomeCognome" class="card-title name">${allTeamMembers.name}</h5>
                                    <p id="ruoloUtente" class="card-text ruolo">${allTeamMembers.role}</p>
                                    <p id="mailUtente" class="card-text mail">${allTeamMembers.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  `

}





// Appendere elementi nel DOM