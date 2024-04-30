I've built a web application that helps you find music playing nearby. 

You can open my website and there will be a button to catch the music. After 10 seconds, the music's name, title, artist, and cover image will be displayed.

I encountered some issues while building this app. The first problem was that the audio recorded through the browser is in a webm format, so I couldn't send that file to the server due to codec issues. 

The npm module I used to find the song was "shazam," and Shazam doesn't support that codec. 

Therefore, I had to convert the webm file to an mp3 format. I used the ffmpeg npm module to perform this conversion. 

I've done this with an existing website i own running on an Ubuntu server. I installed ffmpeg on that server and performed the conversion there. 

After converting the file, the API of my website responds with the link to the converted file. Then, I have to download that file again on my server. For this, I used the axios and fs modules. 

After successful conversion and download, I send the audio to the Shazam npm, which responds with song details. 

For the frontend, I used a CSS library called Universal IO.
