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
                <h2 className="text-dark text-monospace bg-light"><b><ins>Music built on Ethereum, no <span role="img" aria-label="cap" alt="cap">🧢</span></ins></b></h2>
              </div>
              <p>&nbsp;</p>
              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col" style={{ width: '200px'}}>Band</th>
                    <th scope="col" style={{ width: '230px'}}>File Name</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr className="bg-light text-black">
                  <td>Audible Silence</td>
                  <td><a target="_blank" rel="noopener noreferrer" href="https://chrisfox-eth-link.ipns.dweb.link/Audible%20Silence/Throop.eth.mp3">Throop.eth</a></td>
                  </tr>
                  <tr className="bg-light text-black">
                  <td>Trophywife</td>
                  <td><a target="_blank" rel="noopener noreferrer" href="https://chrisfox-eth-link.ipns.dweb.link/Trophywife/Someones%20gonna%20shoot%20me.mp3">Someone's gonna shoot me</a></td>
                  </tr>
                  <tr className="bg-light text-black">
                  <td>The Proper Hustlers</td>
                  <td><a target="_blank" rel="noopener noreferrer" href="https://chrisfox-eth-link.ipns.dweb.link/When%20I%20get%20pissed,%20you%20get%20mist.mp3">In The Midst</a></td>
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
