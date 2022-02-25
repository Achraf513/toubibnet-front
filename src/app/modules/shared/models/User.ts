import {Role} from './Role';

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  passwordHash: string,
  roles: Role[]
}
