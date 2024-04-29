
// const startRecordingButton = document.getElementById('record-button');
// const transcriptDisplay = document.getElementById('transcript');

// let mediaRecorder;
// let audioChunks = [];

// function startRecording() {
//   const container = document.getElementById('record-button');
//   container.style.filter = 'blur(10px)';
//   const spinner = document.getElementsByClassName('spinner-container');
//   spinner[0].style.display = 'block';

//   startRecordingButton.disabled = true;
//   startRecordingButton.classList.add('recording');

//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then((stream) => {
//       const options = { mimeType: 'audio/webm' };
//       mediaRecorder = new MediaRecorder(stream, options);

//       mediaRecorder.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           audioChunks.push(event.data);
//         }
//       };

//       mediaRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunks, { type: 'audio' });
//         sendAudioToServer(audioBlob);
//         audioChunks = [];
//         // Disable the media stream
//         stream.getTracks().forEach((track) => track.stop());
//         // Remove the recording interface
//         //startRecordingButton.style.display = 'none';
//       };

//       mediaRecorder.start();
//       setTimeout(() => {
//         mediaRecorder.stop();
//       }, 5000); // Recording duration, adjust as needed
//     })
//     .catch((error) => {
//       console.error('Error accessing microphone:', error);
//       startRecordingButton.disabled = false; // Enable button in case of error
//       startRecordingButton.classList.remove('recording');
//     });
// }
// function sendAudioToServer(audioBlob) {


//   if (audioBlob.size === 0) {
//     console.error('Audio Blob is empty.');
//     return;
//   }

//   downloadAudio(audioChunks);

//   const formData = new FormData();
//   formData.append('audio', audioBlob);

//   fetch('/upload-audio', {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to upload audio.');
//       }
//       console.log('Audio sent to server successfully');
//       startRecordingButton.disabled = false; // Enable button after sending
//       startRecordingButton.classList.remove('recording');
//     })
//     .catch((error) => {
//       console.error('Error sending audio to server:', error);
//       startRecordingButton.disabled = false; // Enable button in case of error
//       startRecordingButton.classList.remove('recording');
//     });
// }

// startRecordingButton.addEventListener('click', startRecording);



// function downloadAudio(audioChunks) {
//   const audioBlob = new Blob(audioChunks, { type: 'audio' });
//   const audioUrl = URL.createObjectURL(audioBlob);
//   const link = document.createElement('a');
//   link.href = audioUrl;
//   link.download = 'recording.webm';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   URL.revokeObjectURL(audioUrl);
// }




// import { WavRecorder } from "webm-to-wav-converter";

// const startRecordingButton = document.getElementById('record-button');
// const transcriptDisplay = document.getElementById('transcript');

// let wavRecorder; // Change mediaRecorder to wavRecorder
// let audioChunks = [];

// function startRecording() {
//   const container = document.getElementById('record-button');
//   container.style.filter = 'blur(10px)';
//   const spinner = document.getElementsByClassName('spinner-container');
//   spinner[0].style.display = 'block';

//   startRecordingButton.disabled = true;
//   startRecordingButton.classList.add('recording');

//   navigator.mediaDevices.getUserMedia({ audio: true })
//     .then((stream) => {
//       wavRecorder = new WavRecorder(); // Initialize WavRecorder

//       wavRecorder.start();

//       setTimeout(() => {
//         wavRecorder.stop();
//         const wavBlob = wavRecorder.getBlob(); // Get the WAV Blob
//         sendAudioToServer(wavBlob); // Send WAV Blob to server
//       }, 5000); // Recording duration, adjust as needed
//     })
//     .catch((error) => {
//       console.error('Error accessing microphone:', error);
//       startRecordingButton.disabled = false; // Enable button in case of error
//       startRecordingButton.classList.remove('recording');
//     });
// }

// function sendAudioToServer(wavBlob) {
//   if (wavBlob.size === 0) {
//     console.error('Audio Blob is empty.');
//     return;
//   }

//   downloadAudio(wavBlob);


//   const formData = new FormData();
//   formData.append('audio', wavBlob);

//   fetch('/upload-audio', {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to upload audio.');
//       }
//       console.log('Audio sent to server successfully');
//       startRecordingButton.disabled = false; // Enable button after sending
//       startRecordingButton.classList.remove('recording');
//     })
//     .catch((error) => {
//       console.error('Error sending audio to server:', error);
//       startRecordingButton.disabled = false; // Enable button in case of error
//       startRecordingButton.classList.remove('recording');
//     });
// }

// function downloadAudio(audioChunks) {
//   const audioBlob = new Blob(audioChunks, { type: 'audio' });
//   const audioUrl = URL.createObjectURL(audioBlob);
//   const link = document.createElement('a');
//   link.href = audioUrl;
//   link.download = 'recording.webm';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   URL.revokeObjectURL(audioUrl);
// }

// startRecordingButton.addEventListener('click', startRecording);

