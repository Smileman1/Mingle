import React from "react";
import "./write_search_category.css";
import img_filter from "../../public/icon/etc..px/filter icon.png"


class write_search_category extends React.Component {
    state = {
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0]
    };

    dropDown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems
        }));
    };

    selectItem = item => {
        this.setState({
            selectedItem: item,
            showItems: false
        });
    };

    render() {
        return (
            <div className="write_search_category">
                <div className="write_search_category_container">
                    <div className="write_search_category_selected_item" onClick={this.dropDown}>
                        <div className='write_search_category_filter_text'>
                            {this.state.selectedItem.value}
                        </div>
                        <img
                            className='write_search_category_filter_img'
                            src={img_filter}
                        />
                    </div>
                    <div
                        style={{ display: this.state.showItems ? "block" : "none" }}
                        className={"write_search_category_items"}
                    >
                        {this.state.items.map(item => (
                            <div
                                key={item.id}
                                onClick={() => this.selectItem(item)}
                                className={this.state.selectedItem === item ? "selected" : ""}
                            >
                                {item.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default write_search_category;
