import { ShallowWrapper } from "enzyme";

export const findByDataTestId = (wrapper: ShallowWrapper, dataTestId: string) =>
  wrapper.find(`[data-test='${dataTestId}']`);

export const existOneDataTestId = (
  wrapper: ShallowWrapper,
  dataTestId: string
) => {
  const component = findByDataTestId(wrapper, dataTestId);
  expect(component.length).toBe(1);
};
