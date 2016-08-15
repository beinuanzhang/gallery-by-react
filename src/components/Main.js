require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDatasArr){
	for (var i=0, j=imageDatasArr.length; i<j; i++) {
		var singleImageDate = imageDatasArr[i];

		singleImageDate.imageURL = require('../images'+singleImageDate.fileName);

		imageDatasArr[i] = singleImageDate;
	}
	return imageDatasArr;
})(imageDatas);

var App = React.createClass({
	render: function(){
		return (
			<section className="stage">
				<section className="image-sec">
				</section>
				<nav className="controller-nav">
				</nav>
			</section>
		);
	}
});


// class AppComponent extends React.Component {
//   render() {
//     return (
//       <div className="index">
//         <img src={yeomanImage} alt="Yeoman Generator" />
//         <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
//       </div>
//     );
//   }
// }

// AppComponent.defaultProps = {
// };

// export default AppComponent;