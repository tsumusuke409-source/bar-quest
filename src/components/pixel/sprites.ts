// ─── Sprite format ───────────────────────────────────────────────────────────
// Each sprite has a `palette` (char → CSS color) and `data` (string[] rows).
// '.' = transparent. Rows can have varying lengths — PixelCanvas handles it.
// Scale 4 → master 16×23 displays as 64×92 px.

// ─── Master (old bartender) ───────────────────────────────────────────────────
export const MASTER = {
  palette: {
    W: '#eeeeee', // white hair / mustache
    G: '#aaaaaa', // gray hair shadow
    S: '#e8b98c', // skin
    E: '#2a1400', // dark eye
    N: '#1a3060', // navy vest
    C: '#f5f0e8', // cream shirt
    P: '#0d0d1e', // dark pants
    B: '#111111', // black bow-tie / outline
  },
  data: [
    '....WWWWWWWW....',
    '...WWWWWWWWWW...',
    '..GWWWWWWWWWWG..',
    '..WSSSSSSSSSSW..',
    '..WSSSSSSSSSSW..',
    '..WSSESSESSSSW..',
    '..WSSSSSSSSSSW..',
    '..WSSSSSSSSSSW..',
    '..WWWWWWWWWWWW..',
    '...SSSSSSSSSS...',
    '..BNNWBBBBWNNB..',
    '.NNNNWCCCCWNNNN.',
    '.NNNNWCCCCWNNNN.',
    '.NNNNWCCCCWNNNN.',
    '.NNNNNNNNNNNNNN.',
    '.NNNNNNNNNNNNNN.',
    '.NNNNNNNNNNNNNN.',
    '..NNNNNNNNNNNN..',
    '..NNNNNNNNNNNN..',
    '..PPPPPPPPPPPP..',
    '..PPPPPPPPPPPP..',
    '..PPPPPPPPPPPP..',
    '...PPPP..PPPP...',
  ],
}

// ─── Player: male ─────────────────────────────────────────────────────────────
// 'H' = hair color (swapped at runtime)
export const PLAYER_MALE = {
  palette: {
    H: '#6b3a10', // brown hair (default; overridden by choice)
    S: '#e8b98c', // skin
    E: '#2a1400', // dark eye
    C: '#ffffff', // white uniform
    A: '#f0ebe0', // cream apron
    T: '#cc9933', // gold apron tie
    P: '#222240', // dark pants
  },
  data: [
    '....HHHHHHHH....',
    '...HHHHHHHHHH...',
    '..HHHHHHHHHHHH..',
    '..HSSSSSSSSSSH..',
    '..HSSSSSSSSSSH..',
    '..HSSESSESSSSH..',
    '..HSSSSSSSSSSH..',
    '..HSSSSSSSSSSH..',
    '...SSSSSSSSSS...',
    '..CCCCCCCCCCCC..',
    '..CCCATTTTCCCC..',
    '..CCCAAAAAACCC..',
    '.AAAAAAAAAAAAAA.',
    '.AAAAAAAAAAAAAA.',
    '.AAAAAAAAAAAAAA.',
    '..AAAAAAAAAAAA..',
    '..PPPPPPPPPPPP..',
    '..PPPPPPPPPPPP..',
    '...PPPP..PPPP...',
    '...PPPP..PPPP...',
  ],
}

// ─── Player: female ────────────────────────────────────────────────────────────
export const PLAYER_FEMALE = {
  palette: {
    H: '#6b3a10',
    S: '#e8b98c',
    E: '#2a1400',
    C: '#ffffff',
    A: '#f0ebe0',
    T: '#cc9933',
    P: '#222240',
  },
  data: [
    '...HHHHHHHHHHH..',
    '..HHHHHHHHHHHH..',
    '.HHHHHHHHHHHHH..',
    '..HHHSSSSSSSHHH.',
    '..HHSSSSSSSSSH..',
    '..HSSESSESSSSH..',
    '..HSSSSSSSSSSH..',
    '..HSSSSSSSSSSH..',
    '...SSSSSSSSSS...',
    '..CCCCCCCCCCCC..',
    '..CCCATTTTCCCC..',
    '..CCCAAAAAACCC..',
    '.AAAAAAAAAAAAAA.',
    '.AAAAAAAAAAAAAA.',
    '.AAAAAAAAAAAAAA.',
    '..AAAAAAAAAAAA..',
    '..PPPPPPPPPPPP..',
    '..PPPPPPPPPPPP..',
    '...PPPP..PPPP...',
    '...PPPP..PPPP...',
  ],
}

