// Fetch response from openAI
const Fetcher = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_OPENAI_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  return { id: result.id, result: result.choices }
}

export default Fetcher
