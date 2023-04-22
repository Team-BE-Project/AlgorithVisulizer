let currentStep;
let steps;
const visualization = document.getElementById("visualization");

function parsePseudocode(pseudocode) {
  try {
    // Split the pseudocode into lines
    const lines = pseudocode.trim().split("\n");

    // Remove any leading or trailing whitespace from each line
    const trimmedLines = lines.map((line) => line.trim());

    // Filter out any empty lines
    const nonEmptyLines = trimmedLines.filter((line) => line !== "");

    // Map each non-empty line to a step object with a "text" property
    const steps = nonEmptyLines.map((text) => ({ text }));

    // Return the array of step objects
    return steps;
  } catch (error) {
    console.error("Error parsing pseudocode:", error);
    return [];
  }
}

function createVisualization(step) {
  visualization.textContent = step.text;
}

function updateVisualization(step) {
  visualization.textContent = step.text;
}

function prevStep() {
  currentStep--;
  updateVisualization(steps[currentStep]);
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = false;
  if (currentStep === 0) {
    const prevButton = document.getElementById("prev-button");
    prevButton.disabled = true;
  }
}

function nextStep() {
  currentStep++;
  updateVisualization(steps[currentStep]);
  const prevButton = document.getElementById("prev-button");
  prevButton.disabled = false;
  if (currentStep === steps.length - 1) {
    const nextButton = document.getElementById("next-button");
    nextButton.disabled = true;
  }
}

function startAnimation() {
  const pseudocode = document.getElementById("pseudocode-input").value;
  steps = parsePseudocode(pseudocode);
  if (steps.length > 0) {
    currentStep = 0;
    createVisualization(steps[currentStep]);
    const prevButton = document.getElementById("prev-button");
    prevButton.disabled = true;
    const nextButton = document.getElementById("next-button");
    nextButton.disabled = false;
  }
}
