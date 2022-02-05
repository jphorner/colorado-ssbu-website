import React from 'react';
import './Events.css';
import { dummyData } from './dummyData.js';

const Events = () => {
  let eventList = dummyData.map( event => {
    return <article className="event" key={Math.random()}>
      <h4 className="event-name">{event.name}</h4>
      <section className="event-schedule">
        <div className="schedule centered">{event.schedule}</div>
        <div className="start-time">Start time: {event.startTime}</div>
        <div className="end-time">End time: {event.endTime}</div>
      </section>
      {
        event.over18 && <div className="over-eighteen bold">18+ ONLY</div>
      }
      {
        event.over21 && <div className="over-twenty-one bold">21+ ONLY</div>
      }
      <div className="other-brackets">
        {
          event.hasMelee && <div className="has-melee bold">Melee Bracket Available</div>
        }
        {
          event.hasN64 && <div className="has-N64 bold">N64 Bracket Available</div>
        }
      </div>
      <section className="additional-info">
        <div className="venue-fee bold">Venue fee: <div className="normal">{event.venueFee}</div></div>
        <div className="setup-bonus bold">Setup bonus: <div className="normal">{event.setupBonus}</div></div>
      </section>
      {event.preReg && <section className="registration-info">
        <div className="pre-reg bold">Pre-registration: <div className="normal">{event.preReg}</div></div>
        {
          event.preReg && <div className="pre-reg-link bold">Registration link: <div className="normal">{event.preRegLink}</div></div>
        }
        </section>
      }
      {!event.preReg && <div className="no-reg bold">Pre-registration not available</div>}
    </article>
  });

  return (
    <section className="event-list">{eventList}</section>
  )
}

export default Events;

// venueFee: "$10 ($5 venue fee and $5 pot bonus)",
// setupBonus: "Free entry if you bring a full setup with DLC unlocked",
// hasMelee: false,
// hasN64: false,
// bannedCharacters: "None",
// over18: true,
// preReg: "Optional",
// preRegLink: "https://www.google.com"
