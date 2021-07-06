import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';

import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();

    expect(
      screen.getAllByRole('link', { name: mock.title })[0],
    ).toHaveAttribute('href', `/post/${mock.slug}`);

    expect(container).toMatchSnapshot();
  });
});
