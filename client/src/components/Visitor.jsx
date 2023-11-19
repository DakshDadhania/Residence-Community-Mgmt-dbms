import React, { useState } from 'react';
import axios from 'axios';

function Visitor() {
    const [visitorName, setVisitorName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [blockNumber, setBlockNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/registerVisitor', {
                visitorName,
                phoneNumber,
                roomNumber,
                blockNumber
            });
            if (response.status === 200) {
                alert('Visitor registered successfully');
            } else {
                // Handle non-200 responses
                alert(`Failed to register: ${response.status}`);
            }
        } catch (error) {
            // Handle network or severe server errors
            console.error('Error submitting form', error);
            alert(`Error registering visitor: ${error.message}`);
        }
    };
    

    return (
        <div>
            <h2>Visitor Registration</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="Visitor Name"
                    required
                />
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    required
                />
                <input
                    type="number"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    placeholder="Room Number"
                    required
                />
                <input
                    type="number"
                    value={blockNumber}
                    onChange={(e) => setBlockNumber(e.target.value)}
                    placeholder="Block Number"
                    required
                />
                <button type="submit">Register Visit</button>
            </form>
        </div>
    );
}

export default Visitor;
