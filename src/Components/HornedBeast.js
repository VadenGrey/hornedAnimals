import React from "react";

import '../Component-style/HornedBeast.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hearts: this.props.hearts,
        };
        this.state = {
            showModal: false,
        };
    };

    closeModal = () => {
        this.setState({showModal: false})
    };

    openModal = () => {
        this.setState({showModal: true})
    };

    handleClick = () => {
        this.setState({hearts: this.state.hearts + "♥"})
    };

    render() {
        return(
            <>
                <Card id={this.id} style={{display: "inline-block"}}>
                    <Card.Img  src={this.props.image_url} onClick={this.handleClick}/>
                    <Card.Body>
                        <Card.Text>Favorites:{this.state.hearts}</Card.Text>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Button variant="primary" onClick={this.openModal }>More Info</Button>
                    </Card.Body>
                </Card>
                <BeastModal closeModal={this.closeModal} showModal={this.state.showModal} description={this.props.description} title={this.props.title}/>
            </>
        )
    }
}

class BeastModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal}>
                <Modal.Header>
                <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.description}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.closeModal}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}




export default HornedBeast;