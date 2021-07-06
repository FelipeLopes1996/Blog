import request from 'graphql-request';
import config from '../config';
import { defaultVariables, loadPosts } from './load-posts';

jest.mock('graphql-request');

jest.mock('../graphql/queries.ts', () => {
  return {
    GRAPHQL_QUERY: 'A_QUERY',
  };
});

describe('load-posts', () => {
  it('should call request with default variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(
      config.graphqlURL,
      'A_QUERY',
      defaultVariables,
    );
  });

  it('should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
    expect(request).toHaveBeenCalledWith(config.graphqlURL, 'A_QUERY', {
      ...defaultVariables,
      authorSlug: 'OK',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
  });
});