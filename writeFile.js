const fs = require('fs');

const archives = ['arquivo1.txt','arquivo2.txt','arquivo3.txt','arquivo4.txt','arquivo5.txt',]

const data = ['Natalia é legal', 'Natalia é linda', 'Natalia é top', 'Natalia é massa', 'Me segue no Linkedin ;)']

for(var i = 0; i < archives.length; i++){
    fs.writeFile(archives[i], data[i], (err) => {
        if(err){
            console.log(err);
        }
    });
    fs.readFile(`./${archives[i]}`, 'utf-8', (err, data)=>{
        console.log(data);
    });
}
