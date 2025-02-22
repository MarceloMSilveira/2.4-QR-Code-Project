/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import qr from "qr-image";
import fs from 'node:fs';

//solicita ao usuário um site e salva o site na constante userURL
const userURL = await input({ message: 'Enter your URL: ' });
 
//cria o qr code relativo ao site digitado;
const qr_png = qr.image(userURL);
qr_png.pipe(fs.createWriteStream('site_qr.png'));

