
const colourTable = document.getElementById('colour-table');
const colourContainer = document.getElementById('colour-container');
const topNavSeperator = document.getElementById('top-nav-seperator');

const defaultHeight = `${100 / 7}vw`

loopAllColours(createColourBox, colourArr);

function loopAllColours(iteratorFunction, arrSet) {
    colourContainer.innerHTML = '';
    for (i = 0; i < 20; i++ ) {
        for (j = i; j < (i + 121); j += 20) {
            if (arrSet[j] !== undefined) {
                iteratorFunction(arrSet[j]);
            }
        }
    }
}

function createColourBox(colourItem, colWidth = defaultHeight, colHeight = '45px') {
    let colourDivver = document.createElement('div');
    colourDivver.id = colourItem.name;
    colourDivver.style.backgroundColor = colourItem.name;
    colourDivver.classList.add('colour-box');
    colourDivver.style.color = colourItem.labelColour;
    colourDivver.innerHTML = `<div class="inner-colour-div">${colourItem.name}<div>`;
    colourDivver.style.width = colWidth;
    colourDivver.style.height = colHeight;
    colourContainer.appendChild(colourDivver);
}

function reorganizeColourMatrixAlphabetically() {
    let alphaCarr = [];
    colourArr.map(item => alphaCarr.push(item));
    alphaCarr = alphaCarr.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    loopAllColours(createColourBox, alphaCarr)
}

function reorganizeColourMatrix(targetCategory, targetWord, colWidth, colHeight) {
    let carr = [];
    if (targetCategory === 'attrWords') {
        colourArr.map(item => {
            if (item.attrWords && Number.isInteger(item.attrWords[targetWord])) {
                carr.push(item);
            }
        });
    } else {
        colourArr.map(item => {
            if (item[targetCategory] === targetWord) {
                carr.push(item);
            }
        });
    }
    colourContainer.innerHTML = '';
    for (i = 0; i < carr.length; i++ ) {
        createColourBox(carr[i], colWidth, colHeight);
    }
}


const colourSets = document.getElementById('colour-sets');
colourSets.addEventListener('click', function () {
    if (colourSets.style.backgroundColor.length < 1) {
        colourSets.style.backgroundColor = 'cornflowerblue';
    } else {
        colourSets.style.backgroundColor = '';
    }
    let topNavSeperator = document.getElementById('top-nav-seperator');
    if (topNavSeperator.style.height === '140px') {
        topNavSeperator.style.height = '5px';
    } else {
        topNavSeperator.style.height = '140px';
        topNavSeperator.innerHTML = `
            <div style="padding-left: 20px">
                <h2 id="alphabetical" class="seperator-option" onclick="reorganizeColourMatrixAlphabetically()">Alphabetical</h2>
                <h2 id="dark" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'dark', '50vw')">Dark</h2>
                <h2 id="loud" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'loud', '100vw')">Loud</h2>
                <h2 id="offwhite" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'offWhite', '50vw')">Offwhite</h2>
                <h2 id="pastel" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'pastel', '${100 / 3}vw')">Pastel</h2>
                <h2 id="original" class="seperator-option" onclick="loopAllColours(createColourBox, colourArr)">Original</h2>
                <h2 id="yellow" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'yellow', '100vw', '10vh')">Yellow</h2>
                <h2 id="orange" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'orange', '100vw', '10vh')">Orange</h2>
                <h2 id="red" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'red', '100vw', '10vh')">Red</h2>
                <h2 id="pink" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'pink', '100vw', '10vh')">Pink</h2>
                <h2 id="brown" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'brown', '100vw')">Brown</h2>
                <h2 id="purple" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'purple', '100vw')">Purple</h2>
                <h2 id="blue" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'blue', '50vw')">Blue</h2>
                <h2 id="green" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'green', '50vw')">Green</h2>
                <h2 id="white" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'white', '50vw')">White</h2>
                <h2 id="gray" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'gray', '100vw', '10vh')">Gray</h2>
                <h2 id="black" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'black', '100vw', '100vh')">Black</h2>
            </div>
        `
    }
});
