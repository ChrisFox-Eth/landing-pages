import React, { Component } from 'react';

class Main extends Component {



  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-light" style={{ maxWidth: '512px' }}>
                <h2 className="text-dark text-monospace bg-light"><b>ChrisFox.eth - a testing ground</b></h2>
              </div>
              <p>&nbsp;</p>
              <table className="table-sm table-bordered text-monospace" style={{ width: '100%', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '50%'}}>Band</th>
                    <th scope="col" style={{ width: '50%'}}>File Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="bg-light text-black">
                  <td>Audible Silence</td>
                  <td><a target="_blank" rel="noopener noreferrer" href="https://ipfs.io/ipfs/QmWBZQKPcuBbPoMPqfH9EsqBhUJ3tyEFfzHboWkTziWGDx?filename=Initial%20Bounce%20Sampled.mp3">JLIM</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}



export default Main;
