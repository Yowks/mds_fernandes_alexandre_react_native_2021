import React from 'react';
import {View, Text, StyleSheet, CheckBox} from 'react-native';
import { Icon } from 'react-native-elements'
import firebase from 'firebase';


const SingleNoteSummaryComponent = (props) => {
    const loggedInUserId = firebase.auth().currentUser.uid
    const pathForData = `/users/${loggedInUserId}/`

    /*firebase.database()
        .ref(pathForData)
        .push({
            'date': new Date().toDateString(),
            'text': newNoteText,
            'done': false
        })
*/
        
    return (
        <View  backgroundColor='#FFF' style={styles.textViewStyle}>
            <CheckBox
                value={props.myNoteDone}
                onValueChange={
                    console.log(props)
                }
                style={styles.checkbox}
            />
            <Text style={styles.textProperties}> {props.myNoteText} </Text>
            <Icon 
                name='trash-alt'
                type='font-awesome-5'
                color='red'
                onPress={console.log(props.Key)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textProperties: {
        fontSize: 24
    },
    textViewStyle: {
        display: "flex",
        flexDirection:'row',
        height: 150,
        width: 320,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center"
    }
});


export default SingleNoteSummaryComponent;