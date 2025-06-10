import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PersonalInfo } from './components/personal';
import ProfessionalInfo from './components/proffesional';

function App() {
  const [name, setName] = useState('Dean Dwiggins')
  const [job, setJob] = useState('Software Engineer');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [city, setCity] = useState('College Park, MD');
  const [email, setEmail] = useState('dean@example.com');
  const [summary, setSummary] = useState('');
  const [jobDatas, setJobDatas] = useState([]);

  const handleProfData = (data) => {
    console.log(data);
    setJobDatas(prev => [...prev, data]);
  };

  function RemoveEntry(indexToRemove) {
  setJobDatas(prev => prev.filter((_, index) => index !== indexToRemove));
  }



  return (
    <div className='Overall'>
      <div className= 'CvInputs'>
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
    <DropDown2
    title = "Summary"
    Component={<SummaryInfo summary={summary} setSummary={setSummary}/>}
    />
    <DropDown3
  title="Professional Experiences"
  jobDatas={jobDatas}
  RemoveEntry ={RemoveEntry}
  Component={<ProfessionalInfo onSubmitData={handleProfData}
   />}
/>

    </div>

    <ResumeMain
  firstName={name}
  job={job}
  phone={phone}
  city={city}
  email={email}
  summary={summary}
  jobDatas={jobDatas}
/>
   </div>
  )
}

function JobCv({jobDatas}) {

    if (!jobDatas || jobDatas.length === 0) {
    return <p>No job entries yet.</p>;
  }


  return (
    <div className='JobCv'>
      {jobDatas.map((job, index) => (
        <div key={index}>
          {Object.entries(job).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
//key not defined because it is outside map funciton need to find a way to remove everything, so assign everything to a key
function JobEntered({props, RemoveEntry, keyToRemove}){
  return (
    <div className='JobEntered'>
      {Object.entries(props).map(([key, value]) => (
        <p key={key}>
          {value}
        </p>
      ))}
      <button onClick={() => RemoveEntry(keyToRemove)}>Remove</button>
    </div>
  );
}

function DropDown3({title, Component, jobDatas, RemoveEntry}){
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);


  const toggle = () => {
    setIsVisible(prev => !prev);
    setIsVisible2(false);
  };

  function toggle2(){
   setIsVisible2(prev => !prev);
  }

  return(
    <div>
<div className="DropDownComponentTop">
    <h1>{title}</h1>
    <button onClick={toggle}>
        Show
        {isVisible ? 'Less' : 'More'}
      </button>
</div>
{isVisible && (
  <>
    {jobDatas.length !== 0 &&
      jobDatas.map((data, index) => (
        <JobEntered
          key={index}
          props={data}
          keyToRemove={index}
          RemoveEntry={RemoveEntry}
        />
      ))
    }

    <button onClick={toggle2}>Add New Item</button>
    {isVisible2 && Component}
  </>
)}


    

  


</div>
  );
}

function DropDown2({title, Component}){
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
{isVisible && Component}
</div>
  );
}



function SummaryInfo({summary,setSummary}){
  function handleSummaryChange(e) {
        setSummary(e.target.value);
    }

  return(  <textarea name="summary" id="summary" onChange={handleSummaryChange}>{summary}</textarea>
  );
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

function ResumeMain({firstName,job,phone,email,city,summary, jobDatas}){
  return(
    <div>
      <h1>{firstName}</h1>
      <h1>{job}</h1>
      <h1>{phone}</h1>
      <h1>{email}</h1>
      <h1>{city}</h1>
      <h1>Summary: {summary}</h1>
      <JobCv jobDatas={jobDatas}/>

    </div>
  );


}


export default App
