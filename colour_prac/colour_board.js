console.warn('Here it is');

const colourTable = document.getElementById('colour-table');
const colourContainer = document.getElementById('colour-container');

// alphabetical
// loud, pastel, light, kinda dark, very dark, offwhite, spencers picks, cream, parentName


// array of objs
// { name: 'blue', parentColour: 'blue', labelColour: white/black, defaultOrder: 54(example), attrWords: [attrName: sfdafd, attrOrder: adsfadf], hex?: #000000, rgb?: (123,123,123) }
const colourArr = [
    // {
    //     name: ,
    //     labelColour: 'white',
    //     defaultOrder: ,
    //     attrWords: [
    //         {
    //             attrName: '',
    //             attrOrder: 
    //         }
    //     ]

    // },
    {
        name: 'lightyellow',
        labelColour: 'black',
        defaultOrder: 0,
        attrWords: [
            {
                attrName: 'light',
                attrOrder: 0
            },
            {
                attrName: 'offWhite',
                attrOrder: 0
            },
            {
                attrName: 'pastel',
                attrOrder: 0
            }
        ]

    },
    {
        name: 'lemonchiffon',
        labelColour: 'black',
        defaultOrder: 1,
        // attrWords: [
        //     {
        //         attrName: '',
        //         attrOrder: 900 
        //     }
        // ]
    },
    {
        name: 'lightgoldenrodyellow',
        labelColour: 'black',
        defaultOrder: 2,
        // attrWords: [
        //     {
        //         attrName: '',
        //         attrOrder: 900 
        //     }
        // ]
    },
    {
        name: 'palegoldenrod',
        labelColour: 'black',
        defaultOrder: 6,
    },
    {
        name: 'khaki',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkkhaki',
        labelColour: 'white',
        defaultOrder: 14,
    },



    {
        name: 'yellow',
        labelColour: 'black',
        defaultOrder: 7,
    },
    {
        name: 'gold',
        labelColour: 'white',
        defaultOrder: 8,
    },
    {
        name: 'orange',
        labelColour: 'white',
        defaultOrder: 9,
    },
    {
        name: 'darkorange',
        labelColour: 'white',
        defaultOrder: 10,
    },
    {
        name: 'orangered',
        labelColour: 'white',
        defaultOrder: 11,
    },
    {
        name: 'tomato',
        labelColour: 'white',
        defaultOrder: 12,
    },
    {
        name: 'coral',
        labelColour: 'white',
        defaultOrder: 13,
    },
    
    {
        name: 'sandybrown',
        labelColour: 'white',
        defaultOrder: 15,
    },
    {
        name: 'moccasin',
        labelColour: 'black',
        defaultOrder: 4,
        // attrWords: [
        //     {
        //         attrName: '',
        //         attrOrder: 900 
        //     }
        // ]
    },
    {
        name: 'cornsilk',
        labelColour: 'black',
        defaultOrder: 800
    },

    

    {
        name: 'papayawhip',
        labelColour: 'black',
        defaultOrder: 3,
        // attrWords: [
        //     {
        //         attrName: '',
        //         attrOrder: 900 
        //     }
        // ]
    },





    {
        name: 'blanchedalmond',
        labelColour: 'black',
        defaultOrder: 800
    },
    {
        name: 'bisque',
        labelColour: 'black',
        defaultOrder: 800
    },

    {
        name: 'peachpuff',
        labelColour: 'black',
        defaultOrder: 5,
        // attrWords: [
        //     {
        //         attrName: '',
        //         attrOrder: 900 
        //     }
        // ]
    },
    




    {
        name: 'navajowhite',
        labelColour: 'black',
        defaultOrder: 800
    },
    {
        name: 'wheat',
        labelColour: 'black',
        defaultOrder: 800
    },
    {
        name: 'burlywood',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'tan',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'rosybrown',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'goldenrod',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'darkgoldenrod',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'peru',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'chocolate',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'saddlebrown',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'sienna',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'brown',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'maroon',
        labelColour: 'white',
        defaultOrder: 800
    },

    {
        name: 'darkred',
        labelColour: 'white',
        defaultOrder: 800
    },





    {
        name: 'red',
        labelColour: 'black',
        defaultOrder: 800
    },



    {
        name: 'firebrick',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'crimson',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'indianred',
        labelColour: 'white',
        defaultOrder: 800
    },
    {
        name: 'lightcoral',
        labelColour: 'black',
        defaultOrder: 800
    },
    {
        name: 'salmon',
        labelColour: 'black',
        defaultOrder: 800
    },
    {
        name: 'darksalmon',
        labelColour: 'black',
        defaultOrder: 800
    },
    {
        name: 'lightsalmon',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'lavenderblush',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'mistyrose',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'pink',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'lightpink',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'hotpink',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'deeppink',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'palevioletred',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'orchid',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'plum',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'thistle',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'lavenderblush',
        labelColour: 'black',
        defaultOrder: 14,
    },

    {
        name: 'violet',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'fuchsia',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'magenta',
        labelColour: 'black',
        defaultOrder: 14, 
    },
    {
        name: 'mediumvioletred',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumorchid',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkviolet',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkorchid',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkmagenta',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'purple',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'indigo',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkslateblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumpurple',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'blueviolet',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'slateblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumslateblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'steelblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'royalblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'cornflowerblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'blue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'navy',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'midnightblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'dodgerblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'steelblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightsteelblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'powderblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'skyblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightskyblue',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'deepskyblue',
        labelColour: 'white',
        defaultOrder: 14,
    },


    {
        name: 'cadetblue',
        labelColour: 'white',
        defaultOrder: 14,
    },


    {
        name: 'greenyellow',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'chartreuse',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lawngreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lime',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'limegreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'palegreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightgreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'springgreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumseagreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'seagreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'forestgreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'green',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkgreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'yellowgreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'olivedrab',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'olive',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkolivegreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumaquamarine',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkseagreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightseagreen',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkcyan',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'teal',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'aqua',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'cyan',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightcyan',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'paleturquoise',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'aquamarine',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'turquoise',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'mediumturquoise',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkturquoise',
        labelColour: 'white',
        defaultOrder: 14,
    },

    {
        name: 'white',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'snow',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'honeydew',
        labelColour: 'black',
        defaultOrder: 14,
    },

    {
        name: 'mintcream',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'azure',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'aliceblue',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'ghostwhite',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'whitesmoke',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'seashell',
        labelColour: 'black',
        defaultOrder: 14,
    },    {
        name: 'beige',
        labelColour: 'black',
        defaultOrder: 14,
    },    {
        name: 'oldlace',
        labelColour: 'black',
        defaultOrder: 14,
    },    {
        name: 'floralwhite',
        labelColour: 'black',
        defaultOrder: 14,
    },    {
        name: 'ivory',
        labelColour: 'black',
        defaultOrder: 14,
    },    {
        name: 'antiquewhite',
        labelColour: 'black',
        defaultOrder: 14,
    },    
    {
        name: 'linen',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'gainsboro',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'lightgray',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'silver',
        labelColour: 'black',
        defaultOrder: 14,
    },
    {
        name: 'darkgray',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'gray',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'dimgray',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'lightslategray',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'slategray',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'darkslategray',
        labelColour: 'white',
        defaultOrder: 14,
    },
    {
        name: 'black',
        labelColour: 'white',
        defaultOrder: 14,
    },

































    

    // },
    // {
    //     name: '',
    //     labelColour: 'white',
    //     defaultOrder: 900,
    //     // attrWords: [
    //     //     {
    //     //         attrName: '',
    //     //         attrOrder: 900 
    //     //     }
    //     // ]

    // },
    // {
    //     name: '',
    //     labelColour: 'white',
    //     defaultOrder: 900,
    //     // attrWords: [
    //     //     {
    //     //         attrName: '',
    //     //         attrOrder: 900 
    //     //     }
    //     // ]

    // },


   
];




