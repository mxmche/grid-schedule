export class Expert {
  name: string;
  specialty: string;
  place: string;
  step: number;
  work: {days: Array<string>, duration: number, intervals: Array<string>};
  appointment: {days: Array<string>, duration: number, intervals: Array<string>};
  notWorks: {days: Array<string>, duration: number, intervals: Array<string>};
  records: Array<Object>;
}
