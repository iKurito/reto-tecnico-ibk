export interface UserResponse {
  total: number;
  users: User[];  
}

export interface User {
  uid: string;
  names: string;
  surnames: string;
  email: string;
  address: string;
  dni: string;
  description: string;
  phone: string;
}