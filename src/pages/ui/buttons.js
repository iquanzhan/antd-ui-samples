import React, { Component } from 'react';
import { Button, Card, Icon, Radio } from "antd";
import "./ui.less";

class Buttons extends Component {

    state = {
        loading: true,
        size: 'default'
    }
    closeLoading = () => {
        this.setState({
            loading: false
        })
    }
    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-warp">
                    <Button type="primary">按钮</Button>
                    <Button>按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button disabled>按钮</Button>
                </Card>
                <Card title="图形按钮" className="card-warp">
                    <Button icon="plus">添加</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-warp">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button shape="circle" type="primary" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button loading={this.state.loading} shape="circle"></Button>
                    <Button type="primary" onClick={this.closeLoading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" icon="left">按钮1</Button>
                        <Button type="primary">按钮2<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title="按钮大小" className="card-warp">
                    <Radio.Group onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>按钮</Button>
                    <Button type="danger" size={this.state.size}>按钮</Button>
                    <Button type="dashed" size={this.state.size}>按钮</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;