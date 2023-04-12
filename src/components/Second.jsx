import React, { useState } from 'react'


const Second = () => {
    let myName = "Oluwapelumi"
    let mySchool = "SQI"
    let number = 9
    
    const [first, setfirst] = useState(0)

   
    const increment = () => {
        setfirst(first + 1)
        console.log(first);
    }
    const decrement = () => {
        setfirst(first - 1)
        console.log(first);
    }
    const restart = () => {
        setfirst(0)
        console.log(first);
    }
    
    let allStudents = [
        { name: "Pelumi", school: "SQI College" },
        { name: "Esther", school: "ChristCo" },
        { name: "Damilola", school: "Obafemi" },
    ]

    return (
        <>
            {number == 9 ? <div>even number</div> : <div>Odd number</div>}
            <button onClick={increment} className='btn btn-warning mx-2'>Increase</button>
            <button onClick={decrement} className='btn btn-danger'>Decrease</button>
            <button onClick={restart} className='btn btn-success mx-2'>Restart</button>
            <div>{first}</div>

        
            <table className="table table-striped table-dark table-bordered">
                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>NAME</td>
                        <td>SCHOOL</td>
                    </tr>
                </thead>

                {
                    allStudents.map((item,index) => (
                        <>
                            <tbody>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.school}</td>
                                </tr>
                            </tbody>
                        </>
                    ))
                }
            </table>
        </>
    )
}


export default Second; 
