const URL = "https://teachablemachine.withgoogle.com/models/iy_RlrxKc/";
let model, labelContainer, maxPredictions;

const imageUploadInput = document.getElementById('image-upload-input');
const imagePreview = document.getElementById('image-preview');
const loadingMessage = document.getElementById('loading-message');
labelContainer = document.getElementById('label-container');

// Load the image model
async function init() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    // Load the model and metadata
    try {
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        console.log('Model loaded successfully');
        
        // Create labels
        for (let i = 0; i < maxPredictions; i++) {
            labelContainer.appendChild(document.createElement('div'));
        }
        
    } catch (error) {
        console.error('Error loading model:', error);
        loadingMessage.innerText = 'Failed to load model.';
        loadingMessage.style.display = 'block';
    }
}

// Handle image upload
imageUploadInput.addEventListener('change', async (event) => {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            
            // Clear previous predictions and show loading
            for (let i = 0; i < maxPredictions; i++) {
                labelContainer.childNodes[i].innerHTML = '';
            }
            loadingMessage.style.display = 'block';

            // Wait a moment for the image to be in the DOM, then predict
            setTimeout(() => predict(imagePreview), 100); 
        }
        reader.readAsDataURL(event.target.files[0]);
    }
});


// Run the image through the model
async function predict(imageElement) {
    if (!model) {
        console.error("Model not loaded yet");
        loadingMessage.innerText = "Model is not ready.";
        return;
    }

    const prediction = await model.predict(imageElement);
    
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ': ' + (prediction[i].probability * 100).toFixed(1) + '%';
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
    
    loadingMessage.style.display = 'none';
}

// Initialize the application
init();