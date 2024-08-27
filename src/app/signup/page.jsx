"use client";
import { Button, Form, Input, InputNumber, Space } from "antd";
const SignUp = () => {
  const [form] = Form.useForm();
  return (
    <div className="flex justify-center">
      <div className="border p-4 rounded-md w-full sm:w-[500px] lg:w-[800px] ">
        <div className="font-bold text-5xl text-center text-gray-600">Create an account</div>
        <hr className="mt-6 mb-8 border-dashed" />
        <Form form={form} name="validateOnly" layout="vertical">
          <Form.Item
            name="name"
            label="Full name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "please input your email.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="zip"
            label="Zip Code"
            rules={[
              {
                required: true,
                message: "Please Input Zip code.",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} type="number" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please Input your password.",
              },
              {
                min: 8,
                message: "Password must be greater than 8 character.",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              {
                min: 8,
                message: "Password must be greater than 8 character.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  var isMatched = getFieldValue("password") === value;
                  var isLong = value?.length < 8;
                  if (!value || isMatched) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('"Password not matched."'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
