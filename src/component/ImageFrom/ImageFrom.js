import React from 'react';
import './ImageFrom.css';
const ImageFrom=()=>{
return (<div>
<p className='f3'>
    {'This Magic Brain Wll detect faces in your pictures.' }
</p>
<div className='center'>
    <div className='center pa4 br3 shadow-5'>
    <input type="text"className="f4 pa2 w-70 center" placeholder="enter URL here"/>
    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
    </div>
</div>

</div>);
}
export default ImageFrom;
