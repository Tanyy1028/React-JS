import React, { useState } from 'react'
import "./Form.css";
import ListView from '../ListView/ListView';

export default function Form() {
    const date = new Date();

    const [formList, setformList] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        gender: "Male",
        age: "",
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        doctor: "Dr. Patil",
        problem: ""
    });

    const handleInputForm = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...formData,
            [name]: value.trim()
        };
        setFormData(newData);
    }

    const submitForm = (e) => {
        e.preventDefault();

        console.log(formData);

        if (formData.name != "" && formData.age != "" && formData.problem != "" && formData.phone != "") {
            console.log(formData);
            let arr = [...formList];
            arr.push(formData);
            setformList(arr);
        } else {
            alert("all field are required  !!");
        }
    }




    return (
        <div className='main'>
            <div className='form-box'>
                <h2>Book Your Appointment</h2>
                <form action="" className='form' onSubmit={submitForm}>

                    <label htmlFor="name">Full Name</label>
                    <input onChange={handleInputForm} type="text" name='name' className='form-control' />

                    <label htmlFor="phone">Contact No.</label>
                    <input onChange={handleInputForm} type="phone" name='phone' className='form-control'/>

                    <label htmlFor="gender">Gender</label>
                    <div className='gender'>
                        <div>
                            <input onChange={handleInputForm} type="radio" name='gender' value={"Male"}/>
                            <label >Male</label>
                        </div>
                        <div>
                            <input onChange={handleInputForm} type="radio" name='gender' value={"Female"} />
                            <label >Female</label>
                        </div>
                    </div>


                    <label htmlFor="age">Age</label>
                    <input onChange={handleInputForm} type="number" name='age' placeholder='Age' className='form-control'/>

                    <label htmlFor="date">Appointment Date</label>
                    <input onChange={handleInputForm} type="date" name='date' className='form-control'/>


                    <label htmlFor="doctor">Select Doctor</label>
                    <select onChange={handleInputForm} name="doctor" id="">
                        <option value="Dr. Magenta">Dr. A.V patel</option>
                        <option value="Dr. Orange">Dr. Dhamaniya</option>
                        <option value="Dr. Blue">Dr. Patil</option>
                        <option value="Dr. Red">Dr. Shaha</option>
                    </select>

                    <label htmlFor="problem">Share your problem..</label>
                    <textarea onChange={handleInputForm} name="problem" id="" className='form-control'></textarea>

                    <button type='submit' className='btn btn-primary'>Book Appointment</button>
                </form>
            </div>

            <div className="detail-box">
                <ListView formList={formList} />
            </div>

            {/* <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
 
        </div>
    )
};
