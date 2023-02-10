const home = document.getElementById("page__home");
const menu = document.getElementById("page__menu");
const contact = document.getElementById("page__contact");
const content = document.getElementById("content");

displayHomePage();
function changeTab(page) {
    if (page === "page__home") {
        content.removeChild(content.lastElementChild);
        displayHomePage();
        home.classList.add("current");
        menu.classList.remove("current");
        contact.classList.remove("current");
    } else if (page === "page__menu") {
        content.removeChild(content.lastElementChild);
        displayMenuPage();
        menu.classList.add("current");
        home.classList.remove("current");
        contact.classList.remove("current");
    } else {
        content.removeChild(content.lastElementChild);
        displayContactPage();
        home.classList.remove("current");
        menu.classList.remove("current");
        contact.classList.add("current");
    }
}


function displayHomePage() {
    const newContent = document.createTextNode("");

    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "home");
    newDiv.appendChild(newContent);

    const banner = document.createElement('div');
    banner.setAttribute("class", "banner");
    banner.appendChild(newContent);

    newDiv.appendChild(banner);

    const heading = document.createElement('div');
    heading.setAttribute("class", "heading");
    heading.appendChild(document.createTextNode("Beary's Breakfast Bar"));

    banner.appendChild(heading);


    const intro = document.createElement('div');
    intro.setAttribute("class", "banner");
    intro.appendChild(newContent);

    newDiv.appendChild(intro);

    const passage = document.createElement('div');
    const author = document.createElement('div');
    passage.setAttribute("class", "passage");
    author.setAttribute("class", "author");
    passage.appendChild(document.createTextNode("Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."));
    author.appendChild(document.createTextNode("Goldilocks"));
    passage.appendChild(author);

    intro.appendChild(passage);

    const time = document.createElement('div');
    time.setAttribute("class", "banner");
    time.appendChild(newContent);

    newDiv.appendChild(time);

    const title = document.createElement('div');
    const hours = document.createElement('ul');
    const hour1 = document.createElement('li');
    const hour2 = document.createElement('li');
    const hour3 = document.createElement('li');
    const hour4 = document.createElement('li');
    const hour5 = document.createElement('li');
    const hour6 = document.createElement('li');
    const hour7 = document.createElement('li');
    title.setAttribute("class", "title");
    hours.setAttribute("class", "passage");
    hour1.setAttribute("class", "hour");
    hour2.setAttribute("class", "hour");
    hour3.setAttribute("class", "hour");
    hour4.setAttribute("class", "hour");
    hour5.setAttribute("class", "hour");
    hour6.setAttribute("class", "hour");
    hour7.setAttribute("class", "hour");
    title.appendChild(document.createTextNode("Hours"));
    hours.appendChild(document.createTextNode(""));
    hour1.appendChild(document.createTextNode("Sunday: 8am - 8pm"));
    hour2.appendChild(document.createTextNode("Monday: 6am - 6pm"));
    hour3.appendChild(document.createTextNode("Tuesday: 6am - 6pm"));
    hour4.appendChild(document.createTextNode("Wednesday: 6am - 6pm"));
    hour5.appendChild(document.createTextNode("Thursday: 6am - 10pm"));
    hour6.appendChild(document.createTextNode("Friday: 6am - 10pm"));
    hour7.appendChild(document.createTextNode("Saturday: 8am - 10pm"));
    time.appendChild(hours);
    hours.appendChild(title);
    hours.appendChild(hour1);
    hours.appendChild(hour2);
    hours.appendChild(hour3);
    hours.appendChild(hour4);
    hours.appendChild(hour5);
    hours.appendChild(hour6);
    hours.appendChild(hour7);

    content.appendChild(newDiv);
}

function displayMenuPage() {
    const newContent = document.createTextNode("");

    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "menu");
    newDiv.appendChild(newContent);

    const banner = document.createElement('div');
    banner.setAttribute("class", "banner");
    banner.appendChild(newContent);

    newDiv.appendChild(banner);

    const heading = document.createElement('div');
    heading.setAttribute("class", "heading1");
    heading.appendChild(document.createTextNode("Menu"));

    banner.appendChild(heading);

    const title1 = document.createElement('div');
    title1.setAttribute("class", "banner");
    title1.appendChild(newContent);

    newDiv.appendChild(title1);

    const beveraegs = document.createElement('div');
    beveraegs.setAttribute("class", "heading");
    beveraegs.appendChild(document.createTextNode("Beverages"));

    title1.appendChild(beveraegs);

    const intro = document.createElement('div');
    intro.setAttribute("class", "banner");
    intro.appendChild(newContent);

    newDiv.appendChild(intro);

    const passage = document.createElement('div');
    const author = document.createElement('div');
    const review = document.createElement('div');
    const price = document.createElement('div');
    const blockImg = document.createElement('div');
    const img = document.createElement('img');
    passage.setAttribute("class", "passage");
    author.setAttribute("class", "title");
    review.setAttribute("class", "review");
    price.setAttribute("class", "price");
    blockImg.setAttribute("class", "blockImg");
    passage.appendChild(document.createTextNode(""));
    author.appendChild(document.createTextNode("Honey Tea"));
    review.appendChild(document.createTextNode("A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!"));
    price.appendChild(document.createTextNode("$2"));
    blockImg.appendChild(document.createTextNode(""));
    img.src = '../img/honeyTea.jpg';
    blockImg.appendChild(img);
    passage.appendChild(author);
    passage.appendChild(review);
    passage.appendChild(price);
    passage.appendChild(blockImg);
    intro.appendChild(passage);

    content.appendChild(newDiv);
}

function displayContactPage() {
    const newContent = document.createTextNode("");

    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "contact");
    newDiv.appendChild(newContent);

    const banner = document.createElement('div');
    banner.setAttribute("class", "banner");
    banner.appendChild(newContent);

    newDiv.appendChild(banner);

    const heading = document.createElement('div');
    heading.setAttribute("class", "heading1");
    heading.appendChild(document.createTextNode("Contact us"));
    banner.appendChild(heading);


    const intro = document.createElement('div');
    intro.setAttribute("class", "banner");
    intro.appendChild(newContent);

    newDiv.appendChild(intro);

    const block = document.createElement('div');
    const name = document.createElement('div');
    const infos = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const blockImg = document.createElement('div');
    const img = document.createElement('img');
    name.setAttribute("class", "name");
    block.setAttribute("class", "block");
    infos.setAttribute("class", "list");
    blockImg.setAttribute("class", "cardImg");
    name.appendChild(document.createTextNode("Mama Bear"));
    block.appendChild(document.createTextNode(""));
    infos.appendChild(document.createTextNode(""));
    item1.appendChild(document.createTextNode("Chef"));
    item2.appendChild(document.createTextNode("555-555-5554"));
    item3.appendChild(document.createTextNode("totallyRealEmail@notFake.com"));
    blockImg.appendChild(document.createTextNode(""));
    img.src = '../img/mamabear.png';
    intro.appendChild(block);
    block.appendChild(name);
    infos.appendChild(item1);
    infos.appendChild(item2);
    infos.appendChild(item3);
    block.appendChild(infos);
    blockImg.appendChild(img);
    block.appendChild(blockImg);


    content.appendChild(newDiv);
}
