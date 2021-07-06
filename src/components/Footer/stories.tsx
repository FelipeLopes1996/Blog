import { Footer, FooterProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>Feito com ❤ por Felipe de Lima</p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
