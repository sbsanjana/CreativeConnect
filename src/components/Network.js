import React from 'react';
import {Row, Col, Avatar, List, Button, Modal} from 'antd';
import { UserOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Input } from 'antd';


export default class Network extends React.Component {
    constructor(props) {
        super(props)
        this.state = { visible: false };
        this.state1 = {visible: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        visible: true,
      });
    }
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };

    handleClick1() {
      this.setState1({
        visible: true,
      });
    }
    handleOk1 = e => {
      console.log(e);
      this.setState1({
        visible: false,
      });
    };

    handleCancel1 = e => {
      console.log(e);
      this.setState1({
        visible: false,
      });
    };
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
          <Col>
          
          </Col>
              <Col span={9} style={{margin:40}}>
                <h1 style={{fontWeight:'lighter', textAlign:'left'}}> My Network:</h1>
                  
                  
              <List
            itemLayout="vertical"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Sarah Johnson</a>}
                  style={{textAlign:'left'}}
                  description="An aspiring actress in the heart of Los Angeles. Looking for any and all comercial opportunities!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Jacob Jensen</a>}
                  style={{textAlign:'left'}}
                  description="A commerical dancer. You may have seen me on TV recently!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Taylor Swift</a>}
                  style={{textAlign:'left'}}
                  description="Actress. Singer. Dancer."
                />
                </List.Item>
            </List>
            <Button onClick = {this.handleClick1}> View all</Button>

            <Modal
              title="Recommended"
              visible={this.state.visible1}
              onOk={this.handleOk1}
              onCancel={this.handleCancel1}
            >
              <List
            itemLayout="vertical"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Sarah Johnson</a>}
                  style={{textAlign:'left'}}
                  description="An aspiring actress in the heart of Los Angeles. Looking for any and all comercial opportunities!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Jacob Jensen</a>}
                  style={{textAlign:'left'}}
                  description="A commerical dancer. You may have seen me on TV recently!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Taylor Swift</a>}
                  style={{textAlign:'left'}}
                  description="Actress. Singer. Dancer."
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Mickey Mouse</a>}
                  style={{textAlign:'left'}}
                  description="It's a surprise tool that will help us later. "
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Minnie Mouse</a>}
                  style={{textAlign:'left'}}
                  description="Hi I'm Minnie! You can catch me at Disney World or dm me."
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Ashley Lee</a>}
                  style={{textAlign:'left'}}
                  description="Studies Film at UCLA"
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Miranda Osbourne</a>}
                  style={{textAlign:'left'}}
                  description="Dance at Chapman University"
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Vicki Brown</a>}
                  style={{textAlign:'left'}}
                  description="Cinematographer | Film | Acting"
                />
                </List.Item>
              </List>
            
            </Modal>


              </Col>
              <Col span={9} style={{margin:40}}>
              <h1 style={{fontWeight:'lighter', textAlign:'left'}}> Recommended:</h1>

              <List
            itemLayout="vertical"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Clara Jensen</a>}
                  style={{textAlign:'left'}}
                  description="Student. Artist. Dancer. Studying dance and film at UCLA."
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Maddie Ziegler</a>}
                  style={{textAlign:'left'}}
                  description="Dancer. Seen on Dance Moms, SYTYCD, and more! Email maddie@gmail.com for opportunities!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Donald Duck</a>}
                  style={{textAlign:'left'}}
                  description="Seen on Disney Junior. Dm for more opportunities."
                />
                </List.Item>
            </List>
            <Button onClick = {this.handleClick}> View all</Button>

            <Modal
              title="Recommended"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <List
            itemLayout="vertical"
            >
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Sarah Johnson</a>}
                  style={{textAlign:'left'}}
                  description="An aspiring actress in the heart of Los Angeles. Looking for any and all comercial opportunities!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Jacob Jensen</a>}
                  style={{textAlign:'left'}}
                  description="A commerical dancer. You may have seen me on TV recently!"
                />
                </List.Item>
                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Taylor Swift</a>}
                  style={{textAlign:'left'}}
                  description="Actress. Singer. Dancer."
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Mickey Mouse</a>}
                  style={{textAlign:'left'}}
                  description="It's a surprise tool that will help us later. "
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Minnie Mouse</a>}
                  style={{textAlign:'left'}}
                  description="Hi I'm Minnie! You can catch me at Disney World or dm me."
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Ashley Lee</a>}
                  style={{textAlign:'left'}}
                  description="Studies Film at UCLA"
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Miranda Osbourne</a>}
                  style={{textAlign:'left'}}
                  description="Dance at Chapman University"
                />
                </List.Item>

                <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://www.pngarts.com/files/3/Avatar-PNG-Download-Image.png" />}
                  title={<a href="">Vicki Brown</a>}
                  style={{textAlign:'left'}}
                  description="Cinematographer | Film | Acting"
                />
                </List.Item>
              </List>
            
            </Modal>


              </Col>
          </Row>
          </div>
        )
    }
}