import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
const App = ()=>{
    render();{
        return <div></div>;
    }
    return(
        window.navigator.geolocation.getCurrentPosition(
        //this syntax is same as below 'erra'
            function position(pos){
                console.log(pos);    
                return pos.coords();
            },
            erra => console.log(erra)
        )
        
    )
}

class ShowUp extends React.Component{
    render() {
        return(
                <div>
                    
                </div>
            );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));

