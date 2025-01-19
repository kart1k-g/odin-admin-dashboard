function generateCards(containerId){
    const cardsContainer=document.querySelector(`#${containerId}`);
    cardsInfo.forEach(info=> {
        const card=document.createElement("div");
        card.classList.add("card");
        card.id=info[0];

        const heading=document.createElement("h1");
        heading.classList.add("card-heading");
        heading.textContent=info[1];

        const description=document.createElement("p");
        description.classList.add("card-description");
        description.textContent=generateLoremIpsum(20);

        card.appendChild(heading);
        card.appendChild(description);

        cardsContainer.appendChild(card);
    });
    cardsContainer.appendChild(getLastCard());
}

function getLastCard(){
    const card=document.createElement("div");
    card.classList.add("card");
    card.id="last-card";

    const heading=document.createElement("h1");
    heading.classList.add("card-heading");
    heading.textContent="Add";

    const img=document.createElement("img");
    img.classList.add("card-img");
    img.src="./imgs/add.svg";

    card.appendChild(heading);
    card.appendChild(img);

    return card;
}

function generateLoremIpsum(wordCount) {
    const loremWords = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", 
      "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", 
      "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam"
    ];
  
    let result = [];
    for (let i = 0; i < wordCount; i++) {
      const randomIndex = Math.floor(Math.random() * loremWords.length);
      result.push(loremWords[randomIndex]);
    }
  
    return result.join(" ") + ".";
}
  
function initialiseVariables(){
    cardsInfo=[
        // id heading 
        ["card-1", "Card One"],
        ["card-2", "Card Two"],
        ["card-3", "Card Three"],
        ["card-4", "Card Four"],
        ["card-5", "Card Five"],
        ["card-6", "Card Six"],
        ["card-7", "Card Seven"],
    ];
}

function initialise(){
    initialiseVariables();
    generateCards("cards-container");
    console.log("hi");
}

let cardsInfo;
window.addEventListener("load",initialise);
// 1920 x 920