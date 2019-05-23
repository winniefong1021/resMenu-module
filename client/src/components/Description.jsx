import React from 'react';
import styled from 'styled-components'

class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            { show: false }

        this.show = this.show.bind(this);
    }
    show() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        if (this.props.description === undefined) {
            return <div></div>
        }
        var description = this.props.description.split(' ')
        var toShow = description.slice(0, 50);
        if (this.state.show) {
            return (
                <div>
                    {description.join(' ')}
                    <div onClick={this.show}>
                        -show less
                    </div>
                </div>);
        } else {
            return (
                <div>{toShow.join(' ')}
                    <div onClick={this.show}>
                        +show more
                    </div>
                </div>);
        }

    }
}

export default Description;