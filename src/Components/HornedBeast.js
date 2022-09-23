import React from "react";
import '../Component-style/HornedBeast.css';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hearts: this.props.hearts,
        }
    }

    handleClick = () => {
        this.setState({hearts: this.state.hearts + "♥"})
    }

    render() {
        return(
            <>
                <Card id={this.id}>
                    <Card.Img  src={this.props.image_url} onClick={this.handleClick}/>
                    <Card.Body>
                        <Card.Text>{this.state.hearts}</Card.Text>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}




export default HornedBeast;