import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="About">
          <div className="cover_about layout">

              <div className="img_about ">
              </div>

              <div className='discription_about '>
                <h2><span>О нас</span></h2>
                <p>Мы - независимое сообщество людей, объединённых общими интересами.</p>
                <p>Наши участники IT-специалисты, системные администраторы, инженеры и просто люди, увлеченные технологиями и информационной безопасностью.</p>
                <p>Наша цель - защитить кибермир и сделать его более безопасным.</p>
                <p>Мы делимся опытом и совершаем ошибки. Придумываем новые проекты и улучшаем старые.</p>
              </div>

          </div>
      {/* <img src={process.env.PUBLIC_URL + '/man2.png'  } alt="man" className="about_img"/>
        <div className="about_cover_txt">
          <div className="about_txt">
          <h2><span>О нас</span></h2>
          <p>Мы - независимое сообщество людей, объединённых общими интересами.</p>
          <p>Наши участники IT-специалисты, системные администраторы, инженеры и просто люди, увлеченные технологиями и информационной безопасностью.</p>
          <p>Наша цель - защитить кибермир и сделать его более безопасным .</p>
          <p>Мы делимся опытом и совершаем ошибки. Придумываем новые проекты и улучшаем старые.</p>
          </div>
        </div>*/}
      </div>
    );
  }
}

export default About;
