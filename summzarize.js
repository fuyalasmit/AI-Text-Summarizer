import axios from 'axios';

const summarizeText = async (text) => {
  let data = JSON.stringify({
    inputs: text,
    parameters: {
      max_length: 100,
      min_length: 30,
    },
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.TOKEN 
    },
    data: data,
  };

  try {
    const response = await axios.request(config); //actual api call happening here
    return response.data[0].summary_text;
  } catch (error) {
    console.log(error);
  }
};

export default summarizeText;
