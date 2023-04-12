import axios from 'axios'
import React, {useState} from 'react'

const Fetch = () => {
    const endpoint = "https://jsonplaceholder.typicode.com/users";
    const endpoint2 = "https://api.github.com/users";
    const [response, setresponse] = useState([])

    const getData = () => {
        axios.get(endpoint)
            .then((result) => {
                console.log(result.data);
                setresponse(result.data)
            })
            .catch((err) => {
                console.log(err);
            })
        
    }
    return (
        <>
            <h1>Fetch API</h1>
            <button onClick={getData}>Get info</button>

            <table className='table table-striped table-danger mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                
                {
                    response.map((item, index) => (
                        <>
                            <tbody key={index}>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.name}U</td>
                                    <td>{item.email}</td>
                                </tr>
                            </tbody>
                        </>
                    ))
                }
            </table>
        </>
    )
}


export default Fetch; 