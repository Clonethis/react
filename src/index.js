import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";

//showcased iteration
// const App = () => {
//     return (
//         window.navigator.geolocation.getCurrentPosition(
//             //this syntax is same as below 'erra'
//             // function position(pos) {
//             //     console.log(pos);
//             //     return pos.coords.latitude;
//             // },
//             position => console.log(position),
//             erra => console.log(erra)
//         )

//     )
// }
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: 40 };
        window.navigator.geolocation.getCurrentPosition(
            //(position) => console.log(position),
            position => {
                //this for updating this class's state
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }
    render() {
        return <div >
            Latitude: { this.state.lat } < /div>
    }
}
ReactDOM.render( < App / > , document.getElementById("root"));