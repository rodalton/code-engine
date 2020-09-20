const { IamAuthenticator } = require('ibm-watson/auth');
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');

function main(params) {

    const languageTranslator = new LanguageTranslatorV3({
        authenticator: new IamAuthenticator({ apikey: 'Q8NcdcXlxlG1BX_qkQklWPV-ZOBnsgNw1B7FsGNuXzXg' }),
        serviceUrl: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/de3f6561-b86d-4c00-94f1-2d2e699ec56f',
        version: '2018-05-01',
    });

    const translateParams = {
      text: 'Hello, how are you today?',
      modelId: 'en-es',
    };

    const identifyParams = {
      text: 'Language translator translates text from one language to another'
    };

    languageTranslator.identify(identifyParams)
      .then(identifiedLanguages => {
        console.log(JSON.stringify(identifiedLanguages, null, 2));
      })
      .catch(err => {
        console.log('error:', err);
      });
}
