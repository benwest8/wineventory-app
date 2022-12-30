import React from 'react';

class Category extends React.Component {

    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><h2>{this.props.display}</h2></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
};

export default Category;