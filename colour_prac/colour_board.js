console.warn('Here it is');

const colourTable = document.getElementById('colour-table');
const colourContainer = document.getElementById('colour-container');
const topNavSeperator = document.getElementById('top-nav-seperator');

// alphabetical
// loud, pastel, light, kinda dark, very dark,
//  offwhite, spencers picks, cream, parentName


// array of objs
// { name: 'blue', parentColour: 'blue', labelColour: white/black, defaultOrder: 54(example), attrWords: [attrName: sfdafd, attrOrder: adsfadf], hex?: #000000, rgb?: (123,123,123) }




console.warn('=============')
console.log(colourContainer)
console.warn('=============')




// for (i = 0; i < 140; i++ ) {
//     colourArr[i].defaultOrder = i;
// }

console.warn(colourArr.length)
loopColours(createColourBox, colourArr);


function loopColours(iteratorFunction, arrSet) {
    colourContainer.innerHTML = '';
    for (i = 0; i < 20; i++ ) {
        for (j = i; j < (i + 121); j += 20) {
            if (arrSet[j] !== undefined) {
                iteratorFunction(arrSet[j]);
            }
        }
    }
}



function createColourBox(colourItem) {
    let colourDivver = document.createElement('div');
    colourDivver.id = colourItem.name;
    colourDivver.style.backgroundColor = colourItem.name;
    colourDivver.classList.add('colour-box');
    colourDivver.style.color = colourItem.labelColour;
    colourDivver.innerHTML = `<div class="inner-colour-div">${colourItem.name}<div>`;
    colourContainer.appendChild(colourDivver);
}



function reorganizeColourMatrixAlphabetically() {
    // let alphaCarr = JSON.parse(JSON.stringify(colourArr)); //      [...colourArr];
    let alphaCarr = [];
    colourArr.map(item => alphaCarr.push(item));
    alphaCarr = alphaCarr.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
    loopColours(createColourBox, alphaCarr)
}




function reorganizeColourMatrixPastel() {
    let pastelCarr = [];
    colourArr.map(item => {
        if (item.attrWords) {
            item.attrWords.forEach(attr => {
                if (attr.attrName === 'pastel') {
                    pastelCarr.push(item);
                }
            });
        }
    });
    colourContainer.innerHTML = '';
    for (i = 0; i < pastelCarr.length; i++ ) {
        createColourBox(pastelCarr[i]);
    }

}

function reorganizeColourMatrixDark() {
    let darkCarr = [];
    colourArr.map(item => {
        if (item.attrWords) {
            item.attrWords.forEach(attr => {
                if (attr.attrName === 'dark') {
                    darkCarr.push(item);
                }
            });
        }
    });
    colourContainer.innerHTML = '';
    for (i = 0; i < darkCarr.length; i++ ) {
        createColourBox(darkCarr[i]);
    }

}


function reorganizeColourMatrixOffWhite() {
    let offWhiteArr = [];
    colourArr.map(item => {
        if (item.attrWords) {
            item.attrWords.forEach(attr => {
                if (attr.attrName === 'offWhite') {
                    offWhiteArr.push(item);
                }
            });
        }
    });
    colourContainer.innerHTML = '';
    for (i = 0; i < offWhiteArr.length; i++ ) {
        createColourBox(offWhiteArr[i]);
    }

}



function reorganizeColourMatrixLoud() {
    let loudCarr = [];
    colourArr.map(item => {
        if (item.attrWords) {
            item.attrWords.forEach(attr => {
                if (attr.attrName === 'loud') {
                    loudCarr.push(item);
                }
            });
        }
    });
    colourContainer.innerHTML = '';
    for (i = 0; i < loudCarr.length; i++ ) {
        createColourBox(loudCarr[i]);
    }

}







const colourSets = document.getElementById('colour-sets');

    colourSets.addEventListener('click', function (event) {
        colourSets.style.backgroundColor = 'cornflowerblue';
        let topNavSeperator = document.getElementById('top-nav-seperator');
        if (topNavSeperator.style.height === '140px') {
            topNavSeperator.style.height = '5px';
        } else {
            topNavSeperator.style.height = '140px';

            // <button onclick="myFunction()">Click me</button>
            topNavSeperator.innerHTML = `
                <h2 id="alphabetical" class="seperator-option" onclick="reorganizeColourMatrixAlphabetically()">Alphabetical</h2>
                <h2 id="dark" class="seperator-option" onclick="reorganizeColourMatrixDark()">Dark</h2>
                <h2 id="loud" class="seperator-option" onclick="reorganizeColourMatrixLoud()">Loud</h2>
                <h2 id="offwhite" class="seperator-option" onclick="reorganizeColourMatrixOffWhite()">Offwhite</h2>
                <h2 id="colourGroup" class="seperator-option">Colour Group</h2>
                <h2 id="picks" class="seperator-option">Picks</h2>
                <h2 id="pastel" class="seperator-option" onclick="reorganizeColourMatrixPastel()">Pastel</h2>
                <h2 id="original" class="seperator-option" onclick="loopColours(createColourBox, colourArr)">Original</h2>
            `
        }
});

// document.getElementById("myDIV").removeEventListener("mousemove", myFunction);

// alphabetical
// loud, pastel, light, very dark,
//  offwhite, spencers picks, cream, parentName