// for (i = 0; i < 20; i++) {
//     const row = colourContainer.appendChild('div');
//     row.id = `row${i}`;
//     // for (j = 0; j < 7; j ++) {
//     //     row.insertCell(0);
//     // }
// }
console.warn('=============')
console.log(colourContainer)
console.warn('=============')

// for (i = 0; i < 20; i++) {
//     const row = colourTable.insertRow(0);
//     // for (j = 0; j < 7; j ++) {
//     //     row.insertCell(0);
//     // }
// }


// for (i = colourArr.length - 1; i >= 0; i--) {
//     row = createRow(colourArr[i]);
//     row.id = `row-${i}`;
// }






// 0,20,40,60,80,100,120
// 1,21
// 0  20 40 60 80 100 120
// 1  21 41 61 81 101 121
// 2  22 42 62 82 102 122
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14


for (i = 0; i < 20; i++ ) {
    for (j = i; j < (i + 121); j += 20) {
        createColourBox(colourArr[j]);
    }
}


function createColourBox(colourObj) {
    let colourDivver = document.createElement('div');


    colourDivver.id = colourObj.name;
    colourDivver.style.backgroundColor = colourObj.name;
    colourDivver.classList.add('colour-box');
    colourDivver.style.color = colourObj.labelColour;
    // colourDivver.style.paddingLeft =
    colourDivver.innerText = colourObj.name;
    // colourDivver.innerHTML = `<div
    //     class="colour-box"
    //     style="background-color: ${colourObj.name}; color: ${colourObj.labelColour}">
    //     ${colourObj.name} ${i}
    // </div>`;

    // document.body.appendChild(colourDivver);
    colourContainer.appendChild(colourDivver);



}

console.log(document.getElementById('firebrick'));
console.log()



function createRow(colourObj) {
    let rowCount = 0;
    if (rowCount < 20) {
        rowCount ++;
    }



    const row = colourTable.insertRow(0);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = `<div
        class="colour-box"
        style="background-color: ${colourObj.name}; color: ${colourObj.labelColour}">
        ${colourObj.name} ${i}
    </div>`;
    cell1.id = ''

}

// unction myCreateFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//   }
  
//   function myDeleteFunction() {
//     document.getElementById("myTable").deleteRow(0);
//   }

