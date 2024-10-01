import cv2
import tensorflow as tf

# Load the trained model
model = tf.keras.models.load_model('defect_detection_model.h5')

# Load camera stream (assuming video stream from the manufacturing line)
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    
    # Preprocess the frame
    img = cv2.resize(frame, (64, 64))
    img = img.reshape(1, 64, 64, 3)
    img = img / 255.0  # Normalize

    # Perform prediction
    prediction = model.predict(img)
    
    # Check if a defect is detected
    if prediction > 0.5:
        print("No Defect Detected")
    else:
        print("Defect Detected!")

    # Display the frame
    cv2.imshow('Frame', frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release camera
cap.release()
cv2.destroyAllWindows()
