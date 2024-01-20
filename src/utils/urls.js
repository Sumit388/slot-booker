export const path = process.env.REACT_APP_APIURL;
export const domain = process.env.REACT_APP_DOMAIN;

export const getAllBookedDays = `${path}/api/days/bookedDays`;

export const getBookedSlotsByDay = `${path}/api/slots/getBookedSlotsByDay`;

export const addSlot = `${path}/api/slots/addSlot`;
