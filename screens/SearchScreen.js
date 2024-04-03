import React, {useState} from 'react';
import {View, StyleSheet, ImageBackground, ScrollView, Text} from 'react-native';
import { Input } from '@rneui/themed';
import photos from '../assets/photo';
const searchphoto = require('../assets/search.jpg');
import { PhotoContainerSearch } from '../components';

const SearchScreen = () => {
 const [search, setSearch] = useState('');
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  // Cette fonction permet lancer deux fonctions setSearch (qui va mettre à jour  l'etat de search ) et 
  const handleChange = (text) => {
    setSearch(text);
    filterPhotos(text);
  };
// Cette fonction permet de filtrer la liste des photos grâce la methode filter()
  const filterPhotos = (text) => {
    const filtered = photos.filter((photo) => {
      // cela va fitrer les nom des photos qui va permet quand l'utilisateur entrée est dans la recherche ça va transformer en miniscule
      return photo.name.toLowerCase().includes(text.toLowerCase());
    });
    //Met à jour l'état filteredPhotos avec le tableau filtré. Cela permet de stocker les photos filtrées dans l'état.
    setFilteredPhotos(filtered);
  };

    return (
        <View style={styles.container}>
             <Input placeholder='Search'  
            style={styles.input} 
            keyboardType='text'
            rightIcon={{
            type:'fondation',
            name: 'search'
            }}
            onChangeText={handleChange}
            value={search}
            />
           {
            search.length === 0 && (
              <ImageBackground source={searchphoto} style={styles.image}>
            <Text style={styles.texttitle}>Pinterest</Text>
           </ImageBackground>
            )
           }

          
            <ScrollView style={styles.container2}>
            <PhotoContainerSearch photos={filteredPhotos} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 56,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
input: {
flex: 1,
paddingBottom: 10,
},

image: {
width: '100%',
height: '100%',
resizeMode: 'cover',
borderRadius: 32,
flex: 1,
justifyContent: 'center',
 alignItems: 'center',
},
texttitle: {
fontSize: 26,
color: 'white',
}
})

export default SearchScreen;
