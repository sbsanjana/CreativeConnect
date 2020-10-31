import React from 'react';
import { Modal, Button } from 'antd';
import {PlusOutlined} from '@ant-design/icons';


export default class MessageModal extends React.Component {
    constructor(props) {
        super(props)
        state = { visible: false };

    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };

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
    render() {
        return(
            <>
            <Button type="primary" onClick={this.showModal}>
              Open Modal with customized button props
            </Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okButtonProps={{ disabled: true }}
              cancelButtonProps={{ disabled: true }}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </>

        )
    }
}