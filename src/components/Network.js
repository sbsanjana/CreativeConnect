import React from 'react';
import {Row, Col, Avatar, List} from 'antd';
import { UserOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

export default class Network extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

            <Row>
            <Col span={4}>
                <a style={{color: 'black', fontSize: 42, fontWeight: 'lighter'}} onClick={() => this.props.history.push('/')}>
                <CaretLeftOutlined /> Back 
                </a>            </Col>
          </Row>
      
            <Row justify='center'>
                <Col>
                <Avatar style={{marginRight:10}}size={100} icon={<UserOutlined />} />
                </Col>
        
                <Col>
                <h1 style={{fontWeight: 250, fontSize: 75, textAlign: 'center'}}>Hello Charlie!</h1>
                </Col>
          </Row>

          <Row justify='center'>
              <Col span={9} style={{margin:40}}>
                  <h1 style={{fontWeight:'lighter', textAlign:'left'}}> My Network:</h1>
              <List
            itemLayout="vertical"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
            </List>


              </Col>
              <Col span={9} style={{margin:40}}>
              <h1 style={{fontWeight:'lighter', textAlign:'left'}}> Recommended:</h1>

              <List
            itemLayout="vertical"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">NAME HERE</a>}
                  style={{textAlign:'left'}}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                </List.Item>
            </List>

              </Col>
          </Row>
          </div>
        )
    }
}