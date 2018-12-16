import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './ui.less';

class Loading extends Component {
    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />;
        return (
            <div>
                <Card title="spin用法" className="card-warp">
                    <Spin size="small" />
                    <Spin style={{ margin: '0 10px' }} />
                    <Spin size="large" />
                    <Spin style={{ marginLeft: 10 }} indicator={icon} />
                </Card>
                <Card title="内容遮罩" className="card-warp">
                    <Alert
                        message="React"
                        description="做全栈攻城狮"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="做全栈攻城狮"
                            type="warning"
                            style={{ marginTop: 15 }}
                        />
                    </Spin>
                    <Spin tip="加载中">
                        <Alert
                            message="React"
                            description="做全栈攻城狮"
                            type="warning"
                            style={{ marginTop: 15 }}
                        />
                    </Spin>
                    <Spin indicator={icon} >
                        <Alert
                            message="React"
                            description="做全栈攻城狮"
                            type="warning"
                            style={{ marginTop: 15 }}
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Loading;