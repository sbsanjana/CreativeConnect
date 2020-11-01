import React from 'react';
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';


export default class MainDropdown extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        const menu =(
            <Menu>
            <Menu.Item key="0">
              <a href="/network" style={{textAlign: 'center'}}>My Network</a>
            </Menu.Item>
            <Menu.Item key="1">
              <a href="" style={{textAlign: 'center'}}>My Portfolio</a>
            </Menu.Item>
            <Menu.Item key="3" style={{textAlign: 'center'}}>Settings</Menu.Item>
          </Menu>
        )

        return (
            
            <div>
            <Dropdown overlay = {menu} trigger={['click']}>
                <a style={{color: 'black', fontSize: 42, fontWeight: 'lighter'}}className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                CreativeConnect <CaretDownOutlined />
                </a>
            </Dropdown>
           

          </div>
        )
    }
}