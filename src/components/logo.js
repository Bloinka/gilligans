import React, { Component } from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

class Logo extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            logo: file(relativePath: { eq: "GilligansLogoBorder.png" }) {
              childImageSharp {
                fixed(height: 60) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => [
          <Img key="logo" fixed={data.logo.childImageSharp.fixed} />
        ]}
      />
    );
  }
}

export default Logo;
