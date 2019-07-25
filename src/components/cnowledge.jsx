import React from 'react'
import './css/cnowledge.scss'
const Cnowledge = () => {
  const numbers = [1, 2]
  return (
    <div className="cnowledge">
      <div className="container">
        <div className="container-title">
          <h2>knowledge share</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam
            rerum sint temporibus deserunt quis maiores dolorum! Tempore
            adipisci doloribus consequatur delectus labore
          </p>
        </div>
        <div className="row">
          {numbers.map(number => (
            <div key={number} className="col-lg-6 calendar">
              <div className="calendar-element">
                <p className="month">september</p>
                <h2>29</h2>
                <h3>Lorem ipsum dolor</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, laboriosam a. Rem, voluptas obcaecati ab nisi
                  reprehenderit numquam nostrum similique inventore consequatur
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cnowledge
