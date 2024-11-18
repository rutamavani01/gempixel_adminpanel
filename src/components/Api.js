import axios from 'axios';

// login
export const loginUser = async (username, password) => {
    try {
        const response = await axios.post('http://192.168.1.9:8000/login', {
            username,
            password,
        });

        if (response.status === 200) {
            localStorage.setItem('authToken', response.data.Token);
            return { success: true, data: response.data.Token };
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return { success: false, error: error.message };
    }
};

// url shorten view
export const fetchQRCodeData = async (authToken, urls, option) => {
    try {
        const response = await fetch('http://192.168.1.9:8000/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                urls: urls,
                options: option,
            }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching QR code data:', error);
        throw error;
    }
};




// navbar url shorten

export const shortenUrl = async (data, authToken) => {
    try {
        const response = await axios.post(
            'http://192.168.1.9:8000/dashboard',
            data, // Send the payload
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`, // Include the auth token
                },
            }
        );

        console.log(response.data); // Log response data
        console.log('Auth Token:', authToken); // Log the auth token

        return response.data; // Return the response data
    } catch (error) {
        console.error(
            'Error shortening URL:',
            error.response?.data || error.message // Log detailed error info
        );
        throw error; // Rethrow the error for further handling
    }
};

// url view
export const fetchDashboardData = async (authToken) => {
    try {
        const response = await axios.get('http://192.168.1.9:8000/dashboard', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`, // Pass the auth token
            },
        });

        console.log('Dashboard Data:', response.data);
        return response.data; // Return fetched data
    } catch (error) {
        console.error('Error fetching dashboard data:', error.response?.data || error.message);
        throw error;
    }
};

// qrcode add
 