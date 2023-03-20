
import 'dotenv/config'
import { removeContact } from './activecampaign';

// import api from '@api/activecampaign';

// api.auth(globalConfig.ACTIVECAMPAIGN_API_KEY);
// api.auth(process.env.ACTIVECAMPAIGN_API_KEY);



console.log("Hello, world!");

console.log('The URL you are inputting is:' + process.env.KEYV_URI);
removeContact('test');



console.log("End of program");


