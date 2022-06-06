export enum gender{MALE,FEMALE,OTHER};
export class Student{
    private _name:string;
    private _gender: gender;
    private _email:string;
    private _phone:string;
    private _birthday:Date;

    constructor(name: string, gender: gender, email: string, phone: string, birthday?: Date) {
        this._name = name;
        this._gender = gender;
        this._email = email;
        this._phone = phone;
        this._birthday = birthday;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get gender(): gender {
        return this._gender;
    }

    set gender(value: gender) {
        this._gender = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get birthday(): Date {
        return this._birthday;
    }

    set birthday(value: Date) {
        this._birthday = value;
    }
}