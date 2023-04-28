import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import './index.css'; 

const events = [
    {
        title: 'My Event',
        start: new Date('2023-04-30T13:45:00-05:00'),
        end: new Date('2023-04-30T14:00:00-05:00'),
    },
    {
    start: new Date("2023-04-27T12:00:00"),
    end: new Date("2023-04-27T15:00:00"),
    title: "Try",
    },
    {
    start: new Date("2023-04-28T12:00:00"),
    end: new Date("2023-04-28T13:00:00"),
    title: "Try2",
    },
    {
    start: new Date("2023-04-28T12:00:00"),
    end: new Date("2023-04-28T15:00:00"),
    title: "Try4",
    },
    {
    start: new Date("2023-04-29T12:00:00"),
    end: new Date("2023-04-29T13:00:00"),
    title: "Try3",
    },
]

function Calendar() {
    const localizer = momentLocalizer(moment)
    
  return (
    <div className="h-screen m-5">
          <BigCalendar
      localizer={localizer}
      events={events}
    />
    </div>
  )
}

export default Calendar
