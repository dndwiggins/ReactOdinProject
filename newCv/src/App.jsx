import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalInfo } from './components/personal';

function App() {
  const [name, setName] = useState('Dean Dwiggins')
  const [job, setJob] = useState('Software Engineer');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [city, setCity] = useState('College Park, MD');
  const [email, setEmail] = useState('dean@example.com');


  return (
    <div className='Overall'>
      <BasicDropDown 
      title="Personal Information"
      name={name}
      setName={setName}
      job={job}
      setJob={setJob}
      phone={phone}
      setPhone={setPhone}
      city={city}
      setCity={setCity}
      email={email}
      setEmail={setEmail}
    />
    <ResumeMain
  firstName={name}
  job={job}
  phone={phone}
  city={city}
  email={email}
/>
   </div>
  )
}


function BasicDropDown({title,name,setName, job, setJob, email, setEmail, phone, setPhone, city, setCity}){
  
  const [isVisible, setIsVisible] = useState(false);



  const toggle = () => {
    setIsVisible(prev => !prev);
  };

  return(
    <div>
<div className="DropDownComponentTop">
    <h1>{title}</h1>
    <button onClick={toggle}>
        Show
        {isVisible ? 'Less' : 'More'}
      </button>
</div>
{isVisible && <PersonalInfo name = {name} setName = {setName} job = {job} setJob = {setJob} email = {email} setEmail = {setEmail} phone = {phone

} setPhone = {setPhone} city = {city} setCity = {setCity}></PersonalInfo>}
</div>
  );
}

function ResumeMain({firstName,job,phone,email,city}){
  return(
    <div>
      <h1>{firstName}</h1>
      <h1>{job}</h1>
      <h1>{phone}</h1>
      <h1>{email}</h1>
      <h1>{city}</h1>

    </div>
  );


}


export default App
