import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';
import * as firebase from '@react-native-firebase/app';

export default function Example() {
  const [messages, setMessages] = useState([]);

const firebaseConfig = {
        apiKey: "AIzaSyDdoTUgbhYASb-H9UwhCDvKJFicG0Ro6fE",
        authDomain: "mobarak-1f96e.firebaseapp.com",
        projectId: "mobarak-1f96e",
        storageBucket: "mobarak-1f96e.appspot.com",
        messagingSenderId: "131501421482",
        appId: "1:131501421482:web:c724065dc04e9df2c371d3",
        measurementId: "G-WBTKCKJBMZ"
      };
    
      
    //   console.log(reference);
      
    //   console.log(new Date());
      useEffect(() => {
      const reference = database().ref('Chats/1')
                                  .once('value')
                                  .then(snapshot => {
                                      console.log('User data: ', snapshot.val());
                                  });
    
                                  console.log(new Date()); 
                                  
                                  if(reference){
                                    setMessages(reference);
                                  }
    // setMessages(reference)
    // console.log(messages);
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 2,
      }}
    />
  )
}