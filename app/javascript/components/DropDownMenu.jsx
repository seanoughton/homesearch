import { Menu } from "antd";
import React from "react";

class DropDownMenu extends React.Component {
  render() {
    return (
      <>
        <Menu>
          <Menu.Item
            key="city"
            sort_key="city"
            onClick={(e) => {
              this.props.sortAddresses(e);
            }}
          >
            City
          </Menu.Item>
          <Menu.Item
            key="state"
            sort_key="state"
            id="state"
            onClick={(e) => {
              this.props.sortAddresses(e);
            }}
          >
            State
          </Menu.Item>
          <Menu.Item
            key="zip"
            sort_key="zip"
            onClick={(e) => {
              this.props.sortAddresses(e);
            }}
          >
            Zip
          </Menu.Item>
          <Menu.Item
            key="price_low"
            sort_key="price"
            onClick={(e) => {
              this.props.sortAddresses(e);
            }}
            sort="less"
          >
            Price: Low to High
          </Menu.Item>
          <Menu.Item
            key="price_high"
            sort_key="price"
            onClick={(e) => {
              this.props.sortAddresses(e);
            }}
            sort="greater"
          >
            Price: High to Low
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default DropDownMenu;
