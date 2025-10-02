import { Ticket } from "@/types/ticket";


const tickets: Ticket[] = [
    new Ticket(
        1,
        "Abu Dhabi",
        "Dubai",
        new Date("2024-05-01T08:00:00"),
        new Date("2024-05-01T09:30:00"),
        "1A"
    ),
    // new Ticket(
    //     2,
    //     "Dubai",
    //     "Sharjah",
    //     new Date("2024-05-02T10:00:00"),
    //     new Date("2024-05-02T10:30:00"),
    //     "2B"
    // ),
    // new Ticket(
    //     3,
    //     "Sharjah",
    //     "Ajman",
    //     new Date("2024-05-03T12:00:00"),
    //     new Date("2024-05-03T12:15:00"),
    //     "3C"
    // ),
    // new Ticket(
    //     4,
    //     "Ajman",
    //     "Fujairah",
    //     new Date("2024-05-04T14:00:00"),
    //     new Date("2024-05-04T15:30:00"),
    //     "4D"
    // ),
    // new Ticket(
    //     5,
    //     "Fujairah",
    //     "Ras Al Khaimah",
    //     new Date("2024-05-05T16:00:00"),
    //     new Date("2024-05-05T17:30:00"),
    //     "5A"
    // ),
    // new Ticket(
    //     6,
    //     "Ras Al Khaimah",
    //     "Abu Dhabi",
    //     new Date("2024-05-06T18:00:00"),
    //     new Date("2024-05-06T20:30:00"),
    //     "6B"
    // )
];

export { tickets };