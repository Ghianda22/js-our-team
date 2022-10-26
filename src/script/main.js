let workerArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        imageName: "wayne-barnett-founder-ceo.jpg"
    },{
        name: "Angela Caroll",
        role: "Chief Editor",
        imageUrl: "angela-caroll-chief-editor.jpg"
    },{
        name: "Walter Gordon",
        role: "Office Manager",
        imageUrl: "walter-gordon-office-manager.jpg"
    },{
        name: "Angela Lopez",
        role: "Social Media Manager",
        imageUrl: "angela-lopez-social-media-manager.jpg"
    },{
        name: "Scott Estrada",
        role: "Developer",
        imageUrl: "scott-estrada-developer.jpg"
    },{
        name: "Barbara Ramos",
        role: "Graphic Designer",
        imageUrl: "barbara-ramos-graphic-designer.jpg"
    }
]

printWorkersData(workerArray)

function printWorkersData(workers){
    workers.forEach(worker => {
        printWorkerData(worker);
    });
}

function printWorkerData(worker){
    for (const key in worker) {
        console.log(key + ": " + worker[key])
    }
}
