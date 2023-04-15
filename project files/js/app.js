var audio_context;
var recorder;
function startUserMedia(stream) {
var input = audio_context.createMediaStreamSource(stream);
// Uncomment if you want the audio to feedback directly
//input.connect(audio_context.destination);
//__log('Input connected to audio context destination.');

recorder = new Recorder(input);
}
function startRecording(button) {
    button.disabled = true;
    button.nextElementSibling.disabled = false;
  
    // Request permission to access the microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(function(stream) {
        // Create the AudioContext and connect the microphone stream
        var audioContext = new AudioContext();
        var input = audioContext.createMediaStreamSource(stream);
        
        // Create the recorder and start recording
        recorder = new Recorder(input);
        recorder.record();
      })
      .catch(function(err) {
        console.log('Error: ' + err);
      });
  }
  
function stopRecording(button) {
recorder && recorder.stop();
button.disabled = true;
button.previousElementSibling.disabled = false;

// create WAV download link using audio data blob
createDownloadLink();

recorder.clear();
}


function createDownloadLink() {
    recorder && recorder.exportWAV(function(blob) {
      console.log(blob);
      var formData = new FormData();
      formData.append('music', blob);
      formData.append('name', document.getElementById('name').value);
      formData.append('artist', document.getElementById('artist').value);
      formData.append('album', document.getElementById('album').files[0]);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'upload_audio.php', true);
      xhr.onload = function(e) {
        if (this.status == 200) {
          console.log(this.response);
        }
      };
      xhr.send(formData);
    });
  }
  

window.onload = function init() {
try {
    // webkit shim
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
    window.URL = window.URL || window.webkitURL;
    
    audio_context = new AudioContext;
} catch (e) {
    alert('No web audio support in this browser!');
}

navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
});
};