(self.webpackChunkglsdefia1=self.webpackChunkglsdefia1||[]).push([[508],{80834:(e,r,n)=>{"use strict";n.d(r,{getED25519Key:()=>i});var t=n(80889),f=n.n(t),a=n(40918).Buffer;const s=f().lowlevel;function i(e){let r;r="string"===typeof e?a.from(e,"hex"):e;const n=new Uint8Array(64),t=[s.gf(),s.gf(),s.gf(),s.gf()],f=new Uint8Array([...new Uint8Array(r),...new Uint8Array(32)]),i=new Uint8Array(32);s.crypto_hash(n,f,32),n[0]&=248,n[31]&=127,n[31]|=64,s.scalarbase(t,n),s.pack(i,t);for(let a=0;a<32;a+=1)f[a+32]=i[a];return{sk:a.from(f),pk:a.from(i)}}},78848:()=>{}}]);