// ─── Hair color map ───────────────────────────────────────────────────────────
export const HAIR_COLORS: Record<string, string> = {
  brown: '#6b3a10',
  black: '#111111',
  blond: '#d4a850',
  red: '#aa3300',
}

// ─── Customer: salary man (sitting at bar) ────────────────────────────────────
export const CUST_SALARYMAN = {
  palette: {
    K: '#111111', // black hair
    S: '#e8b98c', // skin
    E: '#2a1400', // eye
    B: '#1a1a2a', // dark suit
    W: '#f5f5f5', // white shirt
    T: '#cc2222', // red tie
  },
  data: [
    '..KKKKKKKK..',
    '.KKKKKKKKKK.',
    '.KSSSSSSSSK.',
    '.KSSESSESSK.',
    '.KSSSSSSSSK.',
    '..SSSSSSSS..',
    '.BBWWWWWWBB.',
    '.BBWWTWWWBB.',
    '.BBWWTTWWBB.',
    'BBBWWWWWWBBB',
    'BBBBBBBBBBBB',
    'BBBBBBBBBBBB',
    '.BBBBBBBBBB.',
    '.BBBBBBBBBB.',
  ],
}

// ─── Customer: couple ─────────────────────────────────────────────────────────
export const CUST_COUPLE = {
  palette: {
    H: '#4a2a08', // dark hair (female)
    L: '#c49040', // light hair (male)
    S: '#e8b98c', // skin
    E: '#2a1400', // eye
    P: '#cc6688', // pink dress
    B: '#2244aa', // blue suit
  },
  data: [
    '...HHH..LLL....',
    '..HHHH.LLLL....',
    '..HSSH.LSSL....',
    '..HSSH.LSSL....',
    '...SSH..SSL....',
    '...PPP..BBB....',
    '..PPPP.BBBB....',
    '..PPPP.BBBB....',
    '..PPPP.BBBB....',
    '...PPP..BBB....',
    '...PPP..BBB....',
    '...PPP..BBB....',
  ],
}

// ─── Customer: tourist ────────────────────────────────────────────────────────
export const CUST_TOURIST = {
  palette: {
    Y: '#f5c842', // yellow hat
    S: '#deb887', // skin (slightly tanned)
    E: '#2a1400', // eye
    O: '#e06820', // orange shirt
    P: '#2255aa', // blue pants
    C: '#aaaaaa', // camera gray
  },
  data: [
    '.YYYYYYYYYY.',
    'YYYYYYYYYYYY',
    '.YSSSSSSSSY.',
    '.YSSESSESSY.',
    '.YSSSSSSSSY.',
    '..SSSSSSSS..',
    '.OOOOOOOOOO.',
    'OOOO..CC.OOO',
    'OOOOOOOOOOOO',
    'OOOOOOOOOOOO',
    '.OOOOOOOOOO.',
    'PPPPPPPPPPPP',
    'PPPPPPPPPPPP',
  ],
}

// ─── Customer: drunk gentleman ────────────────────────────────────────────────
export const CUST_DRUNK = {
  palette: {
    B: '#111111', // black hair (messy)
    S: '#e8b98c', // skin
    E: '#2a1400', // eye
    G: '#666677', // gray rumpled suit
    W: '#f0f0f0', // white shirt
    R: '#aa2200', // flushed cheeks
  },
  data: [
    'BBBB........',
    '.BBBBBBB....',
    '.BSSSSSSSB..',
    '.BSSRESSB...',
    '.BSSSSSSSB..',
    '..SSSSSSSS..',
    '.GGWWWWWWGG.',
    'GGGWWWWWWGGG',
    'GGGWWWWWWGGG',
    'GGGGGGGGGGG.',
    'GGGGGGGGGGG.',
    '.GGGGGGGGG..',
    '.GGGGGGGGG..',
  ],
}

