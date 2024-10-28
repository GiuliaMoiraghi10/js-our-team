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

  for (let key in allTeamMembers) {
    console.log(key)
  }
}

// Creare funzione per creare la card
function memberCard(member) {
  const card = document.createElement('div');

  const img = document.createElement('img');
  img.src = member.img;
  card.appendChild(img)
}


// Appendere elementi nel DOM