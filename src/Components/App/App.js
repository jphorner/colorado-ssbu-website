import './App.css';
import './Colorado-Smash-logo.png';
import Events from '../Events/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container"></div>
      </header>
      <main>
        <h2 className="upcoming-events">Upcoming Events</h2>
        <section className="events-container">
          <Events />
        </section>
      </main>
    </div>
  );
}

export default App;
