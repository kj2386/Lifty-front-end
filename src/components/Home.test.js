import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";



Enzyme.configure({ adapter: new Adapter() });

describe("SetForm", () => {
  let component;

  beforeEach(() => {
    // this is executed before each unit test
    component = shallow(<Home/>);
  });
  it('should contain an unorderdered list', () => {
    expect(component.contains(<ul></ul>)).toBe(
      true
    );
  })
})