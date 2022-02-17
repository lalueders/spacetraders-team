import Status from './Status.js';

export default {
  title: 'Component/Status',
  component: Status,
};

const Template = args => <Status {...args} />;

export const stateGreen = Template.bind({});
stateGreen.args = {
  isGreen: true,
};
export const stateRed = Template.bind({});
stateRed.args = {
  isGreen: false,
};
