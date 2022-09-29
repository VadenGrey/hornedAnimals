import React from "react";
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast.js';
import {arr} from './data.js';
import { Container } from 'react-bootstrap';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hornNum: this.props.hornNum,
        };
    };

    render() {
        return(
            <>
                <h1>Click an image to favorite it!</h1>
                <Container>
                    <>
                        <Form>
                            <Form.Group className="mb-3" controlId="hornNum">
                                <Form.Label>Order by Horns</Form.Label>
                                <Form.Control as="select" onChange={e => {this.setState({hornNum: Number(e.target.value)})}}>
                                    <option value='1'>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="100">100</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </>
                </Container>
                <Container>
                    {arr.filter(x => {
                        return x.horns === this.state.hornNum;
                        }).map(x => {
                        return <HornedBeast key={x._id} image_url={x.image_url} title={x.title} description={x.description} horns={x.horns} />
                    })}
                </Container>
            </>
        )
    }
}



export default Main;