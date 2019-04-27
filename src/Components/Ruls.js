import React, { Component } from 'react';

class Ruls extends Component {
  render() {
    return (
      <div className="Ruls">
        <div className="ruls_conteiner">

          <div className="conteiner1">
              <div className="box1 box">
                <p>Сообщество является открытым и некомерческим</p>
              </div>
              <div className="box2 box">
                <p>Все члены сообщества равны в правах и обязаностях</p>
              </div>
              <div className="box3 box">

              </div>
          </div>

          <div className="conteiner1">
              <div className="box4 box">
                  <p>Мы занимаемся исключительно деятельностью не противоречащей действующему законодательству</p>
              </div>
              <div className="box5 box">

              </div>
              <div className="box6 box">
                  <p>Вопросы относительно деятельности сообщества решаются большинством голосов</p>
              </div>
          </div>

          <div className="conteiner1">
              <div className="box7 box">

              </div>
              <div className="box8 box">
                  <p>Cообщество функционирует в виде открытых собраний. Принять участие может каждый желающий</p>
              </div>
              <div className="box9 box">
                  <p>Для того чтоб узнать время и место проведения следующего собрания - присоеденись к нашему Telegram чату</p>
              </div>
          </div>
          {/*
            <ul>
                <li>Сообщество является открытым и некомерческим.</li>
                <li>Все члены сообщества равны в правах и обязаностях.</li>
                <li>Мы занимаемся исключительно деятельностью не противоречащей действующему законодательству.</li>
                <li>Жизненноважные вопросы относительно деятельности сообщества решаются большинством голосов во время проведения соответствующих собраний</li>
                <li>На даный момент сообщество функционирует в виде открытых собраний.</li>
                <li> Принять участие в собрании может каждый желающий.</li>
                <li> О време и месте проведения собрания можно узнать присоеденившись к чату в Telegram.</li>
            </ul>
           </div>
           {/*
           <div className="box right">
              <h2>Присоеденится к сообществу</h2>
              <a title="Telegram" className="icons" href="https://web.telegram.org/#/im?p=g189024321"><img src={process.env.PUBLIC_URL + '/telegram.png' } width="50"
   height="50" alt="telegram"/></a>
              <a title="Youtube" className="icons" href="https://www.youtube.com/user/Tatrasiel7/featured"><img src={process.env.PUBLIC_URL + '/youtube.svg' } width="50"
   height="50" alt="Youtube"/></a>
           </div>
           */}
         </div>
      </div>
    );
  }
}

export default Ruls;
