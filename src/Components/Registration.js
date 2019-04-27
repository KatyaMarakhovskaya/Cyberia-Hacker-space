import React, { Component } from 'react';

class Registration extends Component {
  render() {
    return (
      <div className="Registration">
        <div className="registration_conteiner">
           <div className="telegram bottom">
               <a title="Telegram" className="icons" href="https://t.me/joinchat/F2M0_AtESEE1hZWs7FJSUQ"><img src={process.env.PUBLIC_URL + '/telegram.svg' } width="50"
                  height="50" alt="telegram"/></a>
            </div>

            <div className="center bottom">
                <p> Присоеденится к нам</p>
            </div>

            <div className="youtube bottom">
               <a title="Youtube" className="icons" href="https://www.youtube.com/user/Tatrasiel7/featured"><img src={process.env.PUBLIC_URL + '/youtube.png' } width="50"
                  height="50" alt="Youtube"/></a>
            </div>
            
        </div>
      </div>
    );
  }
}

export default Registration;
