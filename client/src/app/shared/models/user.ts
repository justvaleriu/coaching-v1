export type User = {
    firstName: string;
    lastName: string;
    email: string;
    address: AddressErrors;
}

export type Address = {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}