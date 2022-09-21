import React from "react";
import './HornedBeast.css'

class HornedBeast extends React.Component {
    render() {
        return(
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.src}
                    alt={this.props.alt}
                />
                <p>{this.props.desc}</p>
            </>
        )
    }
}




export default HornedBeast;