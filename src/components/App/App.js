import {useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

const [notes, setNotes] = useState('');
const [address, setAddress] = useState('');
const [email, setEmail] = useState({email: '', notes:''});


const handleAddress = (event) => {
  // setAddress(event.target.value);
  setEmail({...email, email: event.target.value});
  console.log(address);
}//end of handleAddress

const handleNotes = (event) => {
  // setNotes(event.target.value);
  setEmail({...email, notes: event.target.value })
  console.log(notes);
}//end of handleNotes

const handleEmail = (event) => {
  event.preventDefault();
  console.log('clicked submit');
  console.log(email);

  axios({
    method: 'POST',
    url: '/api/category/',
    data: email
}).then((response) =>{
    console.log('response:', response);
}).catch (function (error){
    console.log('error on add:', error);
})
}

  return (
    <div>
      <h1>Email notification!</h1>
      <form className="form" onSubmit={handleEmail}>
        <input
        type="text"
        placeholder="email-address"
        onChange={handleAddress}
        />
        <textarea 
        type="text"
        placeholder="Notes"
        onChange={handleNotes}
        className="notes"
        />
        <button
        type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}

export default App;
