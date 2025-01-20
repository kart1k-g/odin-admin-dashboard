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

        const upperCard=document.createElement("div");
        upperCard.classList.add("upper-card");
        
        upperCard.appendChild(heading);
        upperCard.appendChild(description);
        
        const lowerCard=document.createElement("div");
        lowerCard.classList.add("lower-card");

        const view=document.createElement("img");
        view.id="view-icon";
        view.classList.add("card-icon");
        view.src="./imgs/view.svg";
        
        const share=document.createElement("img");
        share.id="share-icon";
        share.classList.add("card-icon");
        share.src="./imgs/share.svg";
        
        const favourite=document.createElement("img");
        favourite.id="favourite-icon";
        favourite.classList.add("card-icon");
        favourite.src="./imgs/favourite.svg";

        lowerCard.appendChild(favourite);
        lowerCard.appendChild(view);
        lowerCard.appendChild(share);

        card.appendChild(upperCard);
        card.appendChild(lowerCard);

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
    heading.textContent="Create";

    const img=document.createElement("img");
    img.classList.add("card-img");
    img.src="./imgs/add.svg";

    const cardImgContainer=document.createElement("div");
    cardImgContainer.classList.add("card-img-container");
    cardImgContainer.appendChild(img);

    card.appendChild(cardImgContainer);
    card.appendChild(heading);

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

function generateAnnouncements(containerId){
    const announcementContainer=document.querySelector(`#${containerId}`);

    announcementInfo.forEach((info)=>{
        const announcement=document.createElement("div");
        announcement.classList.add("announcement");
        announcement.id=info[0];

        const heading=document.createElement("h1");
        heading.textContent=info[1];

        const description=document.createElement("p");
        description.textContent=generateLoremIpsum(20);

        announcement.appendChild(heading);
        announcement.appendChild(description);

        announcementContainer.appendChild(announcement);
    });
}

function generateTrending(containerId){
    const trendingContainer=document.querySelector(`#${containerId}`);
    
    trendingInfo.forEach((info)=>{
        const trending=document.createElement("div");
        trending.classList.add("trending");
        trending.id=info[0];
    
        const img=document.createElement("img");
        img.classList.add("trending-img");
        img.src=info[3];

        const trendingText=document.createElement("div");
        trendingText.classList.add("trending-text");

        const trendingUser=document.createElement("span");
        trendingUser.classList.add("trending-user");
        trendingUser.textContent=info[1];

        const trendingProject=document.createElement("span");
        trendingProject.classList.add("trending-project");
        trendingProject.textContent=info[2];

        trendingText.appendChild(trendingUser);
        trendingText.appendChild(trendingProject);

        trending.appendChild(img);
        trending.appendChild(trendingText);
    
        trendingContainer.appendChild(trending);
    });

}
  
function initialiseVariables(){
    cardsInfo=[
        // id heading 
        ["card-1", "Super Cool Project"],
        ["card-2", "Less Cool Project"],
        ["card-3", "Impossible App"],
        ["card-4", "Easy Peasy App"],
        ["card-5", "Ad Blocker"],
        ["card-6", "Money Maker"],
        ["card-7", "Etch a Sketch"],
    ];
    announcementInfo=[
        ["announcement-1", "Site Maintenance"],
        ["announcement-2", "Community Share Day"],
        ["announcement-3", "Updated Privacy Policy"],
    ];
    trendingInfo=[
        //id username latest-project avatar-img
        ["trending-1", "@gunjan", "World Peace Builder", "./imgs/avatar-3.jpg"],
        ["trending-2", "@asmit", "Super Cool Project", "./imgs/avatar-2.jpg"],
        ["trending-3", "@amiruddin", "Life Changing App", "./imgs/avatar-4.jpg"],
        ["trending-4", "@kanishk", "No Traffic Maker", "./imgs/avatar-5.jpg"],
    ];
}

function initialise(){
    initialiseVariables();
    generateCards("cards-container");
    generateAnnouncements("announcements-container");
    generateTrending("trending-container");
}

let cardsInfo;
window.addEventListener("load",initialise);
// 1920 x 920