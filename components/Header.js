import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link route="/">
        <a className="item">BlockChain Listings</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Contracts</a>
        </Link>
        <Link route="/reService/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};