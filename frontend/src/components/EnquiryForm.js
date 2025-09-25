import React, {useState} from 'react';
import axios from 'axios';
export default function EnquiryForm(){
  const [form,setForm] = useState({name:'',email:'',phone:'',message:''});
  const [toast,setToast] = useState(null);
  const handleChange = e => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post('http://localhost:9090/api/enquiry', form);
      setToast({type:'success',text:'✅ Your enquiry has been sent successfully!'});
      setForm({name:'',email:'',message:''});
    }catch(err){
      setToast({type:'error',text:'❌ Failed to send enquiry. Please try again.'});
    }
    setTimeout(()=>setToast(null),3000);
  }
  return (
    <section id='contact' className='enquiry' style={{marginTop:28}}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Your name' value={form.name} onChange={handleChange} required />
        <input name='email' type='email' placeholder='Your email' value={form.email} onChange={handleChange} required />
        <input name='phone' type='tel' placeholder='Your phone number' value={form.phone} onChange={handleChange} pattern='[0-9+\- ]{7,15}' required />
        <textarea name='message' rows='5' placeholder='Message' value={form.message} onChange={handleChange} required />
        <button type='submit'>Send Enquiry</button>
      </form>
      {toast && <div className='toast'>{toast.text}</div>}
    </section>
  );
}
