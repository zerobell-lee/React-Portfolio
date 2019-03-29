import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <HashLink className="mobile-btn" to="#nav-wrap" title="Show navigation">Show navigation</HashLink>
          <HashLink className="mobile-btn" to="#" title="Hide navigation">Hide navigation</HashLink>
            <ul id="nav" className="nav">
               <li className="current"><HashLink className="smoothscroll" to="#home">Home</HashLink></li>
               <li><HashLink className="smoothscroll" to="#about">About</HashLink></li>
             <li><HashLink className="smoothscroll" to="#resume">Resume</HashLink></li>
               <li><HashLink className="smoothscroll" to="#portfolio">Works</HashLink></li>
               <li><HashLink className="smoothscroll" to="#contact">Contact</HashLink></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline" style={{fontFamily: 'Alfa Slab One'}}>{resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'Yellowtail', fontSize: '40px'}}>{resumeData.role}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                        return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}