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
                  title={<a href="">Trevor’s Dance Class (Advanced)</a>}
                  style={{textAlign:'left'}}
                  description="Millenium Dance Studio in Los Angeles, CA | 9:30-11am | Sign up here!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  title={<a href="">Erika’s Dance Showcase (Beginner) </a>}
                  style={{textAlign:'left'}}
                  description="Shining Stars Studio in Los Angeles, CA | 5-6pm"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  title={<a href="">Tammy's Tango</a>}
                  style={{textAlign:'left'}}
                  description="Salsa Ballroom in Los Angeles, CA | 3-4pm"
                />
                </List.Item>
            </List>

         
            </div>
         

        )
    }
}