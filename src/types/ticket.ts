export class Ticket {
    constructor(
        public id: number,
        public source: string,
        public destination: string,
        public departureTime: Date,
        public arrivalTime: Date,
        public place: string
    ) {}
}