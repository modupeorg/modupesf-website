export interface ScholarshipFormData {
  firstName: string;
  lastName?: string;
  email: string;
  phoneNumber: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof ScholarshipFormData]?: string[];
  };
  inputs?: ScholarshipFormData;
}
