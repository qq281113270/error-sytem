/*
 * @Author: your name
 * @Date: 2021-08-23 19:51:05
 * @LastEditTime: 2021-08-25 12:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /error-sytem/client/src/common/component/Form/index.js
 */
import React, {
  Suspense,
  lazy,
  useState,
  useCallback,
  Children,
  PureComponent,
  useEffect,
} from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Radio,
  Rate,
  Select,
  Switch,
  Slider,
  TimePicker,
  Transfer,
} from "antd";
import "./index.less";
const { Password } = Input;
const ItemChild = (props) => {
  let { type = "", itemChildProps = {}, component, render } = props;
  type = type.toLowerCase();
  const mapTpye = {
    input: <Input {...itemChildProps}></Input>,
    inputnumber: <InputNumber {...itemChildProps}></InputNumber>,
    radio: <Radio {...itemChildProps}></Radio>,
    rate: <Rate {...itemChildProps}></Rate>,
    select: <Select {...itemChildProps}></Select>,
    switch: <Switch {...itemChildProps}></Switch>,
    slider: <Slider {...itemChildProps}></Slider>,
    timepicker: <TimePicker {...itemChildProps}></TimePicker>,
    transfer: <Transfer {...itemChildProps}></Transfer>,
    checkbox: <Checkbox {...itemChildProps}></Checkbox>,
    password: <Password {...itemChildProps}></Password>,
  };
  return render
    ? render(props)
    : component
    ? component
    : type in mapTpye
    ? mapTpye[type]
    : null;
};

export default (props) => {
  const {
    fields = [],
    formProps = {},
    onReady = () => {},
    children = [],
  } = props;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    onReady(form);
  }, []);

  return (
    <div className="base-form">
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        {...formProps}
      >
        {fields.map((item) => {
          const { type, title, items = [] } = item;
          return type != "section" ? (
            <Form.Item {...item}>
              <ItemChild {...item}></ItemChild>
            </Form.Item>
          ) : (
            <div className="section">
              <div className="title">{title}</div>
              {items.map((item) => {
                return (
                  <Form.Item {...item}>
                    <ItemChild {...item}></ItemChild>
                  </Form.Item>
                );
              })}
            </div>
          );
        })}
        {/* 子节点 */}
        {Children.map(children, (child, index) => {
          return <> {child}</>;
        })}
      </Form>
    </div>
  );
};
