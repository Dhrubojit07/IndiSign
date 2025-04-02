// modelStorage.js

// Save the model data to LocalStorage
function saveModelData(knn) {
  const modelData = {
    classExamples: knn.getClassExampleCount(),
    classLogitsMatrices: knn.classLogitsMatrices,
    numClasses: knn.numClasses,
  };
  localStorage.setItem('modelData', JSON.stringify(modelData));
}

// Load the model data from LocalStorage
function loadModelData(knn) {
  const savedData = JSON.parse(localStorage.getItem('modelData'));
  if (savedData) {
    knn.numClasses = savedData.numClasses;
    knn.classLogitsMatrices = savedData.classLogitsMatrices;
    knn.classExampleCount = savedData.classExamples;
  }
}

// Save gesture names to LocalStorage
function saveGestureNames(words) {
  localStorage.setItem('gestureNames', JSON.stringify(words));
}

// Load gesture names from LocalStorage
function loadGestureNames() {
  const savedWords = JSON.parse(localStorage.getItem('gestureNames'));
  if (savedWords) {
    return savedWords;
  }
  return ["start", "stop"]; // Default gestures
}

// Clear all saved data
function clearModelData() {
  localStorage.removeItem('modelData');
  localStorage.removeItem('gestureNames');
}

// Export the functions
module.exports = {
  saveModelData,
  loadModelData,
  saveGestureNames,
  loadGestureNames,
  clearModelData,
};