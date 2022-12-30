import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <>
                    <table>
                        <tbody>
                            <tr>
                                <td>{this.props.subtype}</td>
                                <td>{this.props.name}</td>
                                <td>{this.props.origin}</td>
                                <td>{this.props.volume} ml</td>
                                <td>${this.props.price}</td>
                            </tr>
                        </tbody>
                    </table>
            </>
        )
    }
};

export default Item;



