import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import DropMenu from './components/MainDropdown'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Messages from './components/Messages';

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
      <Col span={6}>
      <Messages />

      </Col>
    </Row>

      
    </div>
  );
}

export default App;
