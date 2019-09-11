// house names array
const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// create printToDom Function
const printToDom = (divId, textToPrint) => {
    const divContainer = document.getElementById(divId)
    divContainer.innerHTML += textToPrint
}

// create jumbotron to print to dom immediately
const jumboTron = (e) => {
    const jumboString = `
    <div class="jumbotron">
        <h1 class="display-4">Hello students! Welcome to Sorting Hat!</h1>
        <p class="lead">Who's house do you belong?</p>
        <hr class="my-4">
        <p>There are four Hogwarts houses, each with very different aspects and looks. They are called, Gryffindor, Ravenclaw, Slytherin, and Hufflepuff.</p>
        <p>GRYFFINDOR is described as the house of the daring and the brave. Its symbol is the lion, and its colors are red and gold, which shows this very clearly.
        Its founder is Godric Gryffindor. Its element is that of fire, and its ghost is Nearly Headless Nick. Students who belong in Gryffindor are normally very bold and chivalrous, but can be reckless or arrogant.</p>
        <p>RAVENCLAW is described as the house of the wise. Their sigil is the eagle, and the colors of the crest are blue and bronze. The founder is Rowena Ravenclaw, and its element is air. 
        The Ravenclaw ghost is Rowena Ravenclaw’s daughter, The Grey Lady, otherwise known as Helena Ravenclaw. 
        Ravenclaw students are clever, wise, and eager to learn, but they can be seen as “weird” and are sometimes extremely competitive when it comes to exams.</p>
        <p>HUFFLEPUFF is described as the house of the loyal and the fair. The mascot is a badger- the colors are yellow and black. The founder is Helga Hufflepuff, and the earth is their element. 
        The Hufflepuff ghost is The Fat Friar. Hufflepuffs are seen as loyal, having a good sense of fair play, and are hard working and kind. 
        They are, however, slighted by others, and are seen as people who do not fit into the other three houses, or are seen as “weak” or “untalented”. </p>
        <p>SLYTHERIN is described as the house of the ambitious and the cunning. Their device is the serpent, and their colors are green and silver. Its founder is Salazar Slytherin, and their element is water. 
        The Slytherin ghost is the Bloody Baron. Slytherins are known to be ambitious, yearning for power, and tend to be pure bloods. They are seen as “the worst house” in the series, and produces the most dark wizards and witches. 
        They are portrayed as the least liked of all the four houses.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" id="jumbotronBtn" href="#" role="button">Let's Start Sorting!</a>
        </p>
    </div>
    `
    printToDom('jumboTron', jumboString)
}
jumboTron();

const makeForm = () => {
    const createCard = `
    <form>
    <div class="form-group">
        <label for="exampleInputName">Student's Name</label>
        <input type="studentName" class="form-control" id="inputName" aria-describedby="namelHelp" placeholder="Enter name">
    </div>
    <button id="sortingBtn" type="sort" class="btn btn-primary">Sort</button>
    </form>
    `
printToDom('createForm', createCard)
randomize();
document.getElementById('jumbotronBtn').style.display = "none";
    }    

const startSorting = (e) => {
    document.getElementById('jumbotronBtn').addEventListener('click', makeForm)
}
startSorting();

const makeCard = () => {
    const startSorting = inputName.value
    let randomHouse = houseNames[Math.floor(Math.random() * houseNames.length)];
    let cardPrint = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${startSorting}</h5>
                <p class="card-text">${randomHouse}</p>
                <a id="expel" href="#" class="expel">Expel</a>
            </div>
        </div>
    `
printToDom('houses', cardPrint)
removeCard();
}

const randomize = (e) => {
    document.getElementById('sortingBtn').addEventListener('click', makeCard)
}

const removeCard = () => {
    const cardsToRemove = document.getElementsByClassName('expel');
    for (let i = 0; i < cardsToRemove.length; i++) {
      const deleteMe = cardsToRemove[i];
      deleteMe.addEventListener('click' ,(e) =>{
        const btnClicked = e.target;
        const cardToRemove = btnClicked.parentNode.parentNode;
        cardToRemove.remove();
      })
    }
  }

  const expelStudent = () => {
    document.getElementsByClassName('expel').addEventListener('click', removeCard)
}
expelStudent();