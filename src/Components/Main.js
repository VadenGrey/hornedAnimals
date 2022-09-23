import React from "react";
import HornedBeast from './HornedBeast.js';
import {arr} from './data.js';


class Main extends React.Component {
    render() {
        return(
            <>
                <h1>Click an image to favorite it!</h1>
                {arr.map(x => {
                    return(
                        <HornedBeast key={x._id} image_url={x.image_url} title={x.title} description={x.description} />
                    )
                })}
            </>
        )
    }
}




export default Main;