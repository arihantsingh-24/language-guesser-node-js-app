import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input);
if(langCode==='und'){
    console.log(colors.red("sorry, cant guess the language try with more text"));
}
else{
    const language = langs.where("3",langCode);
    console.log(colors.green(`I guess this language is :${language.name}`));
}