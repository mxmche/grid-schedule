import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 1, name: 'Иванов Иван Иванович', birthDate: '11.11.2011', policy: '1111111111111111' },
      { id: 2, name: 'Алексеев Алексей Алексеевич', birthDate: '22.12.1922', policy: '2222222222222222' },
      { id: 3, name: 'Петров Петр Петрович', birthDate: '01.01.1990', policy: '3333333333333333' },
      { id: 4, name: 'Сергеев Сергей Сергеевич', birthDate: '02.02.2002', policy: '4444444444444444' },
      { id: 5, name: 'Васильев Василий Васильевич', birthDate: '09.09.1949', policy: '5555555555555555' }
    ];

    return { patients };
  }
}
