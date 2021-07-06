import { GoTop } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        consectetur incidunt asperiores esse dignissimos. Aliquam enim, iusto
        error iste repudiandae sapiente numquam, in quam quis non minus optio et
        possimus?
      </p>
      <GoTop {...args} />
    </div>
  );
};
