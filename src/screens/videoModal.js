import React, {Component} from "react";
import {View, Text, ToucableOpacity} from "react-native";
import {connect} from "react-redux";
import {Video} from "expo";

import * as actions from "../actions";


import Modal from "../components/modal";


class VideoModal extends Component {

    constructor(){
        super();
        this.state = {

        }

    }

    render(){
        const {modal, uri} = this.props;

        if(!modal){
            return(
                <View></View>
            )
        }

        return(
            <Modal title="Video Preview" dismiss={this.props.closeVideo}>
                <View>
                    <Video
                        source={{ uri }}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        useNativeControls
                        style={{ width: "100%", height: 500 }}
                        />
                </View>
            </Modal>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    const {video} = state;
    return{
        ...video
    }
}

export default connect(mapStateToProps, actions)(VideoModal);