import React, {Component} from "react";
import {View, Text, TouchableOpacity, CameraRoll} from "react-native";
import {connect} from "react-redux";
import {Video} from "expo";

import * as actions from "../actions";


import Modal from "../components/modal";
import styles from "../styles";

const VideoModalButton = (props) => {
    const {content, onPress} = props;
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {content}
                </Text>
            </View>
        </TouchableOpacity>
    );
}


class VideoModal extends Component {

    constructor(){
        super();
        this.state = {

        }

    }

    saveVideo = async () => {
        const video = await CameraRoll.saveToCameraRoll(this.props.uri, "video");
        alert("Successfully Saved Video To Photos!");
        this.props.closeVideo();
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
                        useNativeControls
                        style={{ width: "100%", height: 500 }}
                        />
                </View>
                <VideoModalButton onPress={this.saveVideo} content="Save To Photos"/>
                <VideoModalButton onPress={this.props.closeVideo} content="Discard" />

            </Modal>
        )
    }
}

function mapStateToProps(state){
    const {video} = state;
    return{
        ...video
    }
}

export default connect(mapStateToProps, actions)(VideoModal);