import React, { Component } from "react";

import Layout from "../../components/Layout";

class index extends Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 pageTitle"
            data-sal="zoom-in"
            data-sal-delay="100"
            data-sal-duration="200"
            data-sal-easing="ease"
          >
            Location
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content"></div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default index;
