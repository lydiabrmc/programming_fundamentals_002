// eslint-disable-next-line no-unused-vars
const catalogue = [
    "The Catcher in the Rye by J.D. Salinger (10)",
    "Dracula by Bram Stoker (0)",
    "Between the Assassinations by Aravind Adiga (9)",
    "Wolf Hall by Hilary Mantel (33)",
    "Bring Up The Bodies by Hilary Mantel (31)",
    "A Place of Greater Safety by Hilary Mantel (11)",
    "Giving Up the Ghost by Hilary Mantel (8)",
    "The Assassination of Margaret Thatcher by Hilary Mantel (43)",
    "The Yellow Wallpaper by Charlotte Perkins Gilman (12)",
    "Conversations With Friends by Sally Rooney (1)",
    "Normal People by Sally Rooney (2)",
    "Everything I Never Told You by Celeste Ng (6)",
    "2666 by Robert Bolaño (17)",
    "By Night In Chile by Robert Bolaño (8)",
    "A Tale of Two Cities by Charles Dickens (3)",
    "Oliver Twist by Charles Dickens (7)",
    "Great Expectations by Charles Dickens (1)",
    "The Blind Assassin by Margaret Atwood (8)",
    "Why Be Happy When You Could Be Normal? by Jeanette Winterson (19)",
    "The Origin of Species by Charles Darwin (50)"
];
//while loop
function checkBook(title) {
    if (!title) throw new Error("Please provide a title");
    let result = false;
    let i = 0;
    while (i < catalogue.length) {
        const book = catalogue[i].toLowerCase();
        if (book.includes(title.toLowerCase())) {
            return result = true;
        } else {
            result = false;
        }
        i++;
    }
    return result;
}

// for loop 
// // // let result = false;
// // // for (let i = 0; i < catalogue.length; i++) {
// // //     const book = catalogue[i].toLowerCase();
// // //     if (book.includes(title.toLowerCase())) {
// // //         result = true;
// //     }
// // }
// return result;
//}

function countBooksByKeyword(keyword) {
    if (!keyword) throw new Error("Please provide a keyword");
    let count = 0;
    for (let i = 0; i < catalogue.length; i++) {
        if (catalogue[i].toLowerCase().includes(keyword)) {
            count++;
        }
    }
    return count;
}

//     let catalogue = orignal.slice(0);
//     for (i = 0; i < original.length; i++) {
//       let count = 0;

//         if (catalogue[i] == keyword) { n++ }
//     }
//     return n;
// }
//Need to read the array to show how many times a keyword is read.

function getBooksByAuthor(author) {
    if (!author) throw new Error("Please provide an author");
    // Your code here
    let count = 0;
    for (i = 0; i < catalogue.substr(catalogue.indexOf('by')); i++) {
        if (catalogue[i].includes(author)) {
            return count++;
        }
        console.log(catalogue);
    }

}

function getStockCount(title) {
    if (!title) throw new Error("Please provide a title");
    // Your code here
}

function stockReview(title) {
    if (!title) throw new Error("Please provide a title");
    // Your code here
}

module.exports = {
    checkBook,
    countBooksByKeyword,
    getBooksByAuthor,
    getStockCount,
    stockReview
};