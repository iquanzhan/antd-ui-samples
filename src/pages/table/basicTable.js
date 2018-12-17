import React, { Component } from 'react';
import { Card, Table, Modal, message, Button } from 'antd';

import "../ui/ui.less";
import axios from '../../axios';
import Util from '../../utils/utils';

class basicTable extends Component {


    state = {
        dataSource: [],
        dataSource1: [],
        dataSource2: [],
        selectedRowKeys: '',
        selectItem: {},
        selectRows: [],
        pagination: []
    }

    params = {
        page: 1
    }

    componentDidMount() {
        const dataSource = [
            {
                id: '1',
                userName: 'Java Developer',
                sex: 1,
                state: 1,
                interest: 1,
                birthday: '2018-10-10',
                address: '北京市海淀区知春路',
                time: '10:10:10'
            },
            {
                id: '2',
                userName: 'React Developer',
                sex: 0,
                state: 2,
                interest: 3,
                birthday: '2018-10-10',
                address: '北京市海淀区知春路',
                time: '10:10:10'
            },
            {
                id: '3',
                userName: '做全栈攻城狮',
                sex: 1,
                state: 1,
                interest: 1,
                birthday: '2018-10-10',
                address: '北京市海淀区知春路',
                time: '10:10:10'
            }
        ];
        dataSource.map((item, index) =>
            item.key = index
        )

        this.setState({
            dataSource
        })

        this.request();
    }

    request = () => {
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: _this.params.page
                },
                isShowLoading: true
            }
        }).then((res) => {
            res.result.map((item, index) =>
                item.key = index
            );
            this.setState({
                dataSource1: res.result,
                pagination: Util.pagination(res, (current) => {
                    debugger;
                    _this.params.page = current;
                    _this.request();
                }),
                selectedRowKeys: [],
                selectRows: []
            });
        })

    }


    onRowClick = (record, index) => {
        let selectedKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName},id:${record.id}`
        })
        this.setState({
            selectedRowKeys: selectedKey,
            selectItem: record
        })
    }

    handleDelete = () => {
        let rows = this.state.selectRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        })

        Modal.confirm({
            title: '删除提示',
            content: `您确定删除这些数据吗？${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
            }
        })

    }



    render() {
        const column = [
            {
                title: 'id',
                key: 'id',
                dataIndex: "id"
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: "userName"
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: "sex",
                render(sex) {
                    return sex === 1 ? '男' : '女';
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: "state",
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '创业者'
                    };
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: "interest",
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }

        ];

        let selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        };

        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectRows) => {
                this.setState({
                    selectedRowKeys,
                    selectRows
                })
            }
        };

        return (
            <div>
                <Card title="基础表格" className="card-warp">
                    <Table
                        bordered
                        columns={column}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格">
                    <Table
                        bordered
                        columns={column}
                        dataSource={this.state.dataSource1}
                    />
                </Card>

                <Card title="Mock-单选" className="card-warp">
                    <Table
                        columns={column}
                        bordered
                        dataSource={this.state.dataSource1}
                        pagination={false}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            }
                        }}
                    />
                </Card>
                <Card title="Mock-多选" className="card-warp">
                    <div>
                        <Button type='primary' onClick={this.handleDelete} style={{ marginBottom: 10 }}>删除</Button>
                    </div>
                    <Table
                        columns={column}
                        bordered
                        dataSource={this.state.dataSource1}
                        pagination={false}
                        rowSelection={rowCheckSelection}
                    />
                </Card>

                <Card title="Mock-分页" className="card-warp">
                    <Table
                        columns={column}
                        bordered
                        dataSource={this.state.dataSource1}
                        pagination={this.state.pagination}

                    />
                </Card>

            </div>
        );
    }
}

export default basicTable;