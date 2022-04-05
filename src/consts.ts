import { User, Event } from "./types";

export const users: User[] = [
  {
    id: 1,
    name: "John Marston",
    email: "jmarston@gmail.com",
    image: "john_marston.jpg",
    bgColor: "#D81B60",
    color: "black",
  },
  {
    id: 2,
    name: "Billy Gates",
    email: "bgates@gmail.com",
    image: "billy_gates.jpg",
    bgColor: "#1E88E5",
    color: "black",
  },
  {
    id: 3,
    name: "Martina Brown",
    email: "mbrown@gmail.com",
    image: "martina_brown.jpg",
    bgColor: "#FFC107",
    color: "black",
  },
  {
    id: 4,
    name: "Nelly Newman",
    email: "nnewman@gmail.com",
    image: "nelly_newman.jpg",
    bgColor: "#004D40",
    color: "white",
  },
];

export const calendarEvents: Event[] = [
  {
    userId: 1,
    date: new Date("04/05/2022"),
    location: "London",
  },
  {
    userId: 2,
    date: new Date("04/05/2022"),
    location: "London",
  },
  {
    userId: 2,
    date: new Date("04/06/2022"),
    location: "London",
  },
  {
    userId: 3,
    date: new Date("04/07/2022"),
    location: "NYC",
  },
  {
    userId: 3,
    date: new Date("04/08/2022"),
    location: "NYC",
  },
  {
    userId: 3,
    date: new Date("04/11/2022"),
    location: "NYC",
  },
  {
    userId: 1,
    date: new Date("04/12/2022"),
    location: "London",
  },
  {
    userId: 2,
    date: new Date("04/12/2022"),
    location: "London",
  },
  {
    userId: 2,
    date: new Date("04/13/2022"),
    location: "London",
  },
  {
    userId: 4,
    date: new Date("04/14/2022"),
    location: "Japan",
  },
  {
    userId: 4,
    date: new Date("04/15/2022"),
    location: "Japan",
  },
  {
    userId: 4,
    date: new Date("04/18/2022"),
    location: "Japan",
  },
  {
    userId: 4,
    date: new Date("04/19/2022"),
    location: "Japan",
  },
  {
    userId: 4,
    date: new Date("04/20/2022"),
    location: "Japan",
  },
  {
    userId: 4,
    date: new Date("04/21/2022"),
    location: "Japan",
  },
  {
    userId: 4,
    date: new Date("04/22/2022"),
    location: "Japan",
  },
];
