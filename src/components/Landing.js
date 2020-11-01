import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DropMenu from './MainDropdown'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Messages from './Messages';
import Events from './Events';
import Network from './Network';
import Feed from './Feed';


function App() {
  return (
    <div className="App" style={{padding: 20}}>

      <Row>
      <Col span={18} push={11}>
        <DropMenu />
      </Col>
    </Row>

    <Row justify='center'>
      <Col>
      <Avatar style={{marginRight:10}}size={100} icon={<UserOutlined />} />
      </Col>

      <Col>
      <h1 style={{fontWeight: 250, fontSize: 75, textAlign: 'center'}}>Hello Charlie!</h1>
      </Col>
    </Row>

<Row>
    <Col span={8}>
    
      <Messages />
        <Events />
 
    </Col>
    <Col span={16} push={1}>
    
    <Feed />
    </Col>

    </Row>

      
    </div>
  );
}

export default App;
