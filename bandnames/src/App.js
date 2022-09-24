
import './App.css';
import React, { useEffect, useState } from 'react';
import io from 'socket.io'

import {BanAdd}from './components/BandAdd';
import {BandList} from './components/BandList';
import { cleanup } from '@testing-library/react';

const connectSocketServer = () => {
  const socket = io.connect('http:localhost:8080',{
    transports:['websocket']
  });
  return socket;
}



function App() {

  const[ socket ] = useState (initialState)
  const[ Online,setOffline ]= useState (false);

useEffect(() => {
  effect 
  return () => {
    console.log(socket);
    setOffline(socket.connected);
  }
}, [socket])



  return (
    <div className='container'>
      <div className='alert'>
        <p>
          service status
          <span className='tex-success'>Online</span>
          <span className='tex-danger'>Offline</span>
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />
      <div className='row'>
          <div className='col-8'>
            <BandList/>
          </div>
      </div>

      <div className='row'>
          <div className='col-4'>
          <BanAdd />
          </div>
      </div>


    </div>
  );
}

export default App;
