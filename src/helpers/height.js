import {Dimensions} from 'react-native';

const calculateTextHeight = ({text, fontSize}) => {
    const {width} = Dimensions.get('window');
    return Math.floor((text.length * 23)/(width-20)) * 23;
} 

export default calculateTextHeight;