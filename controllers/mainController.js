const path = require('path');
const fs = require('fs');
const axios = require('axios');


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

    try {
       
        const { Shazam } = await import('node-shazam');
        const shazam = new Shazam();

        const uploadFolder = path.join(__dirname, '../public/uploads');
        const fileName = `${Date.now()}_${req.file.originalname}`;
        const filePath = path.join(uploadFolder, fileName);
    
        
        await fs.mkdir(uploadFolder, { recursive: true }, (err) => {
            if (err) {
                console.error('Error creating directory:', err);
                throw err;
            }
        });
        console.log(req.file);
        const apiUrl = 'https://iluvnet.com/tools/wav-to-mp3'
        const requestBody = {
            url: `https://e307-103-170-228-58.ngrok-free.app/uploads/${req.file.filename}`
        };
        const convertedUrl = await axios.post(apiUrl,requestBody);
        console.log(convertedUrl.data.output);
        const response = await axios.get(`${convertedUrl.data.output}`, { responseType: 'arraybuffer' });
        await fs.writeFileSync(filePath, response.data);
        const recognise = await shazam.recognise(filePath, 'en-US');
        console.log('Recognized track:', recognise?.track);
        if(recognise?.track){
            return res.status(200).json({data: recognise.track,success: true});
        }
        return res.status(200).json({success: false});
    } catch (error) {
        console.error('Error recognizing track:', error);
        return res.status(500).send('Error recognizing track.');
    }
}


module.exports ={

    home,
    audio
}


