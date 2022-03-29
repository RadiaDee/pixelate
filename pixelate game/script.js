// 1. first we need to create new DOM elements with document.createElement
// 2. append element to its parent with parentElement.appendChild(newElement)
// to simply grab an element use document.getElementById

// example append element to parent element (li to ul)
// const ul = document.getElementById('the-ul'); // grab unordered list
// const newLi = document.createElement('li');  // create a new list item
// ul.appendChild(newLi);    // append list item to the unordered list

const table = document.getElementsByTagName('table')[0]   // grab the 1 table DOM element store in var

console.log("the table var is: " + table);
function makeRow(){  // create each row for the table
    const row = document.createElement('tr')  // each row has a new tr
    console.log("the row is " + row);
    for (let i=0; i<20; i++){  // for this given row create new cells
        const td = document.createElement('td')   // create cells
        row.appendChild(td)    // append each cell to row
    }
    console.log("the new table is "+ table);
    return table.appendChild(row)   // append row with cells to table
}

makeRow()
makeRow()
makeRow()

makeRow()   // invoke makeRow function

// now make it so users can add rows when they click "Add Row" button

// 1. select add row button DOM element and store in variable
// 2. attach event listener to add row button when clicked invoke makeRow

const button = document.getElementById('add-row')
button.addEventListener('click', makeRow)