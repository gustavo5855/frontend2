import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div class="main-content" id="panel">
                {this.props.children}
            </div>
        )
    }
}
