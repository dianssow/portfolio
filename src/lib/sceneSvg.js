  function eyeOpen(x, flip){
    return '<g transform="translate('+x+' 16)'+(flip?' scale(-1 1)':'')+'">'+
      '<ellipse rx="17" ry="21" fill="#fdfdfd"/>'+
      '<g class="pupils"><ellipse rx="12.5" ry="17" fill="url(#iris)"/><ellipse rx="6.5" ry="10" fill="#1b0f0a"/>'+
      '<circle cx="-4" cy="-6" r="4.6" fill="#fff"/><circle cx="5" cy="7" r="2.2" fill="#fff" opacity=".9"/></g>'+
      '<path d="M-20 -6 Q0 -27 20 -6" stroke="#120d0b" stroke-width="4.5" fill="none" stroke-linecap="round"/>'+
      '<path d="M-20 -6 l-6 -3" stroke="#120d0b" stroke-width="3.5" stroke-linecap="round"/></g>';
  } 
  export function sceneSvg(A){
    return '<svg class="scene-svg" viewBox="0 0 1100 640" xmlns="http://www.w3.org/2000/svg">'+
    '<defs>'+
      '<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#86b4d6"/><stop offset="1" stop-color="#d6e6ee"/></linearGradient>'+
      '<linearGradient id="wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c79e6e"/><stop offset="1" stop-color="#b28556"/></linearGradient>'+
      '<linearGradient id="iris" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a100b"/><stop offset=".6" stop-color="#5b3a1f"/><stop offset="1" stop-color="#b07a43"/></linearGradient>'+
      '<linearGradient id="screenLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8cc8ff" stop-opacity="0"/><stop offset="1" stop-color="#8cc8ff" stop-opacity=".5"/></linearGradient>'+
      '<linearGradient id="alu" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8f989e"/><stop offset=".35" stop-color="#d3d9dc"/><stop offset=".7" stop-color="#aab3b8"/><stop offset="1" stop-color="#7b858b"/></linearGradient>'+
      '<linearGradient id="cof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5a3318"/><stop offset="1" stop-color="#2f1a0c"/></linearGradient>'+
      '<clipPath id="cupClip"><path d="M174 424 L188 498 Q190 510 203 510 L289 510 Q302 510 304 498 L318 424 Z"/></clipPath>'+
    '</defs>'+
 
    /* room */
    '<rect x="-3000" y="598" width="7100" height="3000" fill="#33282a"/>'+
    '<rect x="-3000" y="590" width="7100" height="8" fill="#241b1d"/>'+
    /* window */
    '<g><rect x="120" y="66" width="220" height="230" rx="4" fill="url(#sky)"/>'+
    '<path d="M120 296 V250 H150 V232 H178 V252 H196 V214 L206 196 L216 214 V252 H246 V236 H282 V256 H340 V296Z" fill="#7e97a8" opacity=".75"/>'+
    '<circle cx="290" cy="116" r="20" fill="#fff6d8" opacity=".9"/>'+
    '<rect x="120" y="66" width="220" height="230" rx="4" fill="none" stroke="#e9e3d6" stroke-width="9"/>'+
    '<path d="M230 66 V296 M120 180 H340" stroke="#e9e3d6" stroke-width="7"/>'+
    '<rect x="108" y="296" width="244" height="12" rx="3" fill="#d8d1c2"/></g>'+
    /* poster */
    '<g transform="rotate(-3 880 130)"><rect x="830" y="60" width="116" height="150" fill="#e9e3d6"/><rect x="840" y="70" width="96" height="130" fill="#3b5666"/>'+
    '<path d="M840 200 L872 142 L894 176 L910 152 L936 200Z" fill="#7aa0b3"/><circle cx="906" cy="102" r="12" fill="#f0c36a"/></g>'+
    /* shelf */
    '<g><rect x="760" y="262" width="260" height="12" rx="2" fill="#8b6a46"/>'+
    '<rect x="780" y="206" width="22" height="56" fill="#c0504a"/><rect x="804" y="214" width="18" height="48" fill="#3f7a73"/><rect x="824" y="200" width="24" height="62" fill="#d6a640"/>'+
    '<rect x="862" y="226" width="40" height="36" rx="4" fill="#a8523a"/><path d="M882 226 C870 200 858 204 856 190 C870 192 880 206 882 226 M882 226 C894 198 910 204 912 188 C896 190 886 206 882 226" fill="#5a9a62"/></g>'+
 
    /* character */
    '<g transform="translate(560 235) scale(.9)">'+
      /* chair back */
      '<path d="M-165 260 V120 Q-165 82 -125 82 H125 Q165 82 165 120 V260Z" fill="#1f2428"/>'+
      '<g class="torso">'+
        '<path d="M-132 150 Q-152 220 -138 300 L-98 300 Q-104 220 -96 150Z" fill="'+A.hoodie+'"/>'+
        '<path d="M132 150 Q152 220 138 300 L98 300 Q104 220 96 150Z" fill="'+A.hoodie+'"/>'+
        '<rect x="-22" y="76" width="44" height="52" fill="'+A.skinShade+'"/>'+
        '<path d="M-132 270 Q-134 135 -52 112 L52 112 Q134 135 132 270Z" fill="'+A.hoodie+'"/>'+
        '<path d="M-58 112 Q0 168 58 112 Q50 98 40 96 Q0 140 -40 96 Q-50 98 -58 112Z" fill="'+A.hoodieShade+'"/>'+
        '<path d="M-16 134 V176 M16 134 V176" stroke="'+A.hoodieShade+'" stroke-width="3" stroke-linecap="round"/>'+
        '<circle cx="-16" cy="178" r="3.5" fill="'+A.hoodieShade+'"/><circle cx="16" cy="178" r="3.5" fill="'+A.hoodieShade+'"/>'+
        '<path d="M-132 270 Q-134 135 -52 112 L52 112 Q134 135 132 270Z" fill="url(#screenLight)" class="facelight" opacity=".55"/>'+
      '</g>'+
      /* head */
      '<path d="M-96 -2 Q-100 -118 0 -122 Q100 -118 96 -2 Q96 -30 80 -50 L-80 -50 Q-96 -30 -96 -2Z" fill="'+A.hair+'"/>'+
      '<path d="M-76 -20 Q-78 60 -40 98 Q0 120 40 98 Q78 60 76 -20 Q70 -86 0 -88 Q-70 -86 -76 -20Z" fill="'+A.skin+'"/>'+
      /* hair fringe */
      '<path d="M-88 -8 Q-98 -112 0 -120 Q98 -112 88 -8 Q84 -48 64 -62 L52 -30 L34 -66 L16 -28 L-2 -68 L-20 -30 L-40 -64 L-52 -26 L-68 -54 Q-84 -40 -88 -8Z" fill="'+A.hair+'"/>'+
      '<path d="M-14 -116 Q0 -152 20 -118Z" fill="'+A.hair+'"/>'+
      '<path d="M-52 -92 Q-30 -108 -4 -104 M22 -104 Q44 -100 58 -86" stroke="'+A.hairShine+'" stroke-width="4" fill="none" stroke-linecap="round"/>'+
      /* headphones */
      '<path d="M-90 -4 Q-96 -128 0 -130 Q96 -128 90 -4" fill="none" stroke="#23272b" stroke-width="8" stroke-linecap="round"/>'+
      '<ellipse cx="-90" cy="14" rx="15" ry="28" fill="'+A.phones+'"/><ellipse cx="90" cy="14" rx="15" ry="28" fill="'+A.phones+'"/>'+
      '<ellipse cx="-95" cy="14" rx="7" ry="20" fill="#b3170f"/><ellipse cx="95" cy="14" rx="7" ry="20" fill="#b3170f"/>'+
      /* brows */
      '<path d="M-52 -10 Q-36 -21 -18 -13 M52 -10 Q36 -21 18 -13" stroke="'+A.hair+'" stroke-width="5.5" fill="none" stroke-linecap="round"/>'+
      /* eyes */
      '<g class="eyes-open">'+eyeOpen(-34,false)+eyeOpen(34,true)+'</g>'+
      '<g class="eyes-sleep" fill="none" stroke="#120d0b" stroke-width="4.5" stroke-linecap="round"><path d="M-52 20 Q-34 33 -16 20"/><path d="M16 20 Q34 33 52 20"/></g>'+
      /* nose + mouth + blush */
      '<path d="M0 40 q-5 7 2 8" stroke="'+A.skinShade+'" stroke-width="2.6" fill="none" stroke-linecap="round"/>'+
      '<g class="mouth-flat"><path d="M-9 68 Q0 71 9 68" stroke="#5a2a22" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>'+
      '<g class="mouth-smile"><path d="M-16 62 Q0 84 16 62Z" fill="#7a2d2b" stroke="#5a2a22" stroke-width="3" stroke-linejoin="round"/><ellipse cx="0" cy="74" rx="6.5" ry="3.2" fill="#d9736f"/></g>'+
      '<g class="blush"><ellipse cx="-53" cy="48" rx="12" ry="7" fill="#ff7a70" opacity=".3"/><ellipse cx="53" cy="48" rx="12" ry="7" fill="#ff7a70" opacity=".3"/></g>'+
      /* screen light on face */
      '<path class="facelight" d="M-76 -20 Q-78 60 -40 98 Q0 120 40 98 Q78 60 76 -20 Q70 -86 0 -88 Q-70 -86 -76 -20Z" fill="url(#screenLight)"/>'+
      /* zzz */
      '<g class="zzz" fill="#fff" font-family="IBM Plex Sans Condensed, Arial Narrow, sans-serif" font-weight="700">'+
        '<text x="104" y="-70" font-size="26">z</text><text x="124" y="-98" font-size="34">z</text><text x="150" y="-134" font-size="44">Z</text></g>'+
    '</g>'+
 
    /* desk */
    '<ellipse cx="560" cy="604" rx="460" ry="16" fill="rgba(0,0,0,.28)"/>'+
    '<rect x="172" y="540" width="30" height="62" fill="#7d5c3b"/><rect x="918" y="540" width="30" height="62" fill="#7d5c3b"/>'+
    '<rect x="150" y="518" width="820" height="28" rx="3" fill="#8d6a44"/>'+
    '<rect x="690" y="546" width="228" height="50" rx="3" fill="#8f6a44"/><rect x="778" y="564" width="52" height="8" rx="4" fill="#d8c9ae"/>'+
    '<polygon points="200,430 920,430 970,520 150,520" fill="url(#wood)"/>'+
    '<path d="M200 430 H920" stroke="rgba(255,255,255,.28)" stroke-width="3"/>'+
    '<path d="M214 470 H900 M186 500 H940" stroke="rgba(0,0,0,.06)" stroke-width="2"/>'+
    /* books + plant on desk */
    '<g><rect x="820" y="468" width="92" height="14" rx="2" fill="#3f7a73"/><rect x="826" y="454" width="84" height="14" rx="2" fill="#c0504a"/><rect x="832" y="441" width="74" height="13" rx="2" fill="#d6a640"/>'+
    '<path d="M868 441 C858 416 846 420 844 404 C860 406 868 420 868 441 M868 441 C880 414 896 420 898 402 C882 404 872 420 868 441" fill="#5a9a62"/>'+
    '<rect x="854" y="436" width="30" height="8" rx="2" fill="#a8523a"/></g>'+
 
    /* coffee: mug + moka pot */
    '<g transform="translate(300 474) scale(.72) translate(-246 -520)">'+
      '<ellipse cx="246" cy="540" rx="136" ry="14" fill="rgba(0,0,0,.22)"/>'+
      '<ellipse cx="246" cy="526" rx="114" ry="17" fill="#cdd3cf"/><ellipse cx="246" cy="522" rx="114" ry="17" fill="#e8ebe7"/><ellipse cx="246" cy="520" rx="68" ry="8" fill="#d2d7d2"/>'+
      '<path d="M321 438 C380 430 378 496 308 496" stroke="rgba(255,255,255,.5)" stroke-width="9" fill="none" stroke-linecap="round"/>'+
      '<path d="M168 420 L184 500 Q187 516 203 516 L289 516 Q305 516 308 500 L324 420 Z" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.6)" stroke-width="2" stroke-linejoin="round"/>'+
      '<g class="stream"><path d="M246 207 L246 498" stroke="#4a2a14" stroke-width="8" stroke-linecap="round"/><path d="M244 207 L244 498" stroke="#7a4b2a" stroke-width="2" opacity=".7"/></g>'+
      '<g clip-path="url(#cupClip)"><g class="coffee"><rect x="160" y="440" width="172" height="90" fill="url(#cof)"/><ellipse cx="246" cy="440" rx="70" ry="9" fill="#a8693a"/><ellipse cx="246" cy="439" rx="46" ry="5" fill="#c58a55" opacity=".6"/></g></g>'+
      '<ellipse cx="246" cy="420" rx="78" ry="11" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="2"/>'+
      '<g class="steam" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="5" stroke-linecap="round"><path d="M222 400 q-12 -18 0 -34 t0 -34"/><path d="M246 396 q-12 -18 0 -34 t0 -34"/><path d="M270 400 q-12 -18 0 -34 t0 -34"/></g>'+
      '<g transform="translate(334 219) rotate(-38)"><g class="pot-in">'+
        '<path d="M46 -46 C92 -52 90 26 38 30" stroke="#1d2023" stroke-width="10" fill="none" stroke-linecap="round"/>'+
        '<polygon points="-44,75 44,75 30,8 -30,8" fill="url(#alu)"/><polygon points="-30,8 30,8 46,-52 -46,-52" fill="url(#alu)"/>'+
        '<path d="M-16 8 L-22 -52 M16 8 L22 -52 M-2 8 L-2 -52" stroke="rgba(0,0,0,.12)" stroke-width="2"/>'+
        '<path d="M-46 -52 L-64 -64 L-46 -44 Z" fill="#aab3b8"/><path d="M-47 -52 L47 -52 L41 -66 L-41 -66 Z" fill="#26292c"/>'+
        '<circle cx="0" cy="-72" r="6" fill="#16181a"/><rect x="-30" y="2" width="60" height="8" fill="#26292c"/>'+
      '</g></g>'+
    '</g>'+
    '</svg>';
  }
