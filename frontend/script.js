const textArea = document.getElementById('text_to_summarize');
const submitButton = document.getElementById('submit_button');
const summarizedTextArea = document.getElementById('summary');

// e.target property gives us the HTML element that triggered the event
const verifyTextLength = (e) => {
  const textarea = e.target;
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

const submitData = async (e) => {
  //animation to the submit button
  submitButton.classList.add('submit_button--loading');
  const text_to_summarize = textArea.value;

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //   myHeaders.append(
  //     'Authorization',
  //     'Bearer PASTE YOUR HUGGING FACE ACCESS TOKEN IN CURRENT VALUE COLUMN ONLY'
  //   );

  const raw = JSON.stringify({
    text_to_summarize: text_to_summarize,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      'http://localhost:3000/summarize',
      requestOptions
    );
    const summary = await response.text();

    // Do something with the summary response from the back end API!

    // Update the output text area with new summary
    summarizedTextArea.value = summary;

    // Stop the spinning loading animation
    submitButton.classList.remove('submit_button--loading');
  } catch (error) {
    console.log(error.message);
  }
};

textArea.addEventListener('input', verifyTextLength);
submitButton.addEventListener('click', submitData);

submitButton.disabled = true;
