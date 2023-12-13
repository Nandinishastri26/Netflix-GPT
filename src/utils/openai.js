import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser: true,  //if we not write this then it will not allow us to call api because our api key is in danger so we have to write this condition
});

export default openai
