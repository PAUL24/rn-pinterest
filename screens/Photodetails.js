import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, Image, View} from 'react-native';
import photos from '../assets/photo';
import { PhotoContainer } from '../components';
import { Input } from '@rneui/themed';


const Photodetails = ({route}) => {
     const {photoId} = route.params;
    const [photo, setPhoto] = useState({});
    useEffect(() => {
    const fetchPhoto = async () => {
    try {
    const fondPhoto = photos.find((p) => p.id === photoId);
    if (fondPhoto) {
    setPhoto(fondPhoto);
}    
    } catch (error) {
         console.error('Error fetching product:', error);
    }
};
fetchPhoto();
}, [photoId] );
    return (
        <ScrollView >
             <Image source={photo.image } style={styles.image}   />
            <View style={styles.container}>
            <Text style={styles.name} >{photo.name}</Text>
            </View>
            <View style={styles.containercommentaire}>
            <Text>Author: {photo.author}  </Text>
            </View>
            <View style={styles.epingles}>
            <Text  style={styles.textepingles}>More to explore</Text>
            <PhotoContainer/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        // width: 150,
        // height: 50,
        // alignItems: 'center',
        marginBottom: 10,
        marginTop: 16,
        
    },
image: {
      width: '100%',
      height: 350,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
       
    },
    containercommentaire:{
        width: '100%',
        marginHorizontal: 20,
        // height: 150,
        // alignItems: 'center',
        marginBottom: 10,
},
    commentaire: {
        fontSize: 18,
        color: '#000',
        paddingBottom: 10,
        fontWeight: '500'

    },

inputcommentaire: {
width: 100,
borderColor: '#000',
},

    

epingles: {

//  alignItems: 'center',
// marginHorizontal: 20,
},
textepingles: {
fontSize: 18,
        color: '#000',
        marginHorizontal: 20,
        paddingBottom: 10,
        fontWeight: '500',
}
})

export default Photodetails;
