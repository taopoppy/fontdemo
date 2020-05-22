// import React from 'react';
// import ReactDOM from 'react-dom';

// // 组件
// class App extends React.Component {
// 	constructor(props){
// 		super(props)
// 		this.state ={
// 			time:''
// 		}
// 	}
// 	componentDidMount() {
// 		setInterval(() => {
// 			this.setState({
// 				time: new Date().toLocaleTimeString()
// 			})
// 		}, 1000);
// 	}
//   render() {
//     return (
//       <div>
//        {this.state.time}
//       </div>
//     );
//   }
// }

// // 渲染并挂载
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );










import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
 );

