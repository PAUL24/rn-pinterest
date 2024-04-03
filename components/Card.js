import React from 'react';
import {View, StyleSheet, TouchableOpacity,Dimensions, Text, Image} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const Card = ({photo, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} >
        <View style={styles.container}>
            <Image source={photo.image} style={styles.image}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
       borderRadius: 8,
        // padding: 5,
        // width: 150,
        width: (deviceWidth-50)/2,
        height: 200,
        alignItems: 'center',
        marginBottom: 5,  
},
image: {
width: (deviceWidth-50)/2,
height: 180,
borderRadius: 8,
},
 name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },


})

export default Card;
