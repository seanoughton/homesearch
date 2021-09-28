import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";
import DropDownMenu from "./DropDownMenu";

class SortMenu extends React.Component {
  render() {
    return (
      <>
        <div
          id="sort"
          style={{
            margin: "auto auto",
            width: "50px",
            backgroundColor: "#120F0C",
            visibility: "hidden",
            position: "fixed",
            right: "17%",
          }}
        >
          <Dropdown
            overlay={
              <DropDownMenu
                sortAddresses={this.props.sortAddresses}
              ></DropDownMenu>
            }
          >
            <a className="ant-dropdown-link" style={{ color: "#EAFFE8" }}>
              Sort <DownOutlined />
            </a>
          </Dropdown>
          ,
        </div>
      </>
    );
  }
}

export default SortMenu;
