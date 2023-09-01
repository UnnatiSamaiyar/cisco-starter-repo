import React, { useEffect, useState } from 'react';
import axios from 'axios';

function IPDisplay({ ipv6 }) {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const ipAddressType = ipv6 ? 'ipv6' : 'ipv4';

    axios.get(`https://api.ipify.org?format=json&${ipAddressType}=true`)
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipv6]);

  return (
    <div>
      <h2>{ipv6 ? 'IPv6 Address:' : 'IPv4 Address:'}</h2>
      <p>{ipAddress}</p>
    </div>
  );
}

export default IPDisplay;
