import React, { useState, useEffect } from 'react';
import  {Text, FlatList, View, StyleSheet, TextInput, Button}  from 'react-native';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import CreateNoteComponent from './CreateNoteComponent';
import firebase from 'firebase'
import _ from 'lodash'

const NotesScreenComponent = () => {

    const [data, setData] = useState([]);

    // /users/{id}/ 

    const loggedInUserId = firebase.auth().currentUser.uid
    
    useEffect(() => {firebase.database()
        .ref(`/users/${loggedInUserId}/`)
        .on('value', (completeNewData) => {
            console.log(completeNewData)

            const newDataList = _.map(completeNewData.val(), (value, key) => {
                console.log("Value", value)
                console.log("Key", key)
                return {...value}
            })

            console.log(newDataList)
            setData(newDataList.reverse())
        }
    )}, [])






    const addNewNote = (text) => {
        if(text.length > 0){
            setData([{"text": text, "date": new Date(),"done":false}, ...data])
        }
        
    }


    return <View style={styles.viewProperties}>

        <Button 
            title={"Log Out"}
            onPress={() => firebase.auth().signOut()}
        />


        <CreateNoteComponent onCreateButtonPress={
            (text) => addNewNote(text) 
        }/>
        
        <FlatList 
            showsVerticalScrollIndicator={false}
            style={styles.listProperties}
            data={data}
            keyExtractor={(item, index) => {
                    return index.toString()
                }
            }
            numColumns={1}
            renderItem={({item}) => {
                // console.log(index, item)
                return <SingleNoteSummaryComponent myNoteDate={item.date} myNoteText={item.text} myNoteDone={item.done}/>
            }
            
        }   
        />
    </View>

}


const styles = StyleSheet.create({
    viewProperties : {
        marginTop: 50
    },
    textProperties: {
        fontSize: 24
    },
    textViewStyle: {
        flex:1,
        flexDirection:'row',
        margin: 10,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    }
});


export default NotesScreenComponent;





