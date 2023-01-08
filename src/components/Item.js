import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td className="medCol">{this.props.subtype}</td>
                            <td className="largeCol">{this.props.name}</td>
                            <td className="medCol">{this.props.origin}</td>
                            {(this.props.container !== undefined ? <td className="smallCol">{this.props.container}</td> : <td className="smallCol"></td>)}
                            {(this.props.volume !== undefined ? <td className="smallCol">{this.props.volume} ml</td> : <td className="smallCol"></td>)}
                            <td className="smallCol">${this.props.price}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
};

export default Item;



