
import React from "react";
import{
    TextInput,
    TouchableOpacityProps,
    View,
    Image,
    Text
} from 'react-native'
import Emailimg from '../../assets/carbon_email.png'

import { styles } from "./styles";


export default function ButtonIcon(){
    return(
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
            <Text style={styles.imageText}>Email</Text>
                <Image source={Emailimg} style={styles.icon} />
            </View>
            <TextInput 
            style={styles.title}>
            </TextInput>
        </View>
    )
}