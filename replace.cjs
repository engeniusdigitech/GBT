const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('C:/laragon/www/gujarat-biotech/src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/container-wide/g, 'wrap');
    content = content.replace(/section-padding/g, 'section-pad');
    content = content.replace(/glass-card/g, 'glass');
    content = content.replace(/text-gradient/g, 'grad-text');
    content = content.replace(/btn-primary/g, 'btn-green');
    content = content.replace(/btn-outline/g, 'btn-ghost');
    content = content.replace(/section-tag/g, 'eyebrow');
    content = content.replace(/divider-center/g, 'rule-c');
    content = content.replace(/"divider my-3"/g, '"rule"');
    content = content.replace(/"divider"/g, '"rule"');
    content = content.replace(/font-heading/g, 'font-display');
    content = content.replace(/glow-green/g, 'glow');

    fs.writeFileSync(file, content, 'utf8');
});

console.log('Replacement complete.');
