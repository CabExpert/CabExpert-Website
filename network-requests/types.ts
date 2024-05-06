export interface SignupTypes {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
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