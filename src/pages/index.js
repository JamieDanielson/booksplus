import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = props => {
  const books = props.data.allMongodbBooksplusBooks.edges;

  return (
    <Layout>
      <div className="book-container">
        {books.map(book => (
          <div className="book">
            {book.node.thumbnailUrl && (
              <Link to={`/book/` + book.node.id}>
                <img src={book.node.thumbnailUrl} alt="book" />
              </Link>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMongodbBooksplusBooks {
      edges {
        node {
          id
          title
          shortDescription
          thumbnailUrl
        }
      }
    }
  }
`;
