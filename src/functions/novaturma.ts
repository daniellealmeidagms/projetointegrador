const { addDays, isWeekend, isSameDay, format } = require("date-fns")

const holidays = [new Date("2023-12-25"), new Date("2024-01-01")]

function isHoliday(date, holidays) {
  return holidays.some((holiday) => isSameDay(date, holiday))
}

function calculateEndDate(startDate, numberOfDays) {
  let currentDate = new Date(startDate)
  let formatDate = format(currentDate, "yyyy/MM/dd")
  let remainingDays = numberOfDays

  while (remainingDays > 0) {
    currentDate = addDays(currentDate, 1)
    if (!isWeekend(currentDate) && !isHoliday(currentDate, holidays)) {
      remainingDays--
    }
  }

  return currentDate
}

const startDate = new Date("2023-09-01")
const numberOfDays = 50

let currentDate = new Date(startDate)
let schedule = []

while (schedule.length < numberOfDays) {
  if (!isWeekend(currentDate) && !isHoliday(currentDate, holidays)) {
    schedule.push(new Date(currentDate))
  }
  currentDate = addDays(currentDate, 1)
}