import React from "react"
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Table from "./Table";
import Currency from "../../components/Currency/Currency"

configure({adapter: new Adapter()})


describe("<Table />", () => {
  it("should render one Currency component", () => {
      const wrapper = shallow(<Table />)
      expect(wrapper.find(Currency)).toHaveLength(1)
  })
})