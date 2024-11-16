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
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                }
            }
        );
        console.log(response.data); console.log('Auth Token:', authToken);

        console.log(response.data.headers.Authorization);

        return response.data;

    } catch (error) {
        console.error('Error shortening URL:', error.response?.data || error.message);
        throw error;
    }
};