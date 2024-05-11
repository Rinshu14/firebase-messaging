
import { useEffect } from "react";
import { messaging } from "./Firebase";
import { getToken } from "firebase/messaging";


function App() {


  const requestPermission=async ()=>{


   let permission=await Notification.requestPermission() 
      if (permission === 'granted') {
        console.log('Notification permission granted.');
let token=await getToken(messaging,{ vapidKey: 'BDWIsFnsPqWt3XnZ4rBx4lFFAj-iSuaG8V9bldTHe6BSoAt-NJnZiWGG9cklr4uzKQz2B4i79-OcnWnHmIC9O7g' })
console.log(token)
       
      }
        else if(permission === 'denied')
        {
          console.log('Notification permission granted.');
        }

  }

useEffect(()=>{
  requestPermission();
})

  return (
    <div className="App">
      <p>React App</p>
    </div>
  );
}

export default App;
