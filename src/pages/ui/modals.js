import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

import './ui.less';

class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }

    handleOpen = (modal) => {
        this.setState({
            [modal]: true
        });
    }

    handleConfirm=(type)=>{
        Modal[type]({
            title:"确认？",
            content:"您确定你学会了吗",
            onCancel(){
                console.log('cancel');
            },
            onOk(){
                console.log("ok");
            }
        })
    }


    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-warp">
                    <Button type="primary" onClick={() => { this.handleOpen('showModal1') }}>open</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal2') }}>自定义页脚</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal3') }}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={() => { this.handleOpen('showModal4') }}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-warp">
                    <Button type="primary" onClick={() => { this.handleConfirm('confirm') }}>confirm</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('info') }}>Info</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('success') }}>Success</Button>
                    <Button type="primary" onClick={() => { this.handleConfirm('warning') }}>Warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onOk={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>爱技术，一起做全栈攻城狮</p>
                </Modal>

                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="确定"
                    cancelText="取消"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>做全栈攻城狮</p>
                </Modal>

                <Modal
                    title="React"
                    style={{ top: 20 }}
                    visible={this.state.showModal3}
                    okText="确定"
                    cancelText="取消"
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>做全栈攻城狮</p>
                </Modal>

                <Modal
                    title="React"
                    visible={this.state.showModal4}
                    wrapClassName="vertical-center-modal"
                    onOk={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>爱技术，一起做全栈攻城狮</p>
                </Modal>
            </div>
        );
    }
}

export default Modals;