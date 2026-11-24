import { links, profile } from '../data'
import Panel from './Panel'

export default function Contact() {
  return (
    <section id="contact" className="wrap section last">
      <Panel title="contact.sh" bodyClassName="terminal">
        <div>
          <span className="prompt">$</span> ssh hello@{profile.domain}
        </div>
        <div className="out">connection established. say hi:</div>
        <div className="btn-row">
          {links.map((l) => (
            <a className="btn" key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="copyright">
          © {profile.year} {profile.name}
        </div>
      </Panel>
    </section>
  )
}
