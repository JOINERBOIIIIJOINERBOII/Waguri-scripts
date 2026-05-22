
// api/music.js - Host your own music file
// You can also just use a direct URL to any MP3

export default async function handler(req, res) {
    // Option 1: Redirect to a music URL
    // res.redirect('https://example.com/music.mp3');
    
    // Option 2: Serve your own music (upload an MP3 to /public/music.mp3)
    // res.sendFile('music.mp3', { root: './public' });
    
    // For now, redirect to a free anime music
    res.redirect('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
}
