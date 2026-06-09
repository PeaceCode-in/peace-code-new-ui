const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace the string form back to array form with "as any"
  const regexString = /ease:\s*"cubic-bezier\(([0-9.-]+),\s*([0-9.-]+),\s*([0-9.-]+),\s*([0-9.-]+)\)"/g;
  let changed = false;
  if (regexString.test(content)) {
    content = content.replace(regexString, 'ease: [$1, $2, $3, $4] as any');
    changed = true;
  }
  
  // Also fix any remaining array forms
  const regexArray = /ease:\s*\[\s*([0-9.-]+)\s*,\s*([0-9.-]+)\s*,\s*([0-9.-]+)\s*,\s*([0-9.-]+)\s*\](?:\s*as\s+const)?(?!\s*as\s+any)/g;
  if (regexArray.test(content)) {
    content = content.replace(regexArray, 'ease: [$1, $2, $3, $4] as any');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log('Fixed:', file);
  }
});
