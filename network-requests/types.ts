export interface SignupTypes {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    isFree: boolean,

    package: {
        packageName: string;
        perMonthDuties: string;
        packageAmount: number;
    };
}

export interface SetupYourBusiness {
    businessName: string,
    number: string,
    address: string,
    gstType: string,
    gstNumber: string,
    pincode: string,
    city: string,
    country: string,
    verificationCode: string,
    profile: string,
}

export interface LeadTypes {
    firstName: string,
    lastName: string,
    email: string,
    number: string,
    message: string
}