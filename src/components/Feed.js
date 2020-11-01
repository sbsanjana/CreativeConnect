import React from 'react';
import { Row, Col, Card,Avatar } from 'antd';
import { CommentOutlined, LikeOutlined, EllipsisOutlined } from '@ant-design/icons';


export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state={"posts": []}
    }

    componentDidMount() {
        fetch('http://localhost:8000/posts')
            .then(response =>response.json())
            .then(response => this.setState({ posts: response }))
            .catch(err => console.log(err))
    }

    render() {


        return (
            <div>
            {this.state.posts.map((post, index)=> (
                <Row justify='center'>
                  <Card 
                  Avatar= "https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
                  title={<Row style={{textAlign:'left'}}> 
                  <img style={{width: 25, height: 25, marginRight: 15}} 
                  src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" />{post.name} 
                  <Col span={18} push={15}>
                      {post.date}

                  </Col></Row>}  
                  actions={[
                    <CommentOutlined key="setting" />,
                    <LikeOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  bordered={false} 
                  description="This is the description"
                  style={{ width: 600 }}>
                                           

                    
                <p>  {post.text} </p>
                <img style={{width:250, height:250}}src={post.image} />
    
                </Card>
                </Row>
            ))}
            </div>
        )
    }
}