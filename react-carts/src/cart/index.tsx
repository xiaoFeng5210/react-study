import * as React from "react";
import { Component, Fragment } from "react";
import { List, Typography } from "antd";
import "./index.css";

export interface CratItem {
  id: number;
  name: string;
  price: number;
}

const cartData = Array(5);
