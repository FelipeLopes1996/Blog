import * as Styled from './styles';
import { PostProps } from '../Post';
import Link from 'next/link';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/strapi-image';

export type PostCardProps = PostProps & {
  id: string;
  title: string;
  cover: StrapiImage;
  excerpt: string;
  slug: string;
};

export const PostCard = ({ title, cover, excerpt, slug }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`/post/${slug}`}>
        <a>
          <Styled.Cover src={cover.url} alt={title} />
        </a>
      </Link>
      <Link href={`/post/${slug}`}>
        <Heading as="h2" size="small">
          <a> {title} </a>
        </Heading>
      </Link>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
