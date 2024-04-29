const path = require('path');
const fs = require('fs');


const home = (req, res) => {

    try {
        
        res.render('home');
    } catch (error) {
        
    }

}

const audio = async (req, res) => {
    console.log('Audio file received:', req.file);

    if (!req.file) {
        return res.status(400).send('No audio file uploaded.');
    }

    const filePath = path.join(__dirname, '../public/uploads', req.file.filename);

    // const filePath = path.join(__dirname, '../public/uploads', 'GoldenEye.m4a' );
    try {
        // Dynamically import Shazam from the library
        const { Shazam } = await import('node-shazam');
        const shazam = new Shazam();

        // Recognizing the track from the uploaded audio file

        console.log("file path", filePath);
        const recognise = await shazam.recognise(filePath, 'en-US');
        console.log('Recognized track:', recognise);

        // Your additional logic with the recognized track can go here

        return res.status(200).send('Audio file uploaded successfully.');
    } catch (error) {
        console.error('Error recognizing track:', error);
        return res.status(500).send('Error recognizing track.');
    }
}




module.exports ={

    home,
    audio
}



// const path = require('path');
// const fs = require('fs').promises;
// const webmToMp4 = require('webm-to-mp4');

// const home = (req, res) => {
//     try {
//         res.render('home');
//     } catch (error) {
//         // Handle error
//     }
// }

// const audio = async (req, res) => {
//     console.log('Audio file received:', req.file);

//     if (!req.file) {
//         return res.status(400).send('No audio file uploaded.');
//     }

//     const webmFilePath = path.join(__dirname, '../public/uploads', req.file.filename);
//     const mp4FilePath = path.join(__dirname, '../public/uploads', `${Date.now()}.mp4`);

//     try {
//         // Convert WebM to MP4
//         const webmData = await fs.readFile(webmFilePath);
//         const mp4DataArrayBuffer = webmToMp4(webmData);
//         const mp4DataBuffer = Buffer.from(mp4DataArrayBuffer); // Convert ArrayBuffer to Buffer
//         await fs.writeFile(mp4FilePath, mp4DataBuffer);

//         // Proceed with Shazam recognition on the MP4 file
//         // Assuming you have the existing Shazam logic here
//         const { Shazam } = await import('node-shazam');
//         const shazam = new Shazam();
//         const recognise = await shazam.recognise(mp4FilePath, 'en-US');
//         console.log('Recognized track:', recognise);

//         // Optionally, you can delete the original WebM file if needed
//         // await fs.unlink(webmFilePath);

//         // Proceed with further processing or response

//         return res.status(200).send('Audio file uploaded and converted to MP4 successfully.');
//     } catch (error) {
//         console.error('Error converting to MP4 or recognizing track:', error);
//         return res.status(500).send('Error converting to MP4 or recognizing track.');
//     }
// }

// module.exports = {
//     home,
//     audio
// }


