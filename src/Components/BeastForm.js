import React from 'react';
import Form from 'react-bootstrap/Form';


class BeastForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hornNum: this.props.hornNum,
        };
    };

    render() {
        return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="hornNum">
                        <Form.Label>Order by Horns</Form.Label>
                        <Form.Control as="select" onChange={e => {this.setState({hornNum: e.target.value})}}>
                            <option value='1'>All</option>
                            <option value='1'>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default BeastForm;