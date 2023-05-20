export class CreateEmployeeDto {
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
  }
  
  export class UpdateEmployeeDto {
    name?: string;
    email?: string;
    phoneNumber?: string;
    homeAddress?: {
      city?: string;
      zipCode?: string;
      addressLine?: string;
    };
    dateOfEmployment?: Date;
    dateOfBirth?: Date;
  }