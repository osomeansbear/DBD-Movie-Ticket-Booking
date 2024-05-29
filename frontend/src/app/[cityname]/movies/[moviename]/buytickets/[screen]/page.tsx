"use client"
import React from 'react'
// import DatePicker from "react-horizontal-datepicker";
// import './BuyTicketsPage.css'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const page = () => {
    // const pathname = usePathname()
    const movie = {
        moviename: 'Jawan',
        date: new Date(),
        language: 'Hindi',
        type: 'Action/Thriller',
        screens: [
            {
                name: 'Screen 1',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 2',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            },
            {
                name: 'Screen 3',
                location: 'PVR Cinemas, Forum Mall, Koramangala'
            }
        ]
    }

    const screen = {

        name: 'Screen 1',
        location: 'PVR Cinemas, Forum Mall, Koramangala',
        timeslots: [
            {
                time: '10:00 AM',
                seats: [
                    {
                        // platinum
                        type: 'platinum',
                        rows: [
                            {
                                // row 2
                                rowname: 'H',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'F',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        // gold
                        type: 'gold',
                        rows: [
                            {
                                // row 2
                                rowname: 'E',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'C',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        // silver - 20 objects
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'A',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
            {
                time: '1:30 PM',
                seats: [
                    {
                        // platinum
                        type: 'platinum',
                        rows: [
                            {
                                // row 2
                                rowname: 'H',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'F',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        // gold
                        type: 'gold',
                        rows: [
                            {
                                // row 2
                                rowname: 'E',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'C',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        // silver - 20 objects
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'A',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
            {
                time: '4:00 PM',
                seats: [
                    {
                        // platinum
                        type: 'platinum',
                        rows: [
                            {
                                // row 2
                                rowname: 'H',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'F',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        // gold
                        type: 'gold',
                        rows: [
                            {
                                // row 2
                                rowname: 'E',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'C',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        // silver - 20 objects
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'A',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
            {
                time: '8:30 PM',
                seats: [
                    {
                        // platinum
                        type: 'platinum',
                        rows: [
                            {
                                // row 2
                                rowname: 'H',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'F',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 500
                    },
                    {
                        // gold
                        type: 'gold',
                        rows: [
                            {
                                // row 2
                                rowname: 'E',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'C',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 300
                    },
                    {
                        // silver - 20 objects
                        type: 'silver',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            },
                            {
                                // row 2
                                rowname: 'A',
                                cols: [
                                    // col 1
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                    // col 2
                                    {
                                        seats: [
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '2'
                                            },

                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '5'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available', seat_id: '6'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '7'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '8'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'available',
                                                seat_id: '9'
                                            },
                                            {
                                                type: 'seat',
                                                status: 'not-available',
                                                seat_id: '10'
                                            }
                                        ]
                                    },
                                ]
                            }
                        ],
                        price: 150
                    }
                ],
            },
        ]
    }

    const generateSeatLayout = () => {
        const x = screen.timeslots.findIndex((t: any) => t.time === selectedTime.time)
        return screen.timeslots[x].seats.map((seatType, index) => (
            <div className="seat-type" key={index}>
                <h2>{seatType.type} - Rs. {seatType.price}</h2>
            </div>
        ))
    }

    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

  return (
    <div className='selectseatpage'>
      <div className='s1'>
          <div className='head'>
              <h1>{movie.moviename} - {movie.language}</h1>
              <h3>{movie.type}</h3>
          </div>
      </div>

      <div className="selectseat">
        <div className="timecont">
            {screen.timeslots.map((time: any, index:number) => (
                <h3 
                    className={selectedTime === time.time ? 'time selected' : 'time'}
                    onClick={() => {
                        setSelectedTime(time)
                        // setSelectedTime([])
                    }}
                    key={index}
                >
                    {time.time}
                </h3>
            ))}
        </div>
        <div className="indicators">
            <div>
                <span className="seat-unavailable"></span>
                <p>Not available</p>
            </div>
            <div>
                <span className="seat-unavailable"></span>
                <p>Available</p>
            </div>
            <div>
                <span className="seat-selected"></span>
                <p>Selected</p>
            </div>
        </div>
        {generateSeatLayout()}
        <div className="totalcont"></div>
      </div>
    </div>
  )
}

export default page