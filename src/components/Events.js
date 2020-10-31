import React from 'react';
import { List, Avatar, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';


export default class Events extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = [
            {
              title: 'Message Title 1',
            },
            {
              title: 'Message Title 2',
            },
            {
              title: 'Message Title 3',
            }
          ];
        return (
            <div>
           
                <h1 style={{fontWeight: 'lighter', textAlign:'left'}}> Events for you: </h1>
            <List
            itemLayout="horizontal"
            >
                <List.Item>
                <List.Item.Meta
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
            </List>

         
            </div>
         

        )
    }
}