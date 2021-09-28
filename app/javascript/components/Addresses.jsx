import { Alert, Divider, message, Spin, Space } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import SearchForm from "./SearchForm";
import SortMenu from "./SortMenu";
import background from "../img/bottom_bg.jpg";

class Addresses extends React.Component {
  state = {
    addresses: [],
    similar: [],
  };

  /**
   * Set the address state when the component mounts
   */
  componentDidMount() {
    this.setState(() => ({
      addresses: [],
    }));
  }

  /**
   * Fetches the Addresses
   * Adds Loading spinner to DOM until Fetch is complete
   * Adds user messags to DOM if necessary
   * Sets the addresses state, causing components to update
   * @param {Object} values  - containing the values from the Form
   */
  loadAddresses = (values) => {
    this.setState(() => ({
      addresses: [],
      similar: [],
    }));
    let formData = new FormData();
    Object.entries(values).forEach((el) => formData.append(el[0], el[1]));
    const metaCsrf = document.querySelector("meta[name='csrf-token']");
    const csrfToken = metaCsrf.getAttribute("content");
    ReactDOM.render(
      <Space size="large">
        <Spin size="large" />
      </Space>,
      document.getElementById("loading")
    );
    fetch("api/v1/addresses/index", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "x-csrf-token": csrfToken,
      },
      body: formData,
    })
      .then((data) => {
        if (data.ok) {
          return data.json();
        } else {
          throw new Error("Could not find that address.");
        }
      })
      .then((data) => {
        if (data.addresses.length < 1) {
          ReactDOM.render(
            <Alert
              message="We could not find any addresses with that information. Check to make sure that there is a valid Street Address, City, State or Zip Code."
              type="error"
              closable
              onClose={() => {
                ReactDOM.unmountComponentAtNode(
                  document.getElementById("messages")
                );
              }}
            />,
            document.getElementById("messages")
          );
          ReactDOM.unmountComponentAtNode(document.getElementById("loading"));
          return;
        }
        if (!data.found) {
          ReactDOM.render(
            <Alert
              message="We could not find that exact address. Here are some similar addresses."
              type="info"
              closable
              onClose={() => {
                ReactDOM.unmountComponentAtNode(
                  document.getElementById("messages")
                );
              }}
            />,

            document.getElementById("messages")
          );
        }
        this.setAddressState(data, "addresses");
        this.setAddressState(data, "similar");
        ReactDOM.unmountComponentAtNode(document.getElementById("loading"));
        document.getElementById("sort").style.visibility =
          this.state.addresses.length > 1 || this.state.similar.length > 1
            ? "visible"
            : "hidden";
      })
      .then(() => {
        this.clearForm();
      })
      .catch((err) => message.error("Error: " + err));
  };

  /**
   * Sets the state for addresses and similar addresses based on fetched datat
   * @param {Object} data
   * @param {String} type
   */
  setAddressState = (data, type) => {
    data[type].forEach((address) => {
      const newEl = {
        price: address.price,
        beds: address.beds,
        baths: address.baths,
        days_on_market: address.days_on_market,
        lot_size: address.lot_size,
        price_per_sq_ft: address.price_per_sq_ft,
        property_type: address.property_type,
        square_feet: address.square_feet,
        url: address.url,
        year_built: address.year_built,
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
        key: address.id,
        id: address.id,
      };
      if (type === "addresses") {
        this.setState((prevState, type) => ({
          addresses: [...prevState.addresses, newEl],
        }));
      } else {
        this.setState((prevState) => ({
          similar: [...prevState.similar, newEl],
        }));
      }
    });
  };

  /**
   * Sorts the addresses by key
   * @param {Event} e
   */
  sortAddresses = (e) => {
    let key = e.domEvent.currentTarget.getAttribute("sort_key");
    let sortData =
      this.state.similar.length > 0 ? this.state.similar : this.state.addresses;
    e.domEvent.currentTarget.hasAttribute("sort") &&
    e.domEvent.currentTarget.getAttribute("sort") === "less"
      ? sortData.sort((a, b) => (a[key] > b[key] ? 1 : -1))
      : sortData.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    this.state.similar.length > 1
      ? this.setState({ similar: sortData })
      : this.setState({ addresses: sortData });
  };

  /**
   * Creates Cards for addresses that are similar
   * @returns Cards Component
   */
  createSimilarAddresses = () => {
    if (this.state.similar.length === 0) return;
    document.getElementById("divider").style.visibility = "visible";
    return <Cards addresses={this.state.similar}></Cards>;
  };

  /**
   * Clears the input Form
   */
  clearForm = () => {
    document
      .querySelectorAll("#search-form input")
      .forEach((el) => (el.value = ""));
  };

  render() {
    return (
      <>
        <div>
          <SearchForm
            loadAddresses={this.loadAddresses}
            clearForm={this.clearForm}
          ></SearchForm>
        </div>
        <div
          style={{
            width: "100vw",
            height: "58vh",
            overflow: "scroll",
            position: "absolute",
            bottom: "0px",
            backgroundColor: "#232D4B",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center bottom",
          }}
        >
          <div>
            <SortMenu sortAddresses={this.sortAddresses}></SortMenu>
          </div>
          <div id="cards" className="site-card-border-less-wrapper">
            <Cards addresses={this.state.addresses}></Cards>
            <Divider
              id="divider"
              style={{ color: "white", visibility: "hidden" }}
            >
              Similarly Priced Addresses
            </Divider>
            {this.createSimilarAddresses()}
          </div>
        </div>
      </>
    );
  }
}

export default Addresses;
