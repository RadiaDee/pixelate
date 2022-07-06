// ======================= creating elements in js =======================
// 1. first we need to create new DOM elements with document.createElement
// 2. append element to its parent with parentElement.appendChild(newElement)
// to simply grab an existing element use document.getElementById

// example append element to parent element (li to ul)
// const ul = document.getElementById('the-ul'); // grab unordered list parent element
// const newLi = document.createElement('li');  // create a new list item
// ul.appendChild(newLi);    // append list item to the unordered list
// ============= create tables and rows in js ============================
// select table element (instead of tr and td) to add cells, store it as variable
const table = document.getElementsByTagName('table')[0]   // grab table DOM element

console.log("the table var is: " + table);

function makeRow(){  // creates each row tr for the table
    const row = document.createElement('tr');  // create a new tr
    console.log("the row is " + row);
        for (let i=0; i<20; i++){  // create new cells
            const td = document.createElement('td');   // create 20 cells
            row.appendChild(td);    // append 20 td to row
        }
    console.log("the new table is "+ table);
    return table.appendChild(row);   // then append row with td to table
}
// invoke makeRow a few times
makeRow();
makeRow();
makeRow();

makeRow();   // invoke makeRow function
// ------------ MAKING ROWS ----------------------------------
// now make it so users can add rows when they click "Add Row" button

// 1. select add row button DOM element and store in variable
// 2. attach event listener to add row button when clicked invoke makeRow

const button = document.getElementById('add-row');
button.addEventListener('click', makeRow);

// ------------- COLOR CLASSES ---------------------------------
// color classes
// make it so that clicking cell toggles its color
// determine cell's color by presence or absence of CSS class
// make several classes that correspond to the colors in css
// event delegation
// every time click <td> cell we need a function to add color
// use event delegation, attach event listener to parent element instead of to each td
// when td child element is clicked, event will bubble up and affect the parent
// as a result the parents event listener is invoked

// attach event listener to common ancestor of the td elements the table element
// the table element (instead of attaching it to every td or tr)

// write function colorize that is attached as click handler to parent element

table.addEventListener('click', colorize);  // add to the table the event listener that
// invokes colorize
// function colorize(event){   // simple colorize sample which logs out clicked when clicked
//     console.log('the cell is clicked!');
// }

// ----------- EVENT TARGET ----------------------------------------

// change the color of the td cells
// we can change the appearance of the dom by mutating className property on the selected dom node
// ex tdCell.className ='red';    // gives this dom node the red class

// now we need to get the appropriate dom node (like td?)
// it is on the event object that the event handler or event listener received
// for any event handler event.target is the actual dom node that was clicked on (which is not necessarily the DOM node where the event listener is attached)
// in the event handler, the colorize function, add event parameter
// obtain target that was clicked from event.target
// if target dom node doesnt have className, set it equal to a color (to toggle on)
// if target dom node already has className, set it to an empty string (to toggle off)


// function colorize (event) {
//     const target = event.target;
//     if (target.className.length){  // if there is anything in that td's className
//         target.className = '';     // turn it off
//     } else {
//         target.className = 'red';   // turn it on
//     }
// }

// ---------- CHANGE EVENT -------------------------------------------
// not working?
// now make it so we can select from a variety of colors
// use the <select> element (which has various options) in html and 'change' event it fires when we select something
// grab select element from the dom and attach an event listener for the change event
// give it call back function that expects the event as an argument and console logs event.target.value
// in dev tools, when you pick something from select field you should see options value logged to the console


// function selectTest (event){   // test function to see if the change event invokes selectTest and logs the target value
//     const target = event.target.value;
//     console.log("the target is: + target);
// }
// select.addEventListener('change', selectTest);

// ---------- CHOOSING A COLOR ---------------------------------------

// now we can choose a color
// use js to determine chosen color
// grab color chosen by user and then change cells we click on to that color

// store selected color in variable called chosenColor, reassign that variable everytime color selected
// make sure to give it some default value, this should match the first option in select

let chosenColor = 'red';   // default value

// when the value from select changes, reassign
// the selected color variable
const select = document.getElementById('select-tag');  // first grab the select
select.addEventListener('change', function (event){   // when we change the select
    chosenColor = event.target.value;         // the chosen color becomes the target in select
})

// combine this with the colorize function to change the color of a td that is clicked
function colorize (event) {
    const target = event.target;
    if (target.className.length){  // if there is something in className
        target.className = '';    // make it blank
    } else {         
        // your colorize function should use chosenColor
        // rather than hardcoded value
        // target.className = 'red';
        target.className = chosenColor;       // otherwise the target is changed to the chosenColor
    }
}

// ------ DISABLE TABLE COLORING --------------------

// when someone clicks the space between the cells it colors tr and table in the background
// we should be deliberate and only change background of target element that is td
// how to we tell what kind of element the event target is?
// we can use event.target.tagName
