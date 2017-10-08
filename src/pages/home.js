import * as React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {

    console.log(this.props);

    const {data} = this.props;

    if (data.networkStatus === 1) {
      return <div >Loading...</div>;
    }

    if (data.error) {
      return <div>Error! {data.error.message}</div>;
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="jumbotron">
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p className="lead">
                <a className="btn btn-primary btn-lg red-button" href="/about" role="button">Learn more</a>
              </p>
            </div>
          </div>

          <div className="row">
            <h1 className="display-3">Recent Posts</h1>
            {data.nodeQuery.entities.map(node => 
              <li key={node.entityId}>
                <Link to={node.url.alias}>
                  {node.title}
                </Link>
            </li>
            )}
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
