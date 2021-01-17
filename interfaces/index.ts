export interface User {
  uid: string;
  name: string;
  publicKey: string;
}

export interface Rooms {
  room?: string;
  initial?: User;
  invited?: User;
}