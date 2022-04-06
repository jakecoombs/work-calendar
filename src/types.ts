export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
  bgColor: string;
  color: string;
}

export interface CalendarEvent {
  userId: number;
  date: Date;
  location: string;
}
