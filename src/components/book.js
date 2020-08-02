import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

class Item extends React.Component {
  render() {
    const book = this.props.data.mongodbBooksplusBooks;

    return (
      <Layout>
        <div>
          <img src={book.thumbnailUrl} />
          <h1>{book.title}</h1>
          <p>
            By{' '}
            {book.authors.map(author => (
              <span>{author}, </span>
            ))}
          </p>
          <p>{book.longDescription}</p>
          <p>
            Published: {book.publishedDate} | ISBN: {book.isbn}
          </p>
          {book.categories.map(category => category)}
        </div>
      </Layout>
    );
  }
}

export default Item;

export const pageQuery = graphql`
  query($id: String!) {
    mongodbBooksplusBooks(id: { eq: $id }) {
      id
      title
      longDescription
      thumbnailUrl
      isbn
      pageCount
      publishedDate(formatString: "MMMM DD, YYYY")
      authors
      categories
    }
  }
`;
