import React, { Component } from 'react';
import {Row, Col, Avatar, List, Button} from 'antd';
import { UserOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { Input } from 'antd';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        tasks: [
            {name:"Image",category:"complete", bgcolor:"grey"},
            {name:"Video", category:"complete", bgcolor:"grey"},
            {name:"Social Media", category:"complete", bgcolor:"skyblue"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");

       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
      var tasks = {
          wip: [],
          wip2: [],
          complete: []
      }

      this.state.tasks.forEach ((t) => {
          tasks[t.category].push(
              <div key={t.name}
                  onDragStart = {(e) => this.onDragStart(e, t.name)}
                  draggable
                  className="draggable"
                  style = {{backgroundColor: t.bgcolor, backgroundImage: "url(https://www.iconfinder.com/icons/211677/image_icon)"}}
              >
                  {t.name}
              </div>
          );
      });

      return (

          <div className="container-drag">
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
                    <h1 style={{fontWeight: 250, fontSize: 75, textAlign: 'center'}}>Charlie's Portfolio</h1>
                    </Col>
              </Row>

              <Row justify='center'>
                <Col>
                  <h1 style={{fontWeight: 100, fontSize: 25, textAlign: 'center'}}>I am a hip-hop/contemp dancer in the LA area looking for commercial opportunities!</h1>
                </Col>
              </Row>
              </div>

              <div className="wip"
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>{this.onDrop(e, "wip")}}>
                  <span className="task-header">Experience</span>
                  {tasks.wip}
              </div>
              <div className="wip2"
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>{this.onDrop(e, "wip2")}}>
                  <span className="task-header">Social Media Platforms</span>
                  {tasks.wip2}
              </div>
              <div className="droppable"
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete")}>
                   <span className="task-header">Tools</span>
                   {tasks.complete}
                   <Button onClick={this.post}> Change Layout </Button>
              </div>

          </div>
      );
    }
}
