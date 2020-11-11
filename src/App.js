import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DropMenu from './components/MainDropdown'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Messages from './components/Messages';
import Events from './components/Events';
import Network from './components/Network';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App" style={{padding: 20}}>
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component = {Landing}>

          </Route>
          <Route path="/network" component={Network}>
          </Route>

          <Route path="/portfolio" component={Portfolio}>
          </Route>

        </Switch>
      </BrowserRouter>



    </div>
  );
}

export default App;
