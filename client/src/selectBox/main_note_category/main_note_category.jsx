import React from "react";
import "./main_note_category.css";
import img_filter from "../../public/icon/etc..px/filter icon.png"


class Main_note_category extends React.Component {
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
            <div className="main_note_category">
                <div className="main_note_category_container">
                    <div className="main_note_category_selected_item" onClick={this.dropDown}>
                        <div className='main_note_category_filter_text'>
                            {this.state.selectedItem.value}
                        </div>
                        <img
                            className='main_note_category_filter_img'
                            src={img_filter}
                        />
                    </div>
                    <div
                        style={{ display: this.state.showItems ? "block" : "none" }}
                        className={"main_note_category_items"}
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

export default Main_note_category;
