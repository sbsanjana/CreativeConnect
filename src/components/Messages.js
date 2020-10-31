import React from 'react';
import { List, Avatar, Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';


export default class Messages extends React.Component {
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
           
                <h1 style={{fontWeight: 'lighter', textAlign:'left'}}> Messages: </h1>
            <List
            itemLayout="horizontal"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
            </List>
            <PlusOutlined style={{marginRight: 10}}/>
            <Button>New Message</Button>

         
            </div>
         

        )
    }
}