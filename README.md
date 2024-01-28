# Slot Booking App

Slot Booking App is a user-friendly application designed to facilitate effortless scheduling of appointments for users and businesses alike. With intuitive features and a seamless user experience, managing appointments has never been easier. <br/>
[Link to the backend of this project.](https://github.com/Sumit388/slot-booking-backend). <br/>
[Deployed Link](https://slot-booker.vercel.app/)

## Features

- **Efficient Slot Management**: Once a slot is booked, it automatically becomes unavailable for further bookings, ensuring no double bookings occur.
- **Dynamic Calendar**: The calendar dynamically adjusts based on the availability of slots. If all slots for a particular day are booked, the date becomes inactive, preventing users from selecting unavailable dates.
- **Transaction Gateway**: While the application does not currently integrate any transaction gateway, users can still make bookings without the need for account verification. I am planning to integrate transaction gateway in this project in future. If I feel like working on this project once more.

## Usage

1. **Booking Appointments**: Users can browse available slots and book appointments based on their preferred date and time.
2. **Slot Availability**: Slots that have been booked will no longer appear in the available slots list, preventing double bookings and ensuring efficient scheduling.
3. **Calendar Management**: The calendar automatically updates to reflect the availability of slots. If all slots for a particular day are booked, the date becomes inactive, signaling to users that no appointments are available for that day.

## Database Management

All successful bookings are securely stored in the "Slots" table, ensuring data integrity and easy retrieval of booking information.

## Installation

To install Slot Booking App, follow these steps:

1. Clone the repository: `git clone git@github.com:Sumit388/slot-booker.git`
2. Navigate to the project directory.
3. Add .env file with REACT_APP_APIURL delcration. REACT_APP_APIURL is variable which will hold your backend's base address.
4. Run command `npm start` to start the development environment or server.

## Contributions

Contributions to the Slot Booking App project are welcome. If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or raise an issue on the GitHub repository.


## Contact

For any inquiries or support regarding Sumit's Slot Booking App, please contact Sumit Mishra at [sumitmishra388@gmail.com](mailto:sumitmishra388@gmail.com).

Thank you for using Slot Booking App! Happy scheduling!
