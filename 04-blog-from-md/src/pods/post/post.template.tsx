import * as React from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'common/components';
import { AppLayout } from 'layout';
import { Post } from './post.component';

export const query = graphql`
  query($slug: String) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

interface Props {
  data: { post };
  pageContext: {
    slug: string;
  };
}

const PostTemplate: React.StatelessComponent<Props> = ({
  pageContext: { slug },
  data: {
    post: {
      frontmatter: { title, date },
      html,
    },
  },
}) => {
  return (
    <AppLayout
      pathname={slug}
      seoComponent={
        <SEO
          title={title}
          keywords={[
            'lemoncode',
            'gatsby',
            'gatsby by sample',
            'frontent',
            'ssr',
            slug,
          ]}
        />
      }
    >
      <Post title={title} date={date} body={html} />
    </AppLayout>
  );
};

export default PostTemplate;