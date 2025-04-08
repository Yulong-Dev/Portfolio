import React from 'react'
import '../components/Services/Services.css'
import WP2 from '../assets/wp2.gif'

const Webdesign = () => {
  return (
    <div className='webdesign'>
        <div className="explain1">
            <div className="onebox">
                <img src={WP2} className='oneimage'/>
            </div>
            
            <div className="explain1-text">
                <h1>Web Design</h1>
                <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.</p>
                <p>Key Aspects of Web Design: <br/>
                    User Experience (UX): <br /> 
                    Prioritizing the user's journey and ensuring a smooth, intuitive, and enjoyable experience. <br />
                    Visual Design: <br />
                    Focusing on elements like color palettes, typography, imagery, and overall aesthetics to create an appealing and engaging website. <br />
                    Functionality: <br />
                    Ensuring the website is easy to navigate, with clear calls to action and a logical structure. <br />
                    Accessibility: <br />
                    Designing websites that are usable by people with disabilities, following web accessibility guidelines. <br />
                    Responsiveness: <br />
                    Making websites adapt to different screen sizes and devices (desktops, tablets, and mobile phones). <br />
                    Content Strategy: <br />
                    Planning and organizing content in a way that is clear, concise, and easy to find. <br />
                    Search Engine Optimization (SEO):   <br />
                    Optimizing the website's structure and content to improve search engine rankings. <br />
                    Collaboration: <br />
                    Often involves working with web developers, content creators, and other stakeholders to ensure the website meets all requirements. <br />
                     </p>
            </div>
            

        </div>
      
    </div>
  )
}

export default Webdesign;
