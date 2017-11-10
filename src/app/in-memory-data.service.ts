import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemDataService implements InMemoryDbService {
  createDb() {
    const patients = [
      { id: 1, name: 'Иванов Иван Иванович', birthDate: '2011-10-11T08:58:28.634Z', policy: '1111111111111111' },
      { id: 2, name: 'Алексеев Алексей Алексеевич', birthDate: '1922-11-22T08:58:28.634Z', policy: '2222222222222222' },
      { id: 3, name: 'Петров Петр Петрович', birthDate: '1990-01-01T08:58:28.634Z', policy: '3333333333333333' },
      { id: 4, name: 'Сергеев Сергей Сергеевич', birthDate: '2002-01-02T08:58:28.634Z', policy: '4444444444444444' },
      { id: 5, name: 'Васильев Василий Васильевич', birthDate: '1949-08-09T08:58:28.634Z', policy: '5555555555555555' }
    ];

    const experts = [
      {
        name: 'Григорьева Г.Г.',
        specialty: 'Терапевт',
        place: 'ГП №128 к.110',
        step: 30,
        work: {
          days: ['WEEK'],
          duration: 60,
          intervals: [
            ['10:00', '20:00']
          ]
        },
        appointment: {
          days: ['WEEK'],
          duration: 60,
          intervals: [
            ['10:00', '14:00'],
            ['15:00', '20:00']
          ]
        },
        notWorks: {
          days: ['WEEK'],
          duration: 60,
          intervals: [
            ['14:00', '15:00']
          ]
        },
        records: [
          { patientId: 1, time: '10:00', date: new Date() },
          { patientId: 2, time: '10:30', date: new Date() }
        ]
      },
      {
        name: 'Сидорова С.С.',
        specialty: 'Терапевт',
        place: 'ГП №128, к.120',
        step: 30,
        work: {
          days: ['MON', 'TUE', 'THU', 'WED'],
          duration: 60,
          intervals: [
            ['08:00', '15:00']
          ]
        },
        appointment: {
          days: ['MON', 'TUE', 'THU', 'WED'],
          duration: 60,
          intervals: [
            ['10:00', '15:00']
          ]
        },
        edu: {
          days: ['MON'],
          duration: 60,
          intervals: [
            ['10:00', '15:00']
          ]
        },
        records: [
          { patientId: 4, time: '10:00', date: 'MON' }
        ]
      },
      {
        name: 'Сидорова С.С',
        specialty: 'Терапевт',
        place: 'ГП №128 к.130',
        step: 10,
        work: {
          days: ['FRI', 'SAT'],
          duration: 30,
          intervals: [
            ['14:00', '18:00']
          ]
        },
        appointment: {
          days: ['FRI', 'SAT'],
          duration: 30,
          intervals: [
            ['14:00', '18:00']
          ]
        }
      },
      {
        name: 'Елисеева Е.Е.',
        specialty: 'Офтальмолог',
        place: 'ГП №128 к.140',
        step: 30,
        work: {
          days: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
          duration: 60,
          intervals: [
            ['08:00', '18:00']
          ]
        },
        appointment: {
          days: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
          duration: 60,
          intervals: [
            ['10:00', '17:45']
          ]
        },
        docs: {
          days: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
          duration: 60,
          intervals: [
            ['14:30', '14:55'],
            ['16:20', '16:40']
          ]
        },
        records: []
      },
      {
        name: 'Константинова-Щедрина А.А.',
        specialty: 'Офтальмолог',
        place: 'ГП №128 к.150',
        step: 30,
        work: {
          days: ['TUE', 'WED', 'THU', 'FRI', 'SAT'],
          duration: 7,
          intervals: [
            ['09:00', '21:00']
          ]
        },
        appointment: {
          days: ['WED', 'THU', 'FRI', 'SAT'],
          duration: 7,
          intervals: [
            ['09:00', '21:00']
          ]
        },
        records: []
      }
    ];

    return { patients, experts };
  }
}
