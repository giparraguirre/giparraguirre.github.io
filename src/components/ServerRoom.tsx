// Pixel-art scene drawn on a 160x80 grid. One SVG unit = one "pixel".
// Blinking LEDs use the .b1/.b2/.b3 classes from styles.css.

type Led = [color: string, blink?: 'b1' | 'b2' | 'b3']

const GREEN = '#7DFFA8'
const AMBER = '#FFC46B'
const PINK = '#FF7A93'

function Unit({ x, y, w, h, side, leds }: { x: number; y: number; w: number; h: number; side: 'left' | 'right'; leds: Led[] }) {
  // left racks: LEDs on the left, vents on the right. right racks: the reverse.
  const ledPos =
    side === 'left'
      ? [[x + 2, y + 3], [x + 6, y + 3], [x + 2, y + 7]]
      : [[x + 24, y + 3], [x + 28, y + 3]]
  const ventX = side === 'left' ? x + 12 : x + 2
  const vents = side === 'left' ? [3, 5, 7] : [3, 5]
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} fill="#1F3A6E" />
      <rect x={x} y={y} width={w} height={1} fill="#2F5192" />
      {vents.map((dy) => (
        <rect key={dy} x={ventX} y={y + dy} width={18} height={1} fill="#3E6AA8" />
      ))}
      {leds.map(([color, blink], i) => (
        <rect key={i} className={blink} x={ledPos[i][0]} y={ledPos[i][1]} width={2} height={2} fill={color} />
      ))}
    </g>
  )
}

const leftUnits: { y: number; leds: Led[] }[] = [
  { y: 12, leds: [[GREEN, 'b1'], [AMBER], [GREEN, 'b2']] },
  { y: 25, leds: [[GREEN, 'b3'], [PINK, 'b1'], [GREEN]] },
  { y: 38, leds: [[AMBER, 'b2'], [GREEN], [GREEN, 'b3']] },
  { y: 51, leds: [[GREEN, 'b1'], [GREEN, 'b2'], [AMBER]] },
]

const rightUnits: { y: number; leds: Led[] }[] = [
  { y: 16, leds: [[GREEN, 'b2'], [AMBER, 'b1']] },
  { y: 28, leds: [[GREEN, 'b3'], [GREEN]] },
  { y: 40, leds: [[PINK, 'b1'], [GREEN, 'b2']] },
  { y: 52, leds: [[AMBER], [GREEN, 'b3']] },
]

export default function ServerRoom() {
  return (
    <svg
      viewBox="0 0 160 80"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel art of a dim server room: two racks with blinking lights, a desk with a monitor showing a terminal, a plant and a coffee mug"
    >
      <rect width="160" height="80" fill="#0B1630" />
      <g fill="#0F1E40">
        <rect y="14" width="160" height="2" />
        <rect y="30" width="160" height="2" />
        <rect y="46" width="160" height="2" />
      </g>

      {/* left rack */}
      <rect x="6" y="8" width="40" height="64" fill="#2C4C8C" />
      <rect x="8" y="10" width="36" height="60" fill="#12234A" />
      {leftUnits.map((u) => (
        <Unit key={u.y} x={10} y={u.y} w={32} h={11} side="left" leds={u.leds} />
      ))}
      <rect x="10" y="64" width="32" height="4" fill="#0B1630" />

      {/* right rack */}
      <rect x="114" y="12" width="40" height="60" fill="#2C4C8C" />
      <rect x="116" y="14" width="36" height="56" fill="#12234A" />
      {rightUnits.map((u) => (
        <Unit key={u.y} x={118} y={u.y} w={32} h={10} side="right" leds={u.leds} />
      ))}

      {/* cables */}
      <g fill="#2E8FB0">
        <rect x="46" y="22" width="1" height="36" />
        <rect x="46" y="58" width="12" height="1" />
        <rect x="110" y="26" width="1" height="30" />
        <rect x="104" y="56" width="7" height="1" />
        <rect x="46" y="30" width="8" height="1" />
      </g>

      {/* monitor */}
      <rect x="56" y="18" width="46" height="34" fill="#2C4C8C" />
      <rect x="56" y="18" width="46" height="2" fill="#3E6AA8" />
      <rect x="59" y="22" width="40" height="26" fill="#07101F" />
      <g fill={GREEN}>
        <rect x="62" y="25" width="3" height="2" />
        <rect x="67" y="25" width="14" height="2" />
        <rect x="62" y="30" width="22" height="2" />
        <rect x="62" y="35" width="10" height="2" />
        <rect x="62" y="40" width="3" height="2" />
      </g>
      <rect className="b1" x="74" y="40" width="3" height="3" fill={GREEN} />
      <rect x="87" y="35" width="8" height="2" fill="#5ED4E8" />
      <rect x="73" y="52" width="12" height="4" fill="#1F3A6E" />
      <rect x="66" y="56" width="26" height="2" fill="#2C4C8C" />

      {/* desk */}
      <rect y="60" width="160" height="3" fill="#3E6AA8" />
      <rect y="63" width="160" height="17" fill="#0F1E40" />
      <g fill="#1A2F5E">
        <rect x="8" y="66" width="30" height="12" />
        <rect x="122" y="66" width="30" height="12" />
      </g>
      <g fill="#3E6AA8">
        <rect x="21" y="71" width="4" height="2" />
        <rect x="135" y="71" width="4" height="2" />
      </g>

      {/* keyboard */}
      <rect x="62" y="58" width="34" height="2" fill="#7FA6E0" />

      {/* mug + steam */}
      <rect x="100" y="54" width="7" height="6" fill={AMBER} />
      <rect x="107" y="55" width="2" height="3" fill={AMBER} />
      <rect x="100" y="54" width="7" height="1" fill="#FFE2A6" />
      <g className="st" fill="#8FB0DD">
        <rect x="102" y="50" width="1" height="2" />
        <rect x="104" y="49" width="1" height="2" />
      </g>

      {/* plant */}
      <rect x="48" y="54" width="6" height="6" fill="#B5543A" />
      <rect x="48" y="54" width="6" height="1" fill="#D87A5E" />
      <g fill="#3DBB6E">
        <rect x="50" y="48" width="2" height="6" />
        <rect x="47" y="49" width="3" height="2" />
        <rect x="52" y="46" width="3" height="2" />
        <rect x="48" y="45" width="2" height="2" />
      </g>
    </svg>
  )
}
