<<<<<<< HEAD
import React from 'react'; 
import './FaceRecognition.css'; 



const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>
		<div className='absolute mt2'>
			<img id='inputimage' alt='' src={imageUrl} width='auto' height='300px'/>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	);
}

=======
import React from 'react'; 
import './FaceRecognition.css'; 



const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>
		<div className='absolute mt2'>
			<img id='inputimage' alt='' src={imageUrl} width='auto' height='300px'/>
			<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	);
}

>>>>>>> bf809638a078d497fe8298c5e5ed0ef6a1204ca9
export default FaceRecognition;