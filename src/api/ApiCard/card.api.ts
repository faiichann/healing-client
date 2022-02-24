import axios from 'axios';

export async function ApiGetCardData() {

    try {
        await axios.get('http://localhost:5000/results/1').then(async (response) => {
            const data = await response.data;
            return data;
          });
    } catch (error) {
        console.log(error);
        return error;
    }
}