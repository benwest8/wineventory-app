import React from 'react';

class Category extends React.Component {

    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td className="medCol"></td>
                            <th className="largeCol">{this.props.display}</th>
                            <td className="medCol"></td>
                            <td className="smallCol"></td>
                            <td className="smallCol"></td>
                            <td className="smallCol"></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
};

export default Category;