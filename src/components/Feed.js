import React from 'react';
import { Row, Col, Card,Avatar, Input,Button, Select} from 'antd';
import ReactPlayer from 'react-player';
import { CommentOutlined, LikeOutlined, EllipsisOutlined, EnvironmentOutlined, PlaySquareOutlined, PictureOutlined} from '@ant-design/icons';


export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state={"posts": [], text:'', tag:'Image', url:''}
        this.post = this.post.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleSelect= this.handleSelect.bind(this);
        this.handleURL=this.handleURL.bind(this);

    }

    componentDidMount() {
        fetch('http://localhost:8000/posts')
            .then(response =>response.json())
            .then(response => this.setState({ posts: response }))
            .catch(err => console.log(err))
    }

    handleChange(e) {
        this.setState({text: e.target.value});
        console.log(this.state.text);
    }

    handleSelect(value) {
        this.setState({tag: `${value}`});
        console.log(this.state.tag);
    }

    handleURL(e) {
        this.setState({url: e.target.value});
    }

    post() {
        var d = new Date();
        console.log(this.state);

        fetch("http://localhost:8000/posts", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                "name": "Charlie Brown",
                "text": this.state.text,
                "content": this.state.tag,
                "url": this.state.url,
                "date": (d.getMonth() +1)+ '-'+ d.getDate() + '-' + d.getFullYear(),
    
            })
          })
            .then((res) => res.json)
            .then(res => console.log(res))
            .catch(function(res){ console.log(res) })

            this.setState({ title: '', text: '', tag:'', url:'' })

            window.location.reload(false);
        }

    render() {
        const { Option } = Select;


        return (
            <div>
            <Row justify='center'> 
            <Col>
            <h1 style={{fontWeight:'lighter', textAlign:'left'}}> What did you try today?</h1>
            <Col span = {22}>
            <Input.TextArea rows={4} style={{width:400}}  onChange={this.handleChange}/>
            <Input.Group compact>
            <Select defaultValue="Image" onChange={this.handleSelect}>
                <Option value="Image">Image</Option>
                <Option value="Video">Video</Option>
            </Select>
            <Input style={{ width: '77%' }} placeholder="URL" onChange={this.handleURL}/>
            </Input.Group>
            <br />
            <Button onClick={this.post}> Post </Button>
            </Col>
           
           <Col span={6}>
            {/* <Row justify='start'>
            <PictureOutlined style={{fontSize: 30, marginRight:4}}/>
            <PlaySquareOutlined style={{fontSize: 30}}/>
            <EnvironmentOutlined style={{fontSize: 30}}/>
           
            </Row> */}
   
               
            </Col>
            </Col>
            </Row>
            {this.state.posts.reverse().map((post, index)=> (
                <Row justify='center'>
                  <Card 
                  Avatar= "https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
                  title={<Row style={{textAlign:'left'}}> 
                  <img style={{width: 25, height: 25, marginRight: 15}} 
                  src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png" />
                  <Col span={10}>
                  {post.name} 
                  </Col>
                  <Col push={8}>
                      {post.date}

                  </Col>
                  
                </Row>}  
                  actions={[
                    <CommentOutlined key="setting" />,
                    <LikeOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  bordered={false} 
                  description="This is the description"
                  style={{ width: 600 }}>
                                           

                    
                <p>  {post.text} </p>
                <img style={{width:250, height:250}}src={post.url} />
    
                </Card>
                <br/>
                </Row>
    }
                
               
            ))}
            </div>
        )
    }
}