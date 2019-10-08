export class PersonClass {
    public readonly firstname: string;
    public readonly lastname: string;
    public age: number;
    private bankAccount: boolean;

    constructor(data) {
        this.firstname = data.firstname;
    }

    public example() {
        
    }
}