import React, { Component } from 'react';

import './index.less';

import { Menu, Icon } from "antd";
import MenuConfig from "../../config/menuConfig";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Index extends Component {
    state = {
        menuTreeNode: []
    }


    componentDidMount() {

        //init Menu
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
        });

    }

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="ant design" />
                    <h1>Ant Design Samples</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default Index;