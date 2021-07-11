import { link } from 'fs';
import React from 'react';
import ReactDom from 'react-dom';
<<<<<<< HEAD
import 'semantic-ui-css/semantic.min.css';
import Gallery from './gallery';
=======
import 'semantic-ui-css/semantic.min.css'
import Body from './player';

>>>>>>> e83068c2cf36ab72314ef7146a79d71c6e4796bb
//our page


class App extends React.Component {

    render(props) {
        return (
            <div>
<<<<<<< HEAD
                <Gallery/>
=======
                <Body />
>>>>>>> e83068c2cf36ab72314ef7146a79d71c6e4796bb
            </div>
        )
    };
};


ReactDom.render(<App />, document.getElementById('root'));