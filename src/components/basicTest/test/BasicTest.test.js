import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import BasicTest from "../basicTest";

Enzyme.configure({ adapter: new Adapter() });

//Basic test with enzyme
it("renders correctly enzyme", () => {
  const wrapper = shallow(<BasicTest />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("renders correctly enzyme with mount", () => {
  const wrapper = mount(<BasicTest />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
