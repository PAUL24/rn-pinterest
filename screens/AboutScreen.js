import React from 'react';
import {View, StyleSheet, Text, SectionList} from 'react-native';
const gif = require('../assets/giphy.gif');
import * as RNElements from '@rneui/base'


const AboutScreen = () => {
    const infos = [
        {
            title: 'Pinterest',
            data:["Pinterest Inc"],
        },
    ];
    return (
        <View style={styles.container} >
           <RNElements.Avatar
            size="xlarge"
            rounded
            source={gif}
            margin={32}
          /> 
        <SectionList
            sections={infos}
         keyExtractor={(item, index) => item + index }
            renderItem={({ item }) => (
                        <View>
                            <Text style={styles.sectionListTitle}>
                                {item}
                            </Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionListHeader}  >{title}</Text>
                    )}
                    style={styles.sectionList}
        />

        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
sectionList: {
width: '100%',
flex: 1,
textAlign: 'center',
}
, 
sectionListTitle: {
fontSize: 22,
textAlign: 'center',
color: '#333',
}, 
 sectionListHeader: {
        fontSize: 22,
        fontWeight: "700",
        backgroundColor: '#fff',
        padding: 10,
        textAlign:"center",
    },
    item: {
        paddingHorizontal: 15,
        marginVertical:10,
    },
  
})

export default AboutScreen;
