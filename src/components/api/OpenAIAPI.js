export async function callAPI(prompt, options) {
  try {
    const response = await fetch(`/api/ai-content`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: options.temperature,
        max_tokens: options.max_tokens,
        top_p: options.top_p,
        frequency_penalty: options.frequency_penalty,
        presence_penalty: options.presence_penalty,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.output.choices[0].text;
  } catch (error) {
    // console.error("Error:", error.message);
    return {
      error: true,
      message:
        "Sorry, there was an error with your request. Please make sure your API Key is valid and try again later. If the issue persists, please try again later.",
    };
  }
}
