import { Form, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import background from "../img/top_bg.jpg";

class SearchForm extends React.Component {
  componentDidUpdate() {
    this.props.clearForm();
  }
  /**
   * Calls the parent components loadAddresses method passing in the values from the Form
   * @param {Object} values - containing the values from the Form
   */
  onFinish = (values) => {
    this.props.loadAddresses(values);
  };

  /**
   * Log error message if fetch fails
   * @param {*} errorInfo
   */
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <>
        <div
          style={{
            height: "40vh",
            width: "100vw",
            position: "fixed",
            backgroundColor: "#232D4B",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
          }}
        >
          <div
            style={{
              width: "600px",
              height: "100%",
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "90px 0 0 45px",
            }}
          >
            <h1 style={{ color: "#1A0006", padding: "15px 175px" }}>
              Find Your New Home
            </h1>
            <Form
              name="search-form"
              labelCol={{
                offset: 1,
                span: 5,
              }}
              wrapperCol={{
                span: 10,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              autoComplete="off"
              style={{ width: "100%", maxWidth: "700px" }}
            >
              <Form.Item
                label={
                  <label style={{ color: "#1A0006" }}>Street Address</label>
                }
                name="street"
                value=""
                rules={[
                  {
                    message: "Please input an address.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: "#1A0006" }}>City</label>}
                name="city"
                value=""
                rules={[
                  {
                    message: "Please input a city.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: "#1A0006" }}>State</label>}
                name="state"
                value=""
                rules={[
                  {
                    message: "Please input a state.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={<label style={{ color: "#1A0006" }}>Zip</label>}
                name="zip"
                rules={[
                  {
                    message: "Please input a zip.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 2,
                  span: 6,
                }}
              >
                <Button
                  style={{ backgroundColor: "#1A0006", color: "#FFFFFF" }}
                  htmlType="submit"
                  icon={<SearchOutlined />}
                >
                  Search
                </Button>
              </Form.Item>{" "}
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default SearchForm;
