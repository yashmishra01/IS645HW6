console.log("question 6 solution");


const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const dlItem = document.createElement("dl");
words.forEach(dl => {
    const dtItem = document.createElement("dt");
    const ddItem = document.createElement("dd");

    dtItem.textContent = dl.term;
    ddItem.textContent = dl.definition;

    dtItem.style.fontWeight = "bold";

    dlItem.appendChild(dtItem);
    dlItem.appendChild(ddItem);

});

const divItem = document.getElementById("content");
divItem.appendChild(dlItem);