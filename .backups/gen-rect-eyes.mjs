import fs from 'fs'
const N=48
const g=Array.from({length:N},()=>Array(N).fill('.'))
const set=(x,y,c)=>{ if(x>=0&&x<N&&y>=0&&y<N) g[y][x]=c }
const row=(y,a,b,c)=>{for(let x=a;x<=b;x++)set(x,y,c)}
const DX=x=>x+0.5-24
// ---------- neck
for(let y=30;y<=36;y++) for(let x=20;x<=27;x++) set(x,y,y<=34?'s':'S')
// ---------- head
const MW=10.2
const hw=yy=> yy<22 ? MW*Math.sqrt(Math.max(0,1-((yy-22)/14)**2)) : MW*Math.sqrt(Math.max(0,1-((yy-22)/11.5)**2))
for(let y=8;y<=33;y++){ const yy=y+0.5, w=hw(yy)
  for(let x=0;x<N;x++){ const dx=DX(x); if(Math.abs(dx)>w) continue
    let c='S'
        if(dx>0&&Math.abs(dx)>w-1.1&&yy>17) c='s'
    if(yy>=31.5&&Math.abs(dx)>w-2.2) c='s'
    set(x,y,c) } }
// ears
for(let y=20;y<=25;y++){ set(12,y,'S');set(13,y,'s');set(34,y,'s');set(35,y,'S') }
set(12,25,'s');set(35,25,'s')
// ---------- hair (smooth dome, swept back in fanning strands, short sides)
const hairline=dx=>12.3+0.055*dx*dx
for(let y=1;y<=24;y++){ const yy=y+0.5
  for(let x=0;x<N;x++){ const dx=DX(x)
    const e=(dx/12.4)**2+((yy-16.2)/14.8)**2
    if(e>1) continue
    const a=Math.abs(dx)
    const side = a>=9.2 && yy<(16.5+(a<10.2?2.5:0))
    if(!(yy<hairline(dx)||side)) continue
    const fx=24,fy=17
    const th=Math.atan2(dx,-(yy-fy)+0.001), r=Math.hypot(dx,yy-fy)
    const id=(((Math.floor(th*10+r*0.12))%4)+4)%4
    let c='H'
    if(id===1) c='m'
    if(id===3&&yy<14) c='h'
    if(id===0&&yy<10&&dx<4) c='h'
    if(e>0.9) c='H'
    set(x,y,c) } }
// small curl at the hairline
// ---------- brows (soft arches, outer end drops)
const brow=(a,outerLeft)=>{
  set(a+2,15,'H');set(a+3,15,'H')
  row(16,a+1,a+4,'H')
  set(outerLeft?a:a+5,17,'H') }
brow(16,true);brow(26,false)
// ---------- eyes: white sclera, brown iris
const eye=(a,irisCol)=>{ row(19,a,a+4,'K')
  for(const y of [20,21,22]) row(y,a,a+4,'W')
  for(const y of [20,21,22]){ set(irisCol,y,'I');set(irisCol+1,y,'I') }
  set(irisCol,20,'P'); set(irisCol+1,22,'B');set(irisCol,22,'B')
  row(23,a+1,a+3,'s') }
eye(16,18);eye(27,28)
// ---------- nose
for(let y=21;y<=24;y++) set(23,y,'d')
row(25,23,24,'d');set(22,25,'d')
// ---------- mouth: small open smile, teeth on top
set(19,27,'M');set(28,27,'M')
row(27,20,27,'W')
row(28,20,27,'M')
row(29,22,25,'M')
// ---------- jacket
const ytop=a=> 35+0.38*Math.max(0,a-5)+ (a>20.5?(a-20.5)*1.5:0)
const ho=y=>Math.max(0,6.5-(y-34)*0.55)
for(let y=34;y<N;y++){ for(let x=0;x<N;x++){ const dx=DX(x), a=Math.abs(dx)
  if(a<=22.6 && y>=ytop(a) && y>=36){
    let c='J'
    if(y<ytop(a)+1.4) c='E'
    else if(x%4===0&&y>41) c='q'
    if(a>18.5&&y>=41) c='j'
    if(dx>12&&y>40&&c==='J') c='j'
    set(x,y,c) } } }
// shirt in opening + lapels
for(let y=34;y<N;y++){ const h=ho(y)
  for(let x=0;x<N;x++){ const dx=DX(x), a=Math.abs(dx)
    if(y>=34&&a<=h&&y<46){ const neck = y<=37 && a<=3.9-(y-34)*1.3
      if(neck) set(x,y, y>=34?'s':'S')
      else set(x,y, a>h-1.1 ? 'c':'C') }
    else if(y>=36&&a>h&&a<=h+3.4&&y<47){ set(x,y, a<=h+1.1?'E': a>h+2.5?'j':'J') } } }
// ---------- tie
row(37,22,25,'t');row(38,22,25,'T');row(39,22,25,'T');set(22,38,'p');set(22,39,'p');row(40,22,25,'t')
for(let y=41;y<N;y++){ const w=y>=45?[21,26]:[22,25]; row(y,w[0],w[1],'T'); set(w[0],y,'p'); set(w[1],y,'t'); if(y>=45)set(w[1]-1,y,'t')}
// ---------- outline
const solid=g.map(r=>r.map(c=>c!=='.'))
for(let y=0;y<N;y++)for(let x=0;x<N;x++){ if(solid[y][x]) continue
  if((y>0&&solid[y-1][x])||(y<N-1&&solid[y+1][x])||(x>0&&solid[y][x-1])||(x<N-1&&solid[y][x+1])) g[y][x]='O' }
const rows=g.map(r=>r.join(''))
const ts=`/** ${N}x${N} head-and-shoulders sprite. One string per row, one char per pixel. '.' is transparent. */
export const PALETTE: Record<string, string> = {
  // hair
  H: '#1b1210', m: '#2e1f18', h: '#5a3d2d',
  // skin
  S: '#dfa97c', l: '#ecc09a', s: '#b8805a', d: '#94603f', R: '#e0906c',
  // face details
  K: '#1b0f0a', B: '#4a2a1a', I: '#7a4a2c', P: '#ffffff', O: '#2a1812', W: '#f2f6ff', M: '#8a3c3c', L: '#c4665f',
  // jacket
  J: '#243b7a', j: '#1a2c5e', E: '#3e6aa8', q: '#2d4690',
  // shirt
  C: '#f2f6ff', c: '#c9d5ee',
  // tie
  T: '#ff7a93', t: '#d4546f', p: '#ff9db0',
}

export const SPRITE: string[] = [
${rows.map(r=>`  '${r}',`).join('\n')}
]
`
fs.writeFileSync('src/components/avatarSprite.ts',ts)
console.log(rows.map((r,i)=>String(i).padStart(2)+' '+r).join('\n'))
