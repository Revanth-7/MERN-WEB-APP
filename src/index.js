import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ParticlesBg from 'particles-bg'

ReactDOM.render(
<div>
<App />
<ParticlesBg  color="#9B72AA" type="cobweb" bg={true} />
</div>
, document.getElementById('root'));