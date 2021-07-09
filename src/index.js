import { link } from 'fs';
import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Gallery from './gallery';
//our page


class App extends React.Component {

    render(props) {
        return (
            <div>
                <Gallery/>
            </div>
        )
    };
};


ReactDom.render(<App />, document.getElementById('root'));