import {Dimensions} from 'react-native';

const calculateTextHeight = ({text, fontSize}) => {
    const {width} = Dimensions.get('window');
    return Math.floor((text.length * (fontSize - (6.5/30) * fontSize)/(width-20))) * (fontSize - (6.5/30)*fontSize);
} 

export default calculateTextHeight;