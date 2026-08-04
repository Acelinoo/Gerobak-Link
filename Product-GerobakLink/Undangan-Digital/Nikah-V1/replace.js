const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

// Replace Texts
html = html.replace(/Kirana &amp; Arka/g, 'Zendaya &amp; Tom');
html = html.replace(/Kirana & Arka/g, 'Zendaya & Tom');
html = html.replace(/Kirana Putri Asmara, S\.Sn\./g, 'Zendaya Maree Stoermer Coleman');
html = html.replace(/Bapak Surya Asmara &amp; Ibu Dewi Lestari/g, 'Kazembe Ajamu Coleman &amp; Claire Stoermer');
html = html.replace(/Arka Pratama Wijaya, S\.T\./g, 'Thomas Stanley Holland');
html = html.replace(/Bapak Hendra Wijaya &amp; Ibu Sri Mulyani/g, 'Dominic Holland &amp; Nicola Frost');
html = html.replace(/Kirana/g, 'Zendaya');
html = html.replace(/Arka/g, 'Tom');
html = html.replace(/Zendaya teman sehidup semati/g, 'Zendaya teman sehidup semati');
html = html.replace(/#ZendayaTom2026/g, '#Tomdaya2026'); // previously #KiranaArka2026, became #ZendayaTom2026

// Replace Images
const zendayaImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Zendaya-byPhilipRomano.jpg/960px-Zendaya-byPhilipRomano.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail';
const tomImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/TomHolland-byPhilipRomano.jpg/960px-TomHolland-byPhilipRomano.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail';
const coupleImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Zendaya-byPhilipRomano.jpg/960px-Zendaya-byPhilipRomano.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail'; // or we can use another one. Let's use Tom for groom, Zendaya for bride.

// Cover, Hero
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1519741497674-611481863552\?auto=format&fit=crop&w=1200&h=630&q=80/g, coupleImg);
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1519741497674-611481863552\?auto=format&fit=crop&w=1600&q=80/g, coupleImg);
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1519741497674-611481863552[^\"']*/g, coupleImg); // Just to be safe
// Story Couple Photo
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1522673607200-164d1b6ce486[^\"']*/g, coupleImg);
// Bride Photo
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1529626455594-4ff0802cfb7e[^\"']*/g, zendayaImg);
// Groom Photo
html = html.replace(/https:\/\/images\.unsplash\.com\/photo-1507003211169-0a1dd7228f2d[^\"']*/g, tomImg);

fs.writeFileSync('index.html', html);
console.log('Replacements done in index.html');

