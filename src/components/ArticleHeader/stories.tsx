import { Meta, Story } from '@storybook/react/types-6-0';
import { ArticleHeader, ArticleHeaderProps } from '.';

import mock from './mock';

export default {
  title: 'ArticleHeader',
  component: ArticleHeader,
  args: mock,
} as Meta<ArticleHeaderProps>;

export const Template: Story<ArticleHeaderProps> = (args) => {
  return (
    <div>
      <ArticleHeader {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eum qui
        suscipit ea amet consequuntur! Inventore natus repudiandae nobis atque
        deserunt perspiciatis ipsam impedit dolor recusandae accusamus. Dolores,
        perferendis corrupti!
      </p>
    </div>
  );
};
