import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

function Body() {
    return (
        <div>
            <button class="ui primary button">
                Save
            </button>
            <button class="ui button">
                Discard
            </button>
        </div>
    )
}

export default Body;