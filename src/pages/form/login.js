import React, { Component } from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';

import './form.less';

const FormItem = Form.Item;
class Login extends Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`欢迎登陆：用户名 ${userInfo.userName},密码：${userInfo.password},记住密码：${userInfo.remeberme}`);
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title="登录行内表单" className="card-warp">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" className="card-warp">
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入用户名'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type='user' />} placeholder="请输入用户名" />
                                )
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        { min: 5, message: '密码不能小于5位数' },
                                        { max: 10, message: '密码不能大于10位数' },
                                        { pattern: new RegExp('^\\w+$', 'g'), message: "密码只能为数字或英文" }
                                    ]
                                })(<Input prefix={<Icon type="lock" />} placeholder="请输入密码" />)
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remeberme',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Login);