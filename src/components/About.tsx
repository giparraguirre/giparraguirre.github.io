import { profile } from '../data'
import Panel from './Panel'

export default function About() {
  return (
    <section id="about" className="wrap section">
      <Panel title="whoami.sh" bodyClassName="terminal">
        <div>
          <span className="prompt">$</span> whoami
          <br />
          <span className="out">
            {profile.name}, B.S. Computer Science at {profile.university}, class of {profile.year}
          </span>
        </div>
        <div>
          <span className="prompt">$</span> cat interests.txt
          <br />
          <span className="out">{profile.interests}</span>
        </div>
        <div>
          <span className="prompt">$</span> echo $STATUS
          <br />
          <span className="warn">{profile.status}</span>
        </div>
        <div>
          <span className="prompt">$</span> <span className="cursor" />
        </div>
      </Panel>
    </section>
  )
}
