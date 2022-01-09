export class Registration {
    //konstruktorimetodi joka rakentaa registration-olion
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public food: string,
        public sauna: boolean
    ) {}
}