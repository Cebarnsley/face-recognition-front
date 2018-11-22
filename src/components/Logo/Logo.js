<<<<<<< HEAD
import React from 'react';
import Tilt from'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop: '3px'}} alt='logo' src={brain}/>
 				</div>
			</Tilt>
		</div>
	);
}

=======
import React from 'react';
import Tilt from'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner pa3">
 					<img style={{paddingTop: '3px'}} alt='logo' src={brain}/>
 				</div>
			</Tilt>
		</div>
	);
}

>>>>>>> bf809638a078d497fe8298c5e5ed0ef6a1204ca9
export default Logo;