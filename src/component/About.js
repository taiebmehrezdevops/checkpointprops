import React from 'react';
function About(props){
    return(
        <section id="about-me">
          <div>{props.children}</div>
      <h1>
        Hello, my name is
        <span class="rotate text-important">John doe</span>,<br />
        and i make horrible websites.
      </h1>
      
      <img class="avatar" src="./Jhon-Doe.jpg" alt="jhon-doe" />
    </section>
    
    )
  }
  export default About