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
                  title={<a href="">Johnny Smith</a>}
                  style={{textAlign:'left'}}
                  description="Hey Charlie! Here's an opportunity you might find interesting"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Charles Schwab</a>}
                  style={{textAlign:'left'}}
                  description="Hey, it was nice meeting you last week! Let's stay connected :)"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Trevor Noah</a>}
                  style={{textAlign:'left'}}
                  description="Hey, here's the link to the event we spoke about last week"
                />
                </List.Item>
            </List>
            <PlusOutlined style={{marginRight: 10}}/>
            <Button>New Message</Button>

         
            </div>
         

        )
    }
}