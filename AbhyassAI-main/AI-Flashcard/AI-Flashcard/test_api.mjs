import fetch from 'node-fetch';
import fs from 'fs';

const GEMINI_KEY = 'YOUR_GEMINI_KEY';
const OPENROUTER_KEY = 'YOUR_OPENROUTER_KEY';

async function listModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_KEY}`);
        const data = await response.json();
        const names = data.models ? data.models.map(m => m.name) : data;
        fs.writeFileSync('output.json', JSON.stringify({ gemini: names }, null, 2));
    } catch (err) {
        console.log("List Models Error:", err);
    }
}

async function run() {
    await listModels();
}

run();
