# mumbo
Record your thoughts, feelings, and reflections no matter where you are or what time of day it is, so you can seize the day and never miss a beat!

## Inspiration
In today's tech-savvy world, finding the time to sit down and jot down our life's events in a journal can be quite a challenge. That's why we created Mumbo! It's an amazing app that lets you capture your thoughts in audio form, so one can relive those precious moments again and again.

Keeping track of our lives and identities is key to building a more diverse and inclusive society, and with Mumbo, it's easier than ever before. Just imagine the fun of revisiting reflections, ideas, and memories at a later age - it's like traveling back in time to relive those happy moments all over again!

## What it does
With just a quick login or registration, the user will be transported to the home page - a digital treasure trove filled with all the precious recordings! To create an entry, simply add a catchy title, set the date, and upload or record audio. The user can even include an image to capture the essence of the entry. All of the entries are safely stored in a SQL database, so you can always revisit them whenever the mood strikes.

## How we built it
We developed the app using standard web development technologies, including HTML, CSS, JS, and PHP. PHP was used to implement user authentication and registration, as well as to manage the storage of audio recordings in a SQL server. To facilitate the recording feature, we integrated a third-party plugin called recorder.js, developed by Matt Diamond. Matt Diamond's recorder.js is a JavaScript library that allows web developers to easily integrate audio recording capabilities into their web applications. The library uses the Web Audio API and getUserMedia API to access the user's microphone and record audio: https://github.com/mattdiamond/Recorderjs

## Challenges we ran into
During development, we faced a challenge with styling the recorder within a form. We resolved this by creating a dedicated CSS file to avoid any conflicts with other stylesheets. Another obstacle we encountered was the process of taking the user's recording and using it as input for the audio, which proved to be quite challenging. We solved this by converting the audio buffer into a WAV file and store it as a variable. The "Upload Audio" button allows the user to select the recorded audio file and upload it to the SQL server.

## Accomplishments that we're proud of
We're really happy that we made an app that we could actually use. We did it all in one day for a hackathon and worked together to create something cool.

## What we learned
We learned how to use recorder.js in our app and how to set up authentication using PHP. Plus, Amy gained valuable experience in pacing herself during her first hackathon.

## What's next for Mumbo
* Allowing users to connect with each other
* Facilitating sharing of audio tracks
* Giving users prompts for their recordings
* Using notifications to encourage users to record daily
