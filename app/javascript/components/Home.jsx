import { Layout } from "antd";
import React from "react";
import Addresses from "./Addresses";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content id="content">
      <div
        id="messages"
        style={{
          width: "33vw",
          margin: "2.5% 0% 5% 50%",
          position: "absolute",
          zIndex: 1000,
        }}
      ></div>
      <div
        id="loading"
        style={{
          width: "25vw",
          height: "25vh",
          margin: "42.5% 0 0 50%",
          position: "absolute",
          zIndex: 1000,
        }}
      ></div>
      <div className="site-layout-content" style={{ margin: "auto auto" }}>
        <Addresses />
      </div>
    </Content>
    <Footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "fixed",
        bottom: "0px",
        width: "100vw",
        height: "10px",
        backgroundColor: "#1A0006",
        color: "#FFFFFF",
        fontWeight: "200",
      }}
    >
      Address Search ©2021.
    </Footer>
  </Layout>
);
