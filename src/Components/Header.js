import React, { Component } from 'react';
//import headerimage from './Images/hackerheader.jpg'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="conteiner_head">
      <h1><span> CYBERIA </span></h1>
         <a type="button" href="https://t.me/joinchat/F2M0_AtESEE1hZWs7FJSUQ" class="header_button">Присоедитится</a>*
        {/*<img src={process.env.PUBLIC_URL + '/hackerheader1.jpg'  } alt="header" className="headerimg"/>*/}
        </div>
      </div>
    );
  }
}

export default Header;
