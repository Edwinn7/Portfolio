import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col lg={12}>
          <div className="newsletter-bx wow slideInUp"> 
          <h3>I hope my work has been a demonstration of my passion for programming<br></br>and my commitment to quality and performance in every project I work on.</h3>
          </div>
            </Col>
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/edwin-nieto-b85607240/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Edwinn7?tab=repositories"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE0UlEQVR4nO2a34tVVRTHv1smGmlKRysLg0pQazAdHdNpsh9Ev5TqKXorKEr6AUYQ1VMERVHolNVDvUV/QdBTFE2mNU49TIMQSKFZQmU1w+CoM6Dz6WFf7cx0z7lrnR/3Bt0PzNNde33XWnP2OXuvvaU2bdq0afP/JTRDBLhG0q2S1klaJekqSd2SumomU5LGJR2RdFDSmKQvQggHmxFfJQC9wCBwlPz8AuwC1rU6HxNAAO4FhgskncbXwD1AU55aN8Am4NsKEp/PCLCx1fmeA1gIvAOcaULyZzkD7AY6W538amCsiYnPZxRY2arkNwN/tjD5s4wDW5qd/FbgZIsTT3ICuDtPLu43KtAv6TNJF+QRrJBTku4MIezzDHIVAFgtab+kxZ5xTWRcUn8I4QfrAHMBgIWKya/NMBuStFdSv6RbJJ1v9d+AaUl7JI1IGpB0e4btqKSBEMJ0SdoR4F3DXHw4Yb8MeBH4vcDc/g14BliU8Hu/YdxbZSe/Cdt3flWdsd3AhzmS/wD411QDVhrGngY2WHJrOAWIS89vJFlWX4tDCJMpfnZI6lGcRmOSjinOWUlaKukSxc1Sv6TvQwhvp/jpTozLYr/iVMBgmw5xbW+lo5CYLZ4ORzxbyxD0bGyWlJBjo3gWOeL5qpG/BQ3EehUfSSuXOmzz0u2wHQCyvlrZBZD0kENMknqd9nlY4bR/MOvHRgV4wCGEpLovwJKh9mfFk0NCJe70PLyeSyhfbLucsfl3jMDjDoEjQFmrPktsncDPjvi2p/nKmgKePtwrIYQZh30hasvcVx1D/D1F4HNjdaeBC90CBQG6atoWPk3zk/UEXG2MZSiEcNwXfnFCCFOKGyQLqV+OrAJcZHR+wGhXBVbt1FyyCtCV8VuSX412VWDVTp2iWQWw9gr+m336uaTGmFWAk0bny3yxlMrlRrsTaT9kFWDC6LyVhxR9RrvUXLIKcNjo/GZgqdG2NICLJVnb4am5ZBXgR6PzDknPGm3L5LmatgVzk/QcwGOOpeYpYI1bJCfAWsciCOCRPCJrHAIQ9wPLK8h3flxXEI/NPVybV+yQU+go8eCkEoA+4CdnTJnvskb9gI+dMS6XtId4MaK09hiwBHhT0rCkK53DPyoivN5Z7SSTwHtAP9Co0PW0FwA3AO/XfOUlsyVmCWR/HacTwA7iYclxQxB/AY86NLfXxhTFdU6YFsx9dRzPAq8R/0uraPxSGsHRMCFeuqhXeC/byihAqCVQj5dqNuuBmRSbWWJ32avbSzzhyctw4eQTwVxP/aOxGeCyms2TKYEMFdD9JGfypwHrMtkczO4UsecTNi8T/+NJXiig+VTOAgyWk/XcYDqB7+qIHSBxdY34tLxB/BQ+QYF9AnBXjuRHqapBSzyZrXcvyPyGd+ptdCb/B1VfmgK2ENf+SSYo+r2tr9XnSP4kMFB2DGmB3UG8mJRkEniauZcZzqPA4+gowBRwWznZ2YO7qfbIzWcGOEw8uJihwNvYWIBjwI1l5uYJcAWNL0pWWYBRwNq+r4t7jZ4khHBI0mZJg5Jmi/hyMitpp+KNMGvnqlqADcDeJjwBI1S45S4Ecdm8DdhXQQG+pIwrL80CuI54jN1TwEcPsJMmttsqgZz9gCpiadOmTZs2bf7hbxQ3is3ZqIbgAAAAAElFTkSuQmCC" alt="github" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
