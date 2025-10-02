export default class Plan {
    constructor(
        public id: number,
        public title: string,
        public price: string,
        public description: string,
        public imagePath: string,
        public fullDescription: string,
    ) {}
}