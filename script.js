const fetchApi = async () => {
  const id = document.getElementById("id");
  const advice = document.getElementById("advice");
  const button = document.querySelector("button");

  id.textContent = "ADVICE #?";
  advice.textContent = "Loading ...";
  button.disabled = true;

  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    id.textContent = `ADVICE #${data.slip.id}`;
    advice.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    advice.textContent = "Failed to fetch advice. Please try again.";
    console.error("Error fetching advice:", error);
  } finally {
    button.disabled = false;
  }
};

fetchApi();
