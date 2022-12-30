import React from 'react';
import Category from './Category';
import Item from './Item';

class Menu extends React.Component {
    
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                {this.props.categories.map(category => (
                    <>
                        <Category key={category.id} display={category.fields.Name} />
                        {this.props.items.map(item => (       
                            <>
                                {(item.fields.Category[0] === category.id) && (
                                    <Item
                                        key={item.id}
                                        subtype={item.fields.Subtype}
                                        name={item.fields.Name}
                                        origin={item.fields.Origin}
                                        volume={item.fields.Volume}
                                        price={item.fields.Price}
                                    />
                                )}
                            </>
                        ))}
                    </>
                ))}
                <p>{this.props.disclosure}</p>
            </>
        )
    }
};

export default Menu;