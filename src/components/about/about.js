import React, { useState } from 'react'
import './about.css'

const About = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <div className="about-container thq-section-padding">
      <div className="about-max-width thq-section-max-width thq-flex-column">
        <div className="about-container1 thq-flex-row thq-section-max-width">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-filled"
            >
              {props.button}
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-outline"
            >
              {props.button}
            </button>
          )}
          {!isRefundVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(true)
              }}
              className="thq-button-outline"
            >
              {props.button2}
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(true)
              }}
              className="thq-button-filled"
            >
              {props.button2}
            </button>
          )}
        </div>
        <div className="about-container2 thq-flex-column">
          {isTermsVisible && (
            <div className="about-container3">
              <ul className="thq-flex-column">
                <li className="about-li list-item thq-flex-column">
                  <h2 className="about-heading7 thq-heading-2">
                    <span>Technologies/Tools</span>
                    <br></br>
                  </h2>
                  <ul className="about-ul1 thq-flex-column">
                    <li className="list-item">
                      <h3 className="about-heading8 thq-heading-3">
                        Programming languages:
                      </h3>
                      <p className="thq-body-small">Python, JavaScript</p>
                    </li>
                  </ul>
                  <ul className="about-ul2 thq-flex-column">
                    <li className="list-item">
                      <h3 className="about-heading81 thq-heading-3">IDE:</h3>
                      <p className="thq-body-small">
                        Pycharm, WebStorm, Visual Studio
                      </p>
                    </li>
                  </ul>
                  <ul className="about-ul3 thq-flex-column">
                    <li className="list-item">
                      <h3 className="about-heading82 thq-heading-3">
                        Operating system:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <p className="thq-body-small">Windows, Linux</p>
                    </li>
                  </ul>
                  <ul className="about-ul4 thq-flex-column">
                    <li className="list-item">
                      <h3 className="about-heading83 thq-heading-3">
                        Others:
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </h3>
                      <p className="thq-body-small">
                        HTML, CSS, PostgreSQL, SQL, GitHub, REST API, Agile,
                        Docker, Unit Tests
                      </p>
                    </li>
                  </ul>
                  <ul className="about-ul5 thq-flex-column">
                    <li className="list-item">
                      <h3 className="about-heading84 thq-heading-3">
                        Courses:
                      </h3>
                      <p className="thq-body-small">
                        <span>Coders Lab - Python Developer (completed)</span>
                        <br></br>
                        <span>Coders Lab - SCRUMLAB (completed)</span>
                        <br></br>
                        <span>
                          Coders Lab - JavaScript Specialist: React + Redux
                          (completed)
                        </span>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible && (
            <div className="about-container4">
              <ul className="thq-flex-column">
                <li className="about-li1 list-item thq-flex-column">
                  <h1 className="about-heading10 thq-heading-2">
                    <span>Something about me</span>
                    <br></br>
                  </h1>
                  <span className="thq-body-small">
                    My interest in programming prompted me to sign up for a
                    Python course. I am fascinated by the possibility of
                    creating with almost no limits, which stimulates my
                    imagination and motivates me to develop in this field
                  </span>
                  <ul className="about-ul7 thq-flex-column">
                    <li className="list-item">
                      <h1 className="about-heading11 thq-heading-3">
                        Hobbies:
                      </h1>
                      <span className="thq-body-small">
                        <span>Mechanics</span>
                        <br></br>
                        <span>Programming</span>
                        <br></br>
                        <span>Sci-Fi movies</span>
                        <br></br>
                        <span>RPG games</span>
                        <br></br>
                        <span> Chess</span>
                        <br></br>
                        <span> Cycling</span>
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="about-heading111 thq-heading-3">
                        Languages:
                      </h1>
                      <span className="thq-body-small">
                        <span>English - B1</span>
                        <br></br>
                        <span>Polish - Native</span>
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="about-heading112 thq-heading-3">
                        Currently:
                      </h1>
                      <span className="thq-body-small">
                        <span>
                          Occasionally doing some projects and trying to slowly
                          expand this portfolio &quot;FUN&quot; projects
                        </span>
                        <br></br>
                        <span>
                          Also practicing use of Express along with typescript
                          and prisma.
                        </span>
                        <br></br>
                        <span>
                          Lately I was amazed by The Unity Machine Learning
                          Agents,
                        </span>
                        <br></br>
                        <span>
                          {' '}
                          so I&apos;m planning to start learning C languages and
                          hopefully soon start doing some projects in unity :)
                        </span>
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

About.defaultProps = {
  button: 'Skills',
  button2: 'About me',
}
export default About
