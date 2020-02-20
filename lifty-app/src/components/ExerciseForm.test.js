import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ExerciseForm from "./ExerciseForm";

Enzyme.configure({ adapter: new Adapter() });

describe("ExerciseForm", () => {
  let component;

  beforeEach(() => {
    // this is executed before each unit test
    component = shallow(<ExerciseForm />);
  });
  it('should contain a button with the text, "Submit"', () => {
    expect(component.contains(<button type="submit">Submit</button>)).toBe(
      true
    );
  });
});
