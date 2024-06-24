import React from 'react';
import './Milestone.css'

function Milestone() {
  return (
   <>
    <h1 className='h2'>
            Our Milestones    
     </h1>
    <div className="milestone">
     <img className='left-milestone' src="/image/milestone.png" alt="Milestone" />
    <div className="right-milestone">
     <h2> 2012</h2>
     <p>Pinnacle Packing Industries, LLC was founded in Dubai, UAE.</p>
     <h2>2013</h2>
     <p>We expanded our production process to manufacture bubble wrap, corrugated rolls and carton boxes.</p>
     <h2>2015</h2>
     <p>We became a team of 200+ professionals and expanded to new regions in the international market.</p>
     <h2>2017</h2>
     <p>We added innovative new products such as stretch film and paper cores to our catalogue.</p>
     <h2>2019</h2>
     <p>We grew to 1200+ engineers and 800+ customers across the globe.</p>
     </div>
     </div>
   </>
  );
}

export default Milestone;
