import React from 'react'

export const CardAboutComponent = () => {
    return (
        <div className="container-about">
            <h1>About me</h1>
            <p>i am engenier mecatronict and programmer</p>
            <div>
                <h2>social networks</h2>
                <div className="technologies">
                    <ul>
                        <li><i className="fab fa-react"></i></li>
                        <li><i className="fab fa-bootstrap"></i></li>
                        <li><i className="el el-css"></i></li>
                        <li><i className="icon-html"></i></li>
                    </ul>
                </div>

                <div className="social">
                    <ul>
                        <li><span className="ai-linkedin"></span></li>
                        <li><span className="ai-github"></span></li>
                        <li><i className="el el-blogger"></i></li>                    
                    </ul>
                </div>
            </div>
        </div>
    )
}
