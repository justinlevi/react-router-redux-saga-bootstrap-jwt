import * as React from 'react';

class Article extends React.Component {
  render() {

    const { data } = this.props;
    const article = data.nodeQuery.entities.filter(node => node.url.alias === this.props.location.pathname)[0];
    console.log(article);

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="display-3">{article.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: article.body }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
