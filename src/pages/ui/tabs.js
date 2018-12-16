import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import './ui.less';

const TabsPane = Tabs.TabPane;
class TabsSample extends Component {


    handleCallBack = (key) => {
        message.info(`您点击了Tabs${key}`);
    }

    newTabIndex = 0;

    componentWillMount() {
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }


    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }



    render() {
        return (
            <div>
                <Card title="Tabs页签" className="card-warp">
                    <Tabs defaultActiveKey="2" onChange={this.handleCallBack}>
                        <TabsPane tab="tab 1" key="1">Tab1</TabsPane>
                        <TabsPane tab="tab 1" key="2">Tab2</TabsPane>
                        <TabsPane tab="tab 1" key="3">Tab3</TabsPane>
                    </Tabs>
                </Card>
                <Card title="Tabs页签(带图标)" className="card-warp">
                    <Tabs defaultActiveKey="2" onChange={this.handleCallBack}>
                        <TabsPane tab={<span><Icon type="apple" />苹果</span>} key="1">Tab1</TabsPane>
                        <TabsPane tab={<span><Icon type="android" />安卓</span>} key="2">Tab2</TabsPane>
                        <TabsPane tab={<span><Icon type="edit" />编辑</span>} key="3">Tab3</TabsPane>
                    </Tabs>
                </Card>
                <Card title="Tabs页签(带图标)" className="card-warp">
                    <Tabs
                        defaultActiveKey="2"
                        onChange={this.onChange}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel) => {
                                return <TabsPane
                                    tab={panel.title}
                                    key={panel.key}
                                >{panel.content}</TabsPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default TabsSample;