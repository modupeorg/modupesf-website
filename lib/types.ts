export interface ScholarshipFormData {
  firstName: string;
  lastName?: string;
  dob: string;
  email: string;
  phoneNumber: string;
  homeAddress: string;
  stateOfResidence: string;
  currentUniversity: string;
  levelOfStudy: string;
  fieldOfStudy: string;
  graduationYear: string;
  cgpa: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ScholarshipFormData]?: string[];
  };
  inputs?: ScholarshipFormData;
}
