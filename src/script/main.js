const workerArray = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    imageName: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    imageName: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    imageName: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    imageName: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    imageName: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    imageName: "barbara-ramos-graphic-designer.jpg",
  },
];

printWorkersData(workerArray);
showWorkersInDom(workerArray);

function printWorkersData(workers) {
  workers.forEach((worker) => {
    printWorkerData(worker);
  });
}

function printWorkerData(worker) {
  for (const key in worker) {
    console.log(key + ": " + worker[key]);
  }
}

function showWorkersInDom(workers) {
  workers.forEach((worker, i) => {
    const div = document.createElement("div");
    div.id = `worker-${i}`;
    for (const key in worker) {
      const p = document.createElement("p");
      p.id = div.id + "-" + key;
      p.class = key;
      key == "name"
        ? (p.innerHTML = `<b>${worker[key]}</b>`)
        : (p.innerHTML = worker[key]);
      if (key == "imageName") {
        const img = document.createElement("img");
        img.src = "src/img/" + worker[key];
        img.width = "200";
        p.innerHTML = null;
        p.appendChild(img);
      }
      div.appendChild(p);
    }

    document.getElementById("workers-data").appendChild(div);
  });
}
