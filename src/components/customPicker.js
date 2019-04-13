import React, {Component} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "../styles/customPicker";


export default class CustomPicker extends Component {

    constructor(){
        super();
        this.state = {
            expanded: false
        }
    }

    updateValue = (value) => {
        this.setState({expanded: false});
        this.props.onUpdate(value);
    }

    render(){
        const {items, value, title} = this.props;
        const nonSelectedItems = items.filter((i) => i.value != value);
        const selectedLabel = items.filter((i) => i.value == value)[0].label;
        return(
            <View style={styles.customPicker}>
                <TouchableOpacity onPress={() => this.setState({expanded: !this.state.expanded})} >
                    <View style={styles.selectedItem}>
                        <Text style={styles.customPickerTitle}>{title}</Text>
                        <View style={styles.selectedItemRight}>
                            <Text style={styles.selectedItemText}>{selectedLabel}</Text>
                            <Image source={this.state.expanded ? require("../../assets/images/upcarrot.png") : require("../../assets/images/downcarrot.png")} style={styles.customPickerCarrot}/>
                        </View>
                    </View>
                </TouchableOpacity>
                {   this.state.expanded &&
                    <View style={styles.nonSelectedItems}>
                        {   
                            nonSelectedItems.map(({label, value: itemValue}, i) => {
                                return(
                                    <TouchableOpacity key={i} onPress={() => this.updateValue(itemValue)}>
                                        <View style={styles.nonSelectedItem}>
                                            <Text style={styles.nonSelectedItemText}>{label}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                }
            </View>
        )
    }
}