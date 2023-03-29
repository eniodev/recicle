class User {
    static id: Number;
    name: string;

    id = 0;
    constructor (name: string) {
        this.name = name;
        this.id = this.id + 1;
    }
}

export default User;