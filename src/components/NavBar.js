import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/edwin-nieto-b85607240/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/Edwinn7?tab=repositories"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAE0UlEQVR4nO2a34tVVRTHv1smGmlKRysLg0pQazAdHdNpsh9Ev5TqKXorKEr6AUYQ1VMERVHolNVDvUV/QdBTFE2mNU49TIMQSKFZQmU1w+CoM6Dz6WFf7cx0z7lrnR/3Bt0PzNNde33XWnP2OXuvvaU2bdq0afP/JTRDBLhG0q2S1klaJekqSd2SumomU5LGJR2RdFDSmKQvQggHmxFfJQC9wCBwlPz8AuwC1rU6HxNAAO4FhgskncbXwD1AU55aN8Am4NsKEp/PCLCx1fmeA1gIvAOcaULyZzkD7AY6W538amCsiYnPZxRY2arkNwN/tjD5s4wDW5qd/FbgZIsTT3ICuDtPLu43KtAv6TNJF+QRrJBTku4MIezzDHIVAFgtab+kxZ5xTWRcUn8I4QfrAHMBgIWKya/NMBuStFdSv6RbJJ1v9d+AaUl7JI1IGpB0e4btqKSBEMJ0SdoR4F3DXHw4Yb8MeBH4vcDc/g14BliU8Hu/YdxbZSe/Cdt3flWdsd3AhzmS/wD411QDVhrGngY2WHJrOAWIS89vJFlWX4tDCJMpfnZI6lGcRmOSjinOWUlaKukSxc1Sv6TvQwhvp/jpTozLYr/iVMBgmw5xbW+lo5CYLZ4ORzxbyxD0bGyWlJBjo3gWOeL5qpG/BQ3EehUfSSuXOmzz0u2wHQCyvlrZBZD0kENMknqd9nlY4bR/MOvHRgV4wCGEpLovwJKh9mfFk0NCJe70PLyeSyhfbLucsfl3jMDjDoEjQFmrPktsncDPjvi2p/nKmgKePtwrIYQZh30hasvcVx1D/D1F4HNjdaeBC90CBQG6atoWPk3zk/UEXG2MZSiEcNwXfnFCCFOKGyQLqV+OrAJcZHR+wGhXBVbt1FyyCtCV8VuSX412VWDVTp2iWQWw9gr+m336uaTGmFWAk0bny3yxlMrlRrsTaT9kFWDC6LyVhxR9RrvUXLIKcNjo/GZgqdG2NICLJVnb4am5ZBXgR6PzDknPGm3L5LmatgVzk/QcwGOOpeYpYI1bJCfAWsciCOCRPCJrHAIQ9wPLK8h3flxXEI/NPVybV+yQU+go8eCkEoA+4CdnTJnvskb9gI+dMS6XtId4MaK09hiwBHhT0rCkK53DPyoivN5Z7SSTwHtAP9Co0PW0FwA3AO/XfOUlsyVmCWR/HacTwA7iYclxQxB/AY86NLfXxhTFdU6YFsx9dRzPAq8R/0uraPxSGsHRMCFeuqhXeC/byihAqCVQj5dqNuuBmRSbWWJ32avbSzzhyctw4eQTwVxP/aOxGeCyms2TKYEMFdD9JGfypwHrMtkczO4UsecTNi8T/+NJXiig+VTOAgyWk/XcYDqB7+qIHSBxdY34tLxB/BQ+QYF9AnBXjuRHqapBSzyZrXcvyPyGd+ptdCb/B1VfmgK2ENf+SSYo+r2tr9XnSP4kMFB2DGmB3UG8mJRkEniauZcZzqPA4+gowBRwWznZ2YO7qfbIzWcGOEw8uJihwNvYWIBjwI1l5uYJcAWNL0pWWYBRwNq+r4t7jZ4khHBI0mZJg5Jmi/hyMitpp+KNMGvnqlqADcDeJjwBI1S45S4Ecdm8DdhXQQG+pIwrL80CuI54jN1TwEcPsJMmttsqgZz9gCpiadOmTZs2bf7hbxQ3is3ZqIbgAAAAAElFTkSuQmCC" alt="github" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
