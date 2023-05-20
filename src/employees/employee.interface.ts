export interface Employee {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    homeAddress: {
      city: string;
      zipCode: string;
      addressLine: string;
    };
    dateOfEmployment: Date;
    dateOfBirth: Date;
    deletedAt?: Date;
  }