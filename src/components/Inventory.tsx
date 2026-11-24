import { inventory } from '../data'
import Panel from './Panel'

export default function Inventory() {
  return (
    <section id="inventory" className="wrap section">
      <h2>INVENTORY</h2>
      <div className="grid">
        {inventory.map((group) => (
          <Panel key={group.title} title={group.title} bodyClassName="chips">
            {group.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </Panel>
        ))}
      </div>
    </section>
  )
}
