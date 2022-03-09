const main = document.getElementById('cards');

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function createCard(user) {
  const card = document.createElement('div');
  card.classList.add('col');

  const container = document.createElement('div');
  container.classList.add('bg-white');

  const infoBox = document.createElement('div');
  infoBox.classList.add('py-4', 'text-center');

  const img = document.createElement('img');
  img.classList.add('img-fluid');
  img.src = `img/${user.image}`;
  img.alt = user.name;

  const title = document.createElement('h3');
  title.innerHTML = user.name;

  const subtitle = document.createElement('h5');
  subtitle.classList.add('fst-italic', 'fw-light');
  subtitle.innerHTML = user.role;

  infoBox.appendChild(title);
  infoBox.appendChild(subtitle);

  container.appendChild(img);
  container.appendChild(infoBox);

  card.appendChild(container);

  return card;
}

function generate() {
  main.innerHTML = '';
  for (let i = 0; i < team.length; i++) {
    const newCard = createCard(team[i]);

    main.appendChild(newCard);
  }
}

document.getElementById('insert').addEventListener('click', () => {
  const name = document.getElementById('name');
  const role = document.getElementById('role');
  const image = document.getElementById('img');

  const newUser = {
    name: name.value,
    role: role.value,
    image: image.value,
  };

  team.push(newUser);

  name.value = '';
  role.value = '';
  image.value = '';

  generate();
});

generate();
