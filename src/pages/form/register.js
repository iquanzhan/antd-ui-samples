import React, { Component } from 'react';
import { Card, Form, Input, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload, Button, Icon, Checkbox, message } from 'antd';
import './form.less';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends Component {

    state = {
        userImg: ''
    }

    handleSubmit=()=> {
        let userInfo = this.props.form.getFieldsValue();
        message.success(JSON.stringify(userInfo));
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }



    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({
                loading: true
            })
        }
        if (info.file.status === 'done') {
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false
            }));
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 20
            }
        };
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        };
        return (
            <div>
                <Card title="注册表单" className="card-warp">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    rules: [
                                        { required: true, message: '用户名不能为空' }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('gender', {
                                    initialValue: '1',
                                    rules: [
                                        { required: true, message: '请输入密码' }
                                    ]
                                })(
                                    <Radio.Group>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='0'>女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: 18
                                })(<InputNumber />)
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator("state", {
                                    initialValue: '2'
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value="3">北大才子一枚</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="兴趣爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['2', '5']
                                })(
                                    <Select mode="multiple">
                                        <Option value='1'>游泳</Option>
                                        <Option value='2'>打篮球</Option>
                                        <Option value='3'>跑步</Option>
                                        <Option value='4'>爬山</Option>
                                        <Option value='5'>桌球</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>

                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {
                                    initialValue: moment('2018-08-08')
                                })(
                                    <DatePicker
                                        showTime
                                        format="YYYY-MM-DD"
                                    />
                                )
                            }

                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: '北京市海淀区知春路'
                                })(
                                    <TextArea
                                        autosize={
                                            {
                                                minRows: 2,
                                                maxRows: 6
                                            }
                                        }
                                    />
                                )
                            }
                        </FormItem>

                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time', {
                                    initialValue: moment('2018-12-12 21:21:21')
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImgs')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.state.userImg} alt="用户头像" /> : <Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('notice')(
                                    <Checkbox>我已阅读：<a href="#">开源协议</a></Checkbox>
                                )
                            }
                        </FormItem>

                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>

                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Register);