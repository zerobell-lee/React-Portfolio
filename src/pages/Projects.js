import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resumeData from '../resumeData';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : props.match.params.id
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() { 
        let id = this.state.id
            return (
            <div className="app">
                <section id="project-header">
                    <nav id="project-nav-wrap">
                        <Link to="/"><i className="fas fa-arrow-circle-left" style={{color: '#f8af6e'}}></i></Link>
                    </nav>
                    <div className="row">
                        <div className="five columns">
                            <img className="project-pic" src={resumeData.projects[id].img}></img>
                        </div>
                        <div className="seven columns main-col">
                            <h2>{resumeData.projects[id].title}</h2>
                            {resumeData.projects[id].overview.map((item) => {
                                return <p>{item}</p>
                            })}
                        </div>
                        
                    </div>
                    
                </section>
                <section id="project-details">
                    <div className="row">
                        <div className="three columns header-col">
                            <h1><span>Description</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                {resumeData.projects[id].description.map((item) => {
                                    return <p>{item}</p>
                                })}
                                </div>
                            </div>
                        </div>
                        
                        <div className="three columns header-col">
                            <h1><span>Stack</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    {id==='HMN' && <ul>
                                        <li>Back-End</li>
                                            <ul>
                                                <li>WAS Framework</li>
                                                    <ul>
                                                        <li>Node.js Express</li>
                                                    </ul>
                                            
                                                <li>Crawler</li>
                                                    <ul>
                                                        <li>Python3 (with crontab)</li>
                                                    </ul>
                                                <li>Database</li>
                                                    <ul>
                                                        <li>MariaDB</li>
                                                    </ul>
                                            </ul>
                                        <li>Front-End</li>
                                            <ul>
                                                <li>React</li>
                                            </ul>
                                        <li>Deployment</li>
                                            <ul>
                                                <li>Configuration</li>
                                                <ul>
                                                    <li>Raspbian Stretch</li>
                                                </ul>
                                            </ul>
                                    </ul>}
                                    {id==='ChatLogAnalyzer' && <ul>
                                        <li>Back-End</li>
                                            <ul>
                                                <li>WAS Framework</li>
                                                    <ul>
                                                        <li>Node.js Express</li>
                                                    </ul>
                                            
                                                <li>Parser</li>
                                                    <ul>
                                                        <li>Python3</li>
                                                        <li>Mecab-ko</li>
                                                    </ul>
                                            </ul>
                                        <li>Front-End</li>
                                            <ul>
                                                <li>React</li>
                                            </ul>
                                        <li>Deployment</li>
                                            <ul>
                                                <li>Front-end Server</li>
                                                <ul>
                                                    <li>Raspbian Stretch</li>
                                                </ul>
                                                <li>Back-end API Server</li>
                                                <ul>
                                                    <li>Google Cloud Platform</li>
                                                </ul>
                                            </ul>
                                    </ul>}
                                </div>
                            </div>
                        </div>

                        <div className="three columns header-col">
                            <h1><span>Duration</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <p>{resumeData.projects[id].duration}</p>
                                </div>
                            </div>
                        </div>

                        <div className="three columns header-col">
                            <h1><span>Article</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    {resumeData.projects[id].article.map((item) => {
                                        return <p><a href={item.url}>{item.title}</a></p>
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="three columns header-col">
                            <h1><span>References</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    {resumeData.projects[id].references.map((item) => {
                                        return <p><a href={item.url}>{item.title}</a></p>
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </section>
            </div>
        )
    }
}

export default Projects;