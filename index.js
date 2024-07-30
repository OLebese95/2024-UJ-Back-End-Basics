import { greet} from './greet.js';
import {yo} from './yo.js';
import chalk from 'chalk';


const styledMessage = chalk.bgRed.white(greet('Xola'));
console.log(styledMessage)


const styledMessage2 = chalk.bgYellow.black(yo('Ofentse'));
console.log(styledMessage2)

// console.log(greet('Ofentse'));
// console.log(yo('Sokhanyi'));

import cowsay from 'cowsay';
import figlet from 'figlet';


console.log(chalk.red(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
})));

figlet ('Hello , Ofentse !', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data));
});
