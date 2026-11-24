import { EYE_ROWS, EYE_RUNS, EYE_TOP, PALETTE, SPRITE } from './avatarSprite'

type Run = { x: number; y: number; w: number; c: string }

/** Merge horizontal runs of the same colour into single rects. */
function buildRuns(): Run[] {
  const runs: Run[] = []
  SPRITE.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const ch = row[x]
      let w = 1
      while (x + w < row.length && row[x + w] === ch) w++
      if (PALETTE[ch]) runs.push({ x, y, w, c: PALETTE[ch] })
      x += w
    }
  })
  return runs
}

const RUNS = buildRuns()
const SIZE = SPRITE.length

export default function PixelAvatar() {
  return (
    <svg
      className="avatar"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel-art portrait of Gian Marco: smiling, dark hair, navy suit and pink tie"
    >
      {RUNS.map((r, i) => (
        <rect key={i} x={r.x} y={r.y} width={r.w} height={1} fill={r.c} />
      ))}
      <g className="blink-lid">
        {EYE_RUNS.map(([x, w]) => (
          <g key={x}>
            <rect x={x} y={EYE_TOP} width={w} height={EYE_ROWS} fill={PALETTE.S} />
            <rect x={x} y={EYE_TOP + 2} width={w} height={1} fill={PALETTE.K} />
          </g>
        ))}
      </g>
    </svg>
  )
}
