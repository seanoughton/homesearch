import { Descriptions, Card } from "antd";
import React from "react";

class Cards extends React.Component {
  /**
   * Creates individual Card elements
   * @param {Object} address
   * @returns Card element
   */
  createCard = (address) => {
    let title = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
    let data = this.formatData(address);
    return (
      <Card
        title={title}
        key={address.key}
        extra={
          <a href={address.url} target="_blank">
            More
          </a>
        }
        style={{
          width: "60vw",
          textTransform: "capitalize",
          backgroundColor: "#E1E2EE",
          margin: "20px auto 0px auto",
        }}
      >
        <Descriptions
          title=""
          style={{ textAlign: "center" }}
          labelStyle={{
            fontWeight: "800",
            fontSize: "1.35em",
            color: "#195098",
          }}
          contentStyle={{
            fontWeight: "400",
            fontSize: "1.25em",
            color: "#586470",
          }}
        >
          <Descriptions.Item label="Price">{data.price}</Descriptions.Item>
          <Descriptions.Item label="Beds">{data.beds}</Descriptions.Item>
          <Descriptions.Item label="Baths">{data.baths}</Descriptions.Item>
          <Descriptions.Item label="Days on Market">
            {data.days_on_market}
          </Descriptions.Item>
          <Descriptions.Item label="Lot Size">
            {data.lot_size}
          </Descriptions.Item>
          <Descriptions.Item label="Price Per Sq Ft">
            {data.price_per_sq_ft}
          </Descriptions.Item>
          <Descriptions.Item label="Property Type">
            {data.property_type}
          </Descriptions.Item>
          <Descriptions.Item label="Square Feet">
            {data.square_feet}
          </Descriptions.Item>
          <Descriptions.Item label="Year Built">
            {data.year_built}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    );
  };

  /**
   * Creates all cards
   * @param {Array} addresses
   * @returns A Map of the Card components
   */
  createCards = (addresses) => {
    if (addresses.length < 1) return;
    return addresses.map(this.createCard);
  };

  /**
   * Formats the address data for the Card components
   * @param {Object} address
   * @returns Formatted data
   */
  formatData = (address) => {
    let data = {};
    Object.entries(address)
      .filter(
        (el) =>
          !["street", "city", "state", "zip", "url", "key", "id"].includes(
            el[0]
          )
      )
      .forEach((el) => {
        let k = el[0].replaceAll("_", " ");
        let v = null;
        if (el[1] !== null) {
          v =
            k === "price"
              ? el[1].toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : el[1].toString();
        } else {
          v = "No Data Available";
        }
        data[k.replaceAll(" ", "_")] = v;
      });
    return data;
  };

  render() {
    return (
      <>
        <div className="site-card-border-less-wrapper">
          {this.createCards(this.props.addresses)}
        </div>
      </>
    );
  }
}

export default Cards;
