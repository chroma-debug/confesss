import React, { useState } from 'react';
import LiveFeed from './components/LiveFeed';

function App() {
  const [activeTab, setActiveTab] = useState('live'); // 'live' or 'all'

  return (
    <div className="app-container">
      {/* Ambient background spheres */}
      <div className="ambient-bg">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
      </div>

      <header>
        <h1>60 Second Confession</h1>
        <p className="subtitle">
          speak your truth. it fades away in 24 hours. no trace, no names.
        </p>

        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === 'live' ? 'active' : ''}`}
            onClick={() => setActiveTab('live')}
          >
            Live Feed
          </button>
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Time
          </button>
        </div>
      </header>

      <main>
        <LiveFeed activeTab={activeTab} />
      </main>
    </div>
  );
}

export default App;
