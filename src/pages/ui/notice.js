import React, { Component } from 'react';
import { Card, Button, notification } from 'antd';

class Notice extends Component {


    openNotification = (type, direction) => {
        if (direction) {
            notification.config({
                placement: direction
            });
        }
        notification[type]({
            message: '发工资了',
            description: '上个月考勤22天，迟到12天'
        });
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-warp">
                    <Button type="primary" onClick={() => { this.openNotification("success") }}>success</Button>
                    <Button type="primary" onClick={() => { this.openNotification("info") }}>info</Button>
                    <Button type="primary" onClick={() => { this.openNotification("warning") }}>warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification("error") }}>error</Button>
                </Card>

                <Card title="通知提醒框(位置)" className="card-warp">
                    <Button type="primary" onClick={() => { this.openNotification("success", "topLeft") }}>success</Button>
                    <Button type="primary" onClick={() => { this.openNotification("info", "topRight") }}>info</Button>
                    <Button type="primary" onClick={() => { this.openNotification("warning", "bottomLeft") }}>warning</Button>
                    <Button type="primary" onClick={() => { this.openNotification("error", "bottomRight") }}>error</Button>
                </Card>
            </div>
        );
    }
}

export default Notice;