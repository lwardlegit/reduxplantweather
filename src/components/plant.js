import React, {Component,PropTypes} from 'react';


export default class Plant extends Component {
    state={
        leaves: false,
        tall: true,
        fall: false,
        spring: true,
        rooted: false,
    }

    componentDidMount(){
        console.log("tree is mounted")
    }
    render() {
        return (
            <div>
                <h2>the plant</h2>
            </div>
        )
    }
}
