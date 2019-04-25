import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Platform, Dimensions} from 'react-native';
import {TriangleColorPicker, fromHsv} from 'react-native-color-picker';

const styles =  StyleSheet.create({
    customColorPicker: {
        flexDirection: "row",
        justifyContent: "flex-start",
        zIndex: 2
    },
    textInput: {
        height: 50,
        fontSize: 30,
        margin: 0,
        width: 200,
        borderWidth: 2,
        borderColor: "black",
        paddingLeft: 2,
        borderLeftWidth: 0
    },
    preview: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: "black"
    },
    pickerButton: {
        width: 50,
        height: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        borderWidth: 2
    },
    pickerButtonText: {
        color: "#ECECEC",
        fontSize: 30,
        textAlign: "center"
    },
    pickerView: {
        position: "absolute",
        width: "100%",
        left: 0,
        top: 50,
        flexDirection: "column",
        backgroundColor: "white",
        zIndex: 99999999999,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: "black",
        padding: 10
    },
    pickerViewHeader: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    pickerViewBottom: {
        paddingTop: 100,
        width: "100%",
        paddingBottom: 20
    },
    pickerViewHeaderButtonText: {
        color: "black",
        fontSize: 30
    },
    pickerViewCarot: {
        transform: [{rotate: "45deg"}],
        borderTopWidth: 10,
        borderLeftWidth: 10,
        borderColor: "black",
        position: "absolute",
        zIndex: 99999999999,
        width: 50,
        height: 50,
        left: 40,
        top: -33,
        backgroundColor: "white"
    },
    backgroundView: {
        width: "100%",
        height: 4000,
        left: 0,
        top: -2000,
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 5,
        position: "absolute"
    }
});


export default class CustomColorPicker extends Component {

    constructor(){
        super();
        this.state = {
            color: "",
            visible: false
        }
    }

    componentDidMount(){
        this.setState({
            color: this.props.color
        });
    }

    onUpdate = (t) => {
        this.setState({
            color: t
        });
    }

    onEndEditing = () => {
        const {color} = this.state;
        if(color[0] == "#" && color.length == 7 && color.slice(1).match(/(^[_A-z0-9]*((-|\s)*[_A-z0-9])*$)/) && color.slice(1).indexOf(" ") == -1){
            this.props.setColor(color);
        }else{
            this.setState({
                color: this.props.color
            });
        }
    }

    submitModal = () => {
        this.onEndEditing();
        this.closeModal();
    }

    cancelModal = () => {
        this.setState({
            color: this.props.color
        });
        this.closeModal();
    }

    closeModal = () => {
        this.setState({
            visible: false
        });
        this.props.onClose();
    }

    openModal = () => {
        this.setState({
            visible: true
        });
        this.props.onOpen();
    }


    render(){
        const {color, onTop} = this.props;



        if(Platform.OS === "ios"){
            return(
                <View style={{zIndex: !onTop ? 9999999999999999999999 : 99999999999999999999999999999999999999}}>
                {   this.state.visible &&
                    <TouchableWithoutFeedback onPressIn={() => this.props.onClose()}>
                        <View style={styles.backgroundView}>

                        </View>
                    </TouchableWithoutFeedback>
                }
                {   this.state.visible && Platform.OS === "ios" &&
                    <TouchableWithoutFeedback onPressIn={() => this.props.onOpen()}>
                        <View style={[styles.pickerView, {zIndex: !onTop ? 99999999999999999 : 99999999999999999999999999999999999999}]}>
                            <View style={styles.pickerViewCarot}></View>
                            <View style={styles.pickerViewHeader}>
                                <TouchableOpacity onPress={() => this.cancelModal()}>
                                    <Text style={styles.pickerViewHeaderButtonText}>{'< Back'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.submitModal}>
                                    <Text style={styles.pickerViewHeaderButtonText}>
                                        Done
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.pickerViewBottom}>
                                <TriangleColorPicker
                                    onColorChange={c => this.setState({color: fromHsv(c)})}
                                    defaultColor={color}
                                    style={{width: "100%", height: 300}}
                                    onTouch={() => this.props.onOpen()}
                                    onLeave={() => console.log("Retrieved")}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                }
                <View style={styles.customColorPicker}>
                    <View style={[styles.preview, {backgroundColor: color}]}></View>
                    <TextInput value={this.state.color} style={[styles.textInput, Dimensions.get('window').width < 400 && {width: 130}]} onEndEditing={this.onEndEditing} onChangeText={(t) => this.onUpdate(t)}/>
                    <TouchableOpacity onPress={this.openModal}>
                        <View style={styles.pickerButton}>
                            <Text style={styles.pickerButtonText}>?</Text>
                        </View>
                    </TouchableOpacity>
                </View> 
            </View>
            );
        }else{
            return(
                <View style={{zIndex: !onTop ? 9999999999999999999999 : 99999999999999999999999999999999999999}}>
                    {   this.state.visible &&
                        <View style={[styles.pickerView, {zIndex: !onTop ? 999999999 : 99999999999999999999999999999999999999}]}>
                            <View style={styles.pickerViewCarot}></View>
                            <View style={styles.pickerViewHeader}>
                                <TouchableOpacity onPress={this.cancelModal}>
                                    <Text style={styles.pickerViewHeaderButtonText}>{'< Back'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.submitModal}>
                                    <Text style={styles.pickerViewHeaderButtonText}>
                                        Done
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.pickerViewBottom}>
                                <TriangleColorPicker
                                    onColorChange={c => this.setState({color: fromHsv(c)})}
                                    defaultColor={color}
                                    style={{width: "100%", height: 300}}
                                    onTouch={() => console.log("Touched")}
                                    onLeave={() => console.log("Retrieved")}
                                />
                            </View>
                        </View>
                    }
                    <View style={styles.customColorPicker}>
                        <View style={[styles.preview, {backgroundColor: color}]}></View>
                        <TextInput value={this.state.color} style={[styles.textInput, Dimensions.get('window').width < 400 && {width: 130}]} onEndEditing={this.onEndEditing} onChangeText={(t) => this.onUpdate(t)}/>
                        <TouchableOpacity onPress={this.openModal}>
                            <View style={styles.pickerButton}>
                                <Text style={styles.pickerButtonText}>?</Text>
                            </View>
                        </TouchableOpacity>
                    </View> 
                </View>
            );
        }

        
    }
}