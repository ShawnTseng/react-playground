import React, { PureComponent } from 'react';

// Class Component
// class ProgressBar extends Component {
//     render() {
//         const { value } = this.props;
//         return (
//             <div className="bar-outer">
//                 <div className="bar-inner" style={{ width: `${value}%` }}>
//                 </div>
//                 <span>{value}%</span>
//             </div>
//         );
//     }
// }

// (Stateless) Functional Component
// const ProgressBar = props => {
//     const { value } = props;
//     return (
//         <div className="bar-outer">
//             <div className="bar-inner" style={{ width: `${value}%` }}>
//             </div>
//             <span>{value}%</span>
//         </div>
//     );
// }

// Pure Component(shallow compare)
class ProgressBar extends PureComponent {
    render() {
        const { value } = this.props;
        return (
            <div className="bar-outer">
                <div className="bar-inner" style={{ width: `${value}%` }}>
                    <span>{value}%</span>
                </div>
            </div>
        );
    }
}


export default ProgressBar;