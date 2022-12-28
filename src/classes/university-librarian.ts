import { format, logger, logMethod, logParameter, sealed, writable } from '../decorators';
import * as Interfaces from '../interfaces';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian/* , A*/ {
    @format()
    name: string;
    email: string;
    department: string;

    // a: number = 1;

    @logMethod
    assistCustomer(@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty() {
        console.log('Assisting faculty');
    }

    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    };
}

export { UniversityLibrarian };
