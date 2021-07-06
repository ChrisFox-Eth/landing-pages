import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {



  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-light" style={{ maxWidth: '512px' }}>
                <h2 className="text-dark text-monospace bg-light"><b>Music built on Ethereum, no <span role="img" aria-label="cap" alt="cap">🧢</span></b></h2>
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
                  <td><a target="_blank" rel="noopener noreferrer" href="https://storageapi.fleek.co/foxaweber-team-bucket/JLIM%20Scratch%205-17-14.mp3">JLIM</a></td>
                  </tr>
                  <tr className="bg-light text-black">
                  <td>Trophywife</td>
                  <td><a target="_blank" rel="noopener noreferrer" href="https://storageapi.fleek.co/foxaweber-team-bucket/Someones%20gonna%20shoot%20me.mp3">Someone's gonna shoot me</a></td>
                  </tr>
                  <tr className="bg-light text-black">
                  <td>Audible Silence</td>
                  <td><a target="_blank" rel="noopener noreferrer" href="https://storageapi.fleek.co/foxaweber-team-bucket/Throop.eth.mp3">Throop.eth</a></td>
                  </tr>
                </tbody>
              </table>
            </div><br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="text-monospace">Tips accepted in the currency of your choice: 0xa7758394D8f7fD23b0d9F13E02427B514687394B</div>
          </main>
        </div>
      </div>
    );
  }
}



export default Main;
