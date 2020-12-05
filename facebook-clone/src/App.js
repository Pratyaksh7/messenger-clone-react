import './App.css';
import  React, {useState,useEffect} from 'react';
import {Button, FormControl,InputLabel, Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(()=>{
    db.collection('messages').orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => {
        return(
          { id:doc.id, message:doc.data() }
          ); 
      }));
    })
  },[])


  useEffect(() => {
    const name = prompt("Please enter your name");
    setUsername(name);
  }, [])

  const sendMessage = (e)=> {
    e.preventDefault();
    // all the logic to send a message
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([
    //   ...messages, {username:username, text:input}
    // ]);
    setInput('');
  }

  return (
    <div className="App"> 
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1> Facebook Messenger</h1>
      <h3>Welcome {username}</h3>
      <form className="app__form">
          <FormControl>
            <InputLabel >Enter a Message</InputLabel>
            <Input value={input} onChange={(e)=> setInput(e.target.value)}  />
            <Button variant="contained" color="primary" disabled={!input} type="submit" onClick={sendMessage} >Send Message</Button>
          </FormControl>
        
      </form>
        
        <FlipMove>
          {
           messages.map(({id, message})=>{
              return (
                <Message key={id} username={username} message={message} />
              );
           })
         }
        </FlipMove>
         
    </div>
  );
}

export default App;
