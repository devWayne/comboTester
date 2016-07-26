#!/usr/bin/env node

const exec = require('child_process').execSync;
const log = require('nl-clilog');
const fetch = require('node-fetch');


var argv = require("minimist")(process.argv.slice(2));

console.log(argv._[0]);



const urlInput = argv._[0],
      baseUrl = urlInput.split("??")[0],
      comboUrl = urlInput.split("??")[1],
      comboUrlList = comboUrl.split(",");

comboUrlList.forEach(function(_url){
    fetch(baseUrl+_url).then(function(res){
        if(res.status==200){
            log.info(baseUrl+_url);
            log.debug('200');
        }else{
            log.info(baseUrl+_url);
            log.error(res.status);
        
        }
    }).catch(ex=>{
        log.error('ex: '+ex);
    });
});

