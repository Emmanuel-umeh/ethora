import * as xmppConfig from '../constants/xmppConstants';

export let xmpp;

export const xmppConnect=(walletAddress,password)=>{
  xmpp = client({
    service: xmppConfig.SERVICE,
    domain: xmppConfig.DOMAIN,
    username: walletAddress,
    password: password,
  });

  
  xmpp.start();


}