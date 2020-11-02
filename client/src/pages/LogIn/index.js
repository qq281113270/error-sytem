import React from 'react';
import '@/common/css/base.less';
import './index.less';
import { Form, Input, Button, Checkbox } from 'antd';
import {routePaths,historyPush,getHistory} from '@/router';


// import getHistory from './history'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Index = (props) => {
   
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="center log-in">
            <h3>《错误监控系统》 </h3>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                {/* <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Form.Item {...tailLayout}>
                      <div className='buttons'>
                        <Button className="submit" type="primary" htmlType="submit">
                            登录
                        </Button>
                        <Button className="submit" onClick={()=>{
                            // window.location
                            const {location,history}=props;
                            // console.log('location=',location)
                            // console.log('props=',props)
                            // console.log('props=',props)
                            // history.push('/register')
                             
                              // console.log('routePaths=',routePaths.register)
                              // console.log('historyPush=',historyPush)
                              historyPush({
                                    props,
                                    url:routePaths.register
                              })
                        }}  >
                            注册
                        </Button>
                      </div>
             
                </Form.Item>
            </Form>
        </div>
    );
};

export default Index;
