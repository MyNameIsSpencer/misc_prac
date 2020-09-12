console.warn('Here it is');

const colourTable = document.getElementById('colour-table');
const colourContainer = document.getElementById('colour-container');
const topNavSeperator = document.getElementById('top-nav-seperator');

// array of objs
// { name: 'blue', parentColour: 'blue', labelColour: white/black, defaultOrder: 54(example), attrWords: [attrName: sfdafd, attrOrder: adsfadf], hex?: #000000, rgb?: (123,123,123) }


console.warn('=============')
console.log(colourContainer)
console.warn('=============')


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
function reorganizeColourMatrixColourGroup(targetColour) {
    let colourGroupArr = [];
    colourArr.map(item => {
        if (item.parentColour === targetColour) {

            colourGroupArr.push(item);
        }
    });
    colourContainer.innerHTML = '';
    for (i = 0; i < colourGroupArr.length; i++ ) {
        createColourBox(colourGroupArr[i]);
    }
}

function reorganizeColourMatrix(targetCategory, targetWord) {
    console.warn(targetWord);
    let carr = [];

    if (targetCategory === 'attrWords') {
        colourArr.map(item => {
            if (item.attrWords && Number.isInteger(item.attrWords[targetWord])) {
                carr.push(item);
            }
        });
    // }

    // if (isAttr) {
    //     colourArr.map(item => {
    //         if (item.attrWords && Number.isInteger(item.attrWords[targetWord])) {
    //             carr.push(item);
    //         }
    //     });
    } else {
        colourArr.map(item => {
            if (item[targetCategory]) {
                carr.push(item);
            }
        });
    }
    colourContainer.innerHTML = '';
    for (i = 0; i < carr.length; i++ ) {
        createColourBox(carr[i]);
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
            // reorganizeColourMatrix

            topNavSeperator.innerHTML = `
                <div style="padding-left: 20px">
                    <h2 id="alphabetical" class="seperator-option" onclick="reorganizeColourMatrixAlphabetically()">Alphabetical</h2>
                    <h2 id="dark" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'dark')">Dark</h2>
                    <h2 id="loud" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'loud')">Loud</h2>
                    <h2 id="offwhite" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'offWhite')">Offwhite</h2>



                    <h2 id="pastel" class="seperator-option" onclick="reorganizeColourMatrix('attrWords', 'pastel')">Pastel</h2>
                    <h2 id="original" class="seperator-option" onclick="loopColours(createColourBox, colourArr)">Original</h2>

                    <h2 id="yellow" class="seperator-option" onclick="reorganizeColourMatrix('parentColour', 'yellow')">Yellow</h2>
                    <h2 id="orange" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('orange')">Orange</h2>
                    <h2 id="red" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('red')">Red</h2>
                    <h2 id="pink" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('pink')">Pink</h2>
                    <h2 id="brown" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('brown')">Brown</h2>
                    <h2 id="purple" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('purple')">Purple</h2>
                    <h2 id="blue" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('blue')">Blue</h2>
                    <h2 id="green" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('green')">Green</h2>
                    <h2 id="white" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('white')">White</h2>
                    <h2 id="gray" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('gray')">Gray</h2>
                    <h2 id="black" class="seperator-option" onclick="reorganizeColourMatrixColourGroup('black')">Black</h2>
                </div>
               
            `
        }
});
