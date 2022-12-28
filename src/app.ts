import { ReferenceItem, UL, RefBook, Shelf } from './classes';
import { Category } from './enums';
import { getAllBooks, printBook, printRefBook, setDefaultConfig, purge, getObjectProperty, createCustomer, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchResult } from './functions';
import { Author, Book, Librarian, Logger, Magazine } from './interfaces';
import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { Library } from './classes/library';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();
// createCustomer('Pavlo');
// createCustomer('Pavlo', 30);
// createCustomer('Pavlo', 30, 'ZP');
/* const myID: string = createCustomerId('Ann', 10);
console.log(myID);
let idGenerator: (name: string, id: number) => string;
let idGenerator: typeof createCustomerId;
idGenerator = (name: string, id: number) => `${id}/${name}`;
idGenerator = createCustomerId;
console.log(idGenerator('Boris', 20));*/
// console.log(getBookTitlesByCategory(Category.CSS));
// logFirstAvailable();
// console.log(getBookById(1));
// console.log(checkoutBooks('NoName Customer', 1, 2, 3));


// Task 03.03


/* console.log(getTitles(1, true));
console.log(getTitles(true));
console.log(getTitles(false));
console.log(getTitles(2, false)); */


/* Task 03.04 */


// console.log(bookTitleTransform('Learn Typescript'));
// console.log(bookTitleTransform(123));


/* Task 04.01 Interfaces */

const myBook: Book = {
    id: 4,
    title: 'colors',
    author: 'Eric',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    }
};

// printBook(myBook);
// myBook.markDamaged('missing back cover');


/* Task 04.02  */


const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);


/* Task 04.03  */


const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'anna@example.com',
    numBooksPublished: 2,
};

/* const favoriteLibrarian: Librarian = {
    name: 'Boris',
    email: 'boris@example.com',
    department: 'Classical Literature',
    assistCustomer: null,
}; */


/* Task 04.04  */


const offer: any = {
    book: {
        title: 'Essential TypeScript'
    },
};

/* console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitl?.());
console.log(offer.book.authors?.[0]); */


/* Task 04.05  */


// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));


/* Task 05.01  */


/* const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
console.log(ref);
ref.printItem();
ref.publisher = 'abc group';
console.log(ref.publisher);
console.log(ref.getID()); */


/* Task 05.02  */


/* const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
refBook.printItem();
console.log(refBook);
console.log(refBook.getID());
refBook.printCitation(); */


/* Task 05.03  */


// refBook.printCitation();


/* Task 05.04  */


/* const favoriteLibrarian: Librarian /* & A*/ /* = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript'); */

// favoriteLibrarian.a = 2;


/* Task 05.05  */


const personBook: PersonBook = {
    name: 'Anna',
    author: 'Anna',
    available: true,
    category: Category.Angular,
    email: 'anna@example.com',
    id: 1,
    title: 'Unknown'
};

const options = { duration: 20 };
const options2 = setDefaultConfig(options);
// console.log(options, options2);


/* Task 06.32  */


// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian /* & A*/ = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);


/* Task 06.05  */


const flag = true;

/* if (flag) {
    import('./classes')
        .then(o => {
            const reader = new o.Reader;
            reader.name = 'Anna';
            reader.take(getAllBooks()[0]);

            console.log(reader);
        })
        .catch(err => console.log(err))
        .finally(() => console.log('Complete~'));
} */

/* if (flag) {
    const o = await import('./classes');

    const reader = new o.Reader;
    reader.name = 'Anna';
    reader.take(getAllBooks()[0]);

    console.log(reader);
} */


/* Task 06.06  */


// let library: Library = new Library();

/* let library: Library = {
    id: 1,
    name: 'Anna',
    address: '',
};
console.log(library); */


/* Task 07.01  */


const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software},
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

/* const result = purge(inventory);
console.log(result);

const result1 = purge([1, 2, 3]);
console.log(result1);

const result2 = purge(['123', '456', '789']);
console.log(result2); */


/* Task 07.02  07.03*/


/* const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title); */

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'CodeMags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

/* const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);

magazineShelf.printTitles();
console.log(magazineShelf.find('Five Points')); */

// console.log(getObjectProperty(inventory[1], 'category'));


/* Task 07.04*/


const bookRequiredFields: BookRequiredFields = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    id: 1,
    markDamaged: null,
    pages: 200,
    title: 'Learn Angular',
};

const updatedBook: UpdatedBook = {
    id: 1,
    pages: 300
};

let params: Parameters<CreateCustomerFunctionType>;
params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);


/* Task 07.05*/


/* Task 08.01, 08.02 */


// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian['printLibrarian']();


/* Task 08.03 */


// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;


/* Task 08.04 */


// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();


/* Task 08.05 */


// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Borys', 'Learn TypeScript');


/* Task 08.06 */


// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Borys', 'Learn TypeScript');
// console.log(favoriteLibrarian);


/* Task 08.07 */


// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.copies = 5;
// refBook.copies = -10;
// console.log(refBook.copies);


/* Task 09.01 */


// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');


/* Task 09.02 */


/* console.log('Begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles);
        // return titles.length;
        return Promise.resolve(titles.length);
    })
    .then(n => console.log(n))
    .catch(reason => console.log(reason));
getBooksByCategoryPromise(Category.Software)
    .then(titles => console.log(titles))
    .catch(reason => console.log(reason));
console.log('End'); */


/* Task 09.03 */


console.log('Begin');
logSearchResult(Category.JavaScript);
logSearchResult(Category.Software).catch(error => console.log(error));
console.log('End');
