const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "PqwVULQb#wvuPrlp26o2MkQxqcSNFJ4EHJbR-54xCI529Ko1hLVs",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
