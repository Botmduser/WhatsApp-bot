const _0x503287=_0x39a2;function _0x39a2(_0x3695d7,_0x304012){const _0x5a38ea=_0x5a38();return _0x39a2=function(_0x39a277,_0x1b27cf){_0x39a277=_0x39a277-0xea;let _0x5d4c6e=_0x5a38ea[_0x39a277];return _0x5d4c6e;},_0x39a2(_0x3695d7,_0x304012);}(function(_0x3489d5,_0x575aa4){const _0x7208e4=_0x39a2,_0x55d1bc=_0x3489d5();while(!![]){try{const _0x4737ed=-parseInt(_0x7208e4(0x103))/0x1*(parseInt(_0x7208e4(0x102))/0x2)+parseInt(_0x7208e4(0xea))/0x3+-parseInt(_0x7208e4(0xef))/0x4*(-parseInt(_0x7208e4(0xec))/0x5)+parseInt(_0x7208e4(0xfa))/0x6*(-parseInt(_0x7208e4(0xf8))/0x7)+parseInt(_0x7208e4(0xf1))/0x8+parseInt(_0x7208e4(0xfd))/0x9+-parseInt(_0x7208e4(0x104))/0xa*(-parseInt(_0x7208e4(0xf4))/0xb);if(_0x4737ed===_0x575aa4)break;else _0x55d1bc['push'](_0x55d1bc['shift']());}catch(_0x592f29){_0x55d1bc['push'](_0x55d1bc['shift']());}}}(_0x5a38,0xc2527));const {cmd,commands}=require(_0x503287(0xf6)),{fetchJson}=require(_0x503287(0xf7)),config=require(_0x503287(0x106)),yts=require(_0x503287(0xf5));function _0x5a38(){const _0x305a8f=['4EDgiBo','\x20*_is\x20downloading..._*','3212272miEaHB','length','sendMessage','5899729GaRXQg','yt-search','../command','../lib/functions','53158JDIgSh','audio/mpeg','1122tPRsoH','log','https://www.dark-yasiya-api.site/download/ytmp3?url=','2343933jTXKxe','title','videos','*_Please\x20give\x20me\x20a\x20title\x20or\x20url._*','dl_link','1918KMkuVY','1427StOydf','10qXaCWQ','url','../config','2399301aCSugA','*_Can\x27t\x20find\x20anything._*','7932185NTtCpg','download','song'];_0x5a38=function(){return _0x305a8f;};return _0x5a38();}cmd({'pattern':_0x503287(0xee),'desc':'Download\x20songs','category':_0x503287(0xed),'filename':__filename},async(_0x598c59,_0x5cfb10,_0x45ec05,{from:_0x2c50f3,quoted:_0x352d90,body:_0x2dbac1,isCmd:_0x25081b,command:_0x262c54,args:_0x21090d,q:_0x7dd659,isGroup:_0x2fe72f,sender:_0x22a7e6,senderNumber:_0x4c0b9f,botNumber2:_0x2d4ce7,botNumber:_0x4cd998,pushname:_0x288489,isMe:_0x3e52f3,isOwner:_0x3eed6e,groupMetadata:_0x2751bd,groupName:_0x2a8ab9,participants:_0x4d0d61,groupAdmins:_0x2c00e0,isBotAdmins:_0x572966,isAdmins:_0x1759b1,reply:_0x405eb4})=>{const _0xa566e6=_0x503287;try{if(!_0x7dd659)return _0x405eb4(_0xa566e6(0x100));const _0x935c9f=await yts(_0x7dd659),_0x4c67e7=_0x935c9f[_0xa566e6(0xff)][0x0];if(!_0x4c67e7||_0x4c67e7[_0xa566e6(0xf2)]===0x0)return _0x405eb4(_0xa566e6(0xeb));let _0x450f4e=await _0x598c59[_0xa566e6(0xf3)](_0x2c50f3,{'text':_0x4c67e7[_0xa566e6(0xfe)]+_0xa566e6(0xf0)},{'quoted':_0x5cfb10}),_0x17a897=await fetchJson(_0xa566e6(0xfc)+_0x4c67e7[_0xa566e6(0x105)]);await _0x598c59[_0xa566e6(0xf3)](_0x2c50f3,{'audio':{'url':_0x17a897['result'][_0xa566e6(0x101)]},'mimetype':_0xa566e6(0xf9)},{'quoted':_0x450f4e});}catch(_0x264a37){console[_0xa566e6(0xfb)](_0x264a37),_0x405eb4(''+_0x264a37);}});