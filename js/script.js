const allPseudo = ["John", "Emma", "Luna", "Tomy", "Mathieu", "Polo"];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const dataPost = {
  isBooked: true,
  pseudo: allPseudo[randomNumber(0, allPseudo.length)],
  isSponsored: false,
  avatarUrl: "https://picsum.photos/200/300?random=1",
  imageUrl: "url",
  isLiked: true,
  likes: randomNumber(0, 100000),
};

const heart = document.querySelectorAll(".heart");

const app = document.querySelector("#app");

for (let i = 0; i < 4; i++) {
  const globalAll = document.querySelectorAll(".global");
  const global = document.createElement("div");

  global.classList.add("global");

  app.appendChild(global);

  const header = document.createElement("div");
  header.classList.add("header");

  global.appendChild(header);

  const globalGroupHeader = document.createElement("div");
  globalGroupHeader.classList.add("globalHeader");

  header.appendChild(globalGroupHeader);

  const groupHeaderPseudo = document.createElement("div");
  groupHeaderPseudo.classList.add("groupPseudo");

  const avatar = document.createElement("img");
  avatar.alt = "";
  avatar.src = dataPost.avatarUrl;

  groupHeaderPseudo.appendChild(avatar);

  const pseudo = document.createElement("a");
  pseudo.href = "#";
  pseudo.innerHTML = dataPost.pseudo;

  groupHeaderPseudo.appendChild(pseudo);
  const sponsor = document.createElement("span");
  sponsor.innerHTML = "SPONSOR";
  sponsor.className = "sponsor block";

  pseudo.appendChild(sponsor);

  const menuHeader = document.createElement("img");
  menuHeader.src = "/img/suite.png";
  menuHeader.alt = "";

  globalGroupHeader.appendChild(groupHeaderPseudo);
  globalGroupHeader.appendChild(menuHeader);

  const main = document.createElement("div");
  main.classList.add("main");

  global.appendChild(main);

  const img = document.createElement("img");
  img.src = "https://random.imagecdn.app/500/500";
  img.alt = "post";

  main.appendChild(img);

  const footer = document.createElement("div");
  footer.classList.add("footer");

  global.appendChild(footer);

  const navFooter = document.createElement("nav");

  footer.appendChild(navFooter);

  const listFooter = document.createElement("ul");

  navFooter.appendChild(listFooter);

  for (let nmbListFooter = 0; nmbListFooter < 3; nmbListFooter++) {
    const liFooter = document.createElement("li");
    listFooter.appendChild(liFooter);

    const linkListFooter = document.createElement("a");
    linkListFooter.href = "#";

    liFooter.appendChild(linkListFooter);

    const imgLinkFooter = document.createElement("img");
    imgLinkFooter.alt = "";

    linkListFooter.appendChild(imgLinkFooter);
  }

  globalAll.forEach((e) => {
    e.children[2].children[0].children[0].children[0].children[0].children[0].classList.add(
      "heart"
    );
    e.children[2].children[0].children[0].children[1].children[0].children[0].src =
      "/img/messenger.png";
    e.children[2].children[0].children[0].children[1].children[0].children[0].classList.add(
      "messenger"
    );
    e.children[2].children[0].children[0].children[2].children[0].children[0].src =
      "/img/send.png";
    e.children[2].children[0].children[0].children[2].children[0].children[0].classList.add(
      "send"
    );
  });

  const save = document.createElement("a");
  save.href = "#";

  navFooter.appendChild(save);

  const imgSave = document.createElement("img");
  imgSave.alt = "";
  imgSave.src = "/img/enregistrer-instagram.png";

  save.appendChild(imgSave);

  const numberLike = document.createElement("p");
  numberLike.innerHTML = dataPost.likes;

  footer.appendChild(numberLike);
}
