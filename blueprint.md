# AI Image Classifier: Dog vs. Cat

## Overview

This project is a web-based application that utilizes a pre-trained machine learning model from Google's Teachable Machine to classify images as either a "Dog" or a "Cat". The application provides a simple and intuitive interface for users to upload an image and receive a real-time prediction with a confidence score.

## Project Outline

### Design and Style

*   **Layout:** A modern, single-page, mobile-first layout centered on the user interaction of uploading and classifying an image.
*   **Color Palette:**
    *   Primary: ` #3498db` (a friendly blue)
    *   Background: `#ecf0f1` (a light, clean gray)
    *   Card/Container: `#ffffff` (white)
    *   Text: `#2c3e50` (a dark, readable slate color)
*   **Typography:** 'Roboto' font for its clarity and modern look. Headings are bold and larger to create a clear hierarchy.
*   **Visuals & Effects:**
    *   **Drop Shadows:** Soft, deep shadows on the main container to give it a "lifted" or "card" look.
    *   **Border Radius:** Generous border-radius on containers and buttons for a softer, more modern aesthetic.
    *   **Transitions:** Smooth transitions on hover effects for interactive elements like buttons.

### Features

*   **Image Uploader:** A user-friendly, styled button for uploading image files (`.jpg`, `.png`, etc.). The standard, unappealing file input is hidden.
*   **Image Preview:** Once an image is selected, a preview is immediately displayed for the user to see.
*   **AI Model Integration:**
    *   Integrates a Teachable Machine image classification model (`https://teachablemachine.withgoogle.com/models/iy_RlrxKc/`).
    *   The model and its metadata are loaded from the cloud using TensorFlow.js (`tf.js`).
*   **Real-time Prediction:**
    *   Classification is triggered automatically upon image upload.
    *   A "loading" indicator informs the user that the model is processing the image.
*   **Result Display:** The prediction results (class name, e.g., "Dog" or "Cat") are displayed clearly along with the model's confidence percentage.

## Current Plan

The application is functionally complete and meets the initial requirements. Future enhancements could include:
*   Support for drag-and-drop file uploads.
*   Displaying both top predictions (if more than two classes existed).
*   Adding more engaging animations and visual feedback for the prediction results.
*   Allowing users to test with a live webcam feed as an alternative to file uploads.