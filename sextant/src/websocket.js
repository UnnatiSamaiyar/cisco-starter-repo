import React, { useState, useEffect } from 'react';
import WebSocket from 'websocket';

const PacketLatencyComponent = () => {
  const [latency, setLatency] = useState(null);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    // Create a WebSocket connection to the Pylon server
    const pylonWebSocket = new WebSocket('ws://localhost:55455');

    // Handle WebSocket connection open event
    pylonWebSocket.onopen = () => {
      console.log('WebSocket connected to Pylon server');
    };

    // Handle WebSocket message event
    pylonWebSocket.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data);
      const currentTimestamp = new Date().getTime();
      const packetLatency = currentTimestamp - packetTimestamp;
      setLatency(packetLatency);
    };

    // Handle WebSocket connection close event
    pylonWebSocket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Set the WebSocket object in the state
    setWs(pylonWebSocket);

    // Clean up the WebSocket when the component unmounts
    return () => {
      if (pylonWebSocket) {
        pylonWebSocket.close();
      }
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency</h2>
      {latency !== null ? (
        <p>Latency: {latency} ms</p>
      ) : (
        <p>Waiting for packet latency data...</p>
      )}
    </div>
  );
};

export default PacketLatencyComponent;
