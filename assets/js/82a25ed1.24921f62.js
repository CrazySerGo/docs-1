"use strict";(self.webpackChunkmundis_docs=self.webpackChunkmundis_docs||[]).push([[590],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8439:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"The Mundis Blockchain"},c=void 0,l={unversionedId:"mundis-blockchain",id:"mundis-blockchain",title:"The Mundis Blockchain",description:"Introduction",source:"@site/src/mundis-blockchain.md",sourceDirName:".",slug:"/mundis-blockchain",permalink:"/mundis-blockchain",draft:!1,tags:[],version:"current",frontMatter:{title:"The Mundis Blockchain"},sidebar:"docs",previous:{title:"Rattle & Shake Devnet",permalink:"/"},next:{title:"Terminology",permalink:"/terminology"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Disclaimer",id:"disclaimer",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Mundis is an open-source implementation of a Multiverse ecosystem. It's a set of building blocks required to achieve a scalable, interoperable Multiverse ecosystem (Metaverses, NFTs, GameFi) where users socialize, work, navigate, shop, and create experiences. The objective of Mundis is to deliver technology, standards, and protocols for current and future Metaverse projects. It's an layered architecture, where each layer performs a specific function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer 0"),": the backbone of Mundis is a ",(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/introduction"},"Solana"),"-based blockchain with sub-second finality times, inter-chain data exchange, distributed storage, identity management, naming system, and required supporting services for Metaverse projects, that provides a global, forward-moving clock, checkpoints L1 chains, handles positioning and global navigation, and drives governance for the Multiverse. It has a fast consensus mechanism designed for speed and sub-second finality, and native support for Multiverse services: Identity Management, Name Service, Decentralized Storage, CDN, Launchpad, Bridges, Garbage Collection, Location, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer 1"),": Interoperable worlds, created as specialized, byzantine state machines with PoS-based consensus. Each chain has its own genesis and consensus rules, optional smart-contract support, DAOs, and more, built using the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/getting-started/overview/"},"Substrate")," framework"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Layer 2"),": an extensible UI infrastructure where developers deploy their visual assets, experiences and Metaverses. The Human-Computer Interface (HCI) allows users to interact with the Multiverse using desktop, mobile and AR/VR devices. It's an engaging visual, immersive and interactive Multiverse experience")),(0,i.kt)("p",null,"Developers use Mundis to build their Metaverse projects as Layer 1 byzantine state-machines, define their economic rules and interactions, issue their tokens, NFTs and assets. Metaverse projects that build on Mundis are natively interoperable and deeply integrated in the ecosystem. Tokens and NFTs can be used across the entire Multiverse, teleported to/from other blockchains, and integrated natively in the UI."),(0,i.kt)("p",null,"Mundis is both a technology and visual platform, delivering a complete operating system for Metaverse projects to thrive. It provides all required tools and services for technical and economic exchange, payments, DeFi, visual asset and game development. It's a complete ecosystem where Validators participate in Layer 0 and Layer 1 consensus to validate transactions and secure the Multiverse."),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"All claims, content, designs, algorithms, estimates, roadmaps, specifications, and performance measurements described in this project are done with the author's best effort. It is up to the reader to check and validate their accuracy and truthfulness. Furthermore, nothing in this project constitutes a solicitation for investment."))}m.isMDXComponent=!0}}]);