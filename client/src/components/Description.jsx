import React from 'react';
import styled from 'styled-components'

const RedDesc = styled.p`
    color:red;
`
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
                <p>
                    {description.join(' ')}
                    <RedDesc onClick={this.show}>
                        -show less
                    </RedDesc>
                </p>);
        } else {
            return (
                <p>{toShow.join(' ')}
                    <RedDesc onClick={this.show}>
                        +show more
                    </RedDesc>
                </p>);
        }

    }
}

export default Description;