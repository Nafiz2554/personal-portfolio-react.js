 import "./contact.scss";
 import { useState } from "react";
 
 export default function Contact() {

    const[messege,setMessege]=useState(false)
     const handleSubmit =(e)=>{
         e.preventDefault();
         setMessege(true)

     }
     return (
         <div className="contact" id="contact">
             <div className="left">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Handshake_logo.svg/1200px-Handshake_logo.svg.png" alt="" />
             </div>
             <div className="right">
                 <h2>Contact.</h2>
                 <form onSubmit={handleSubmit}>
                     <input type="text" placeholder="Email" />
                     <textarea placeholder="Messege"></textarea>
                     <button type="submit">Send</button>
                     {messege && <span>Thanks. I'll reply ASAP :)</span>}
                 </form>
             </div>
             
         </div>
     )
 }
 