// ─── Customer: VIP ────────────────────────────────────────────────────────────
export const CUST_VIP = {
  palette: {
    K: '#1a1a1a', // black hair (slicked)
    S: '#d8a080', // skin
    E: '#2a1400', // eye
    D: '#1a1a40', // dark navy suit
    W: '#f8f8f8', // white shirt
    G: '#d4a017', // gold cufflinks / pocket square
  },
  data: [
    '..KKKKKKKK..',
    '.KKKKKKKKKK.',
    '.KSSSSSSSSK.',
    '.KSSESSESSK.',
    '.KSSSSSSSSK.',
    '..SSSSSSSS..',
    '.DDWWWWWWDD.',
    '.DDWWGWWWDD.',
    '.DDWWWWWWDD.',
    'DDDWWWWWWDDD',
    'DDDDDDDDDDDD',
    'DDDDDDDDDDDD',
    '.DDDDDDDDDD.',
    '.DDDDDDDDDD.',
  ],
}

// ─── Glass icons (12×16) for cocktail display ─────────────────────────────────
export const GLASS_COCKTAIL = {
  palette: { L: '#aaddff', W: '#ddeeff', O: '#88aacc' },
  data: [
    '....LLLLLL....',
    '...LWWWWWWL...',
    '..LWWWWWWWWL..',
    '.LWWWWWWWWWWL.',
    '.LWWWWWWWWWWL.',
    '..LWWWWWWWWL..',
    '...LLLLLLLL...',
    '....LLLLLL....',
    '.....LLLL.....',
    '......LL......',
    '......LL......',
    '....LLLLLL....',
    '...LLLLLLLL...',
  ],
}

export const GLASS_ROCKS = {
  palette: { L: '#aaddff', W: '#ddeeff', O: '#88aacc' },
  data: [
    '.LLLLLLLLLL.',
    'LWWWWWWWWWWL',
    'LWWWWWWWWWWL',
    'LWWWWWWWWWWL',
    'LWWWWWWWWWWL',
    'LWWWWWWWWWWL',
    'LWWWWWWWWWWL',
    'LWWWWWWWWWWL',
    '.LLLLLLLLLL.',
  ],
}

export const GLASS_HIGHBALL = {
  palette: { L: '#aaddff', W: '#ddeeff' },
  data: [
    '..LLLLLL..',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '.LWWWWWWL.',
    '..LLLLLL..',
  ],
}

// ─── Tool icons (12×12) ────────────────────────────────────────────────────────
export const TOOL_SHAKER = {
  palette: { M: '#c0c0c0', D: '#888888', W: '#e8e8e8', B: '#333333' },
  data: [
    '....MMMM....',
    '...MWWWWM...',
    '..MWWWWWWM..',
    '..MWWWWWWM..',
    '..MMMMMMMMM.',
    '..MWWWWWWM..',
    '..MWWWWWWM..',
    '..MWWWWWWM..',
    '..MWWWWWWM..',
    '...MWWWWM...',
    '....MMMM....',
    '....MBBM....',
  ],
}

export const TOOL_BARSPOON = {
  palette: { M: '#c8c8c8', D: '#888888' },
  data: [
    '......M.....',
    '.....MMM....',
    '......M.....',
    '......M.....',
    '......M.....',
    '......M.....',
    '......M.....',
    '......M.....',
    '......M.....',
    '......M.....',
    '....MMMMM...',
    '....MMMMM...',
  ],
}

export const TOOL_JIGGER = {
  palette: { M: '#c0c0c0', D: '#999999', W: '#e8e8e8' },
  data: [
    '..MMMMMMMM..',
    '.MWWWWWWWWM.',
    'MWWWWWWWWWWM',
    '.MWWWWWWWWM.',
    '..MMMMMMMM..',
    '...MMMMMM...',
    '..MMMMMMMM..',
    '.MWWWWWWWWM.',
    'MWWWWWWWWWWM',
    '.MWWWWWWWWM.',
    '..MMMMMMMM..',
  ],
}
