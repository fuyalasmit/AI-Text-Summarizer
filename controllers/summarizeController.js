import summarizeText from '../summzarize.js';

export const summarizeController = async (req, res) => {
  const text = req.body.text_to_summarize;

  try {
    const response = await summarizeText(text);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: 'An error occurred while summarizing the text.' });
  }
};
