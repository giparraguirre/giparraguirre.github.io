import { profile } from '../data'
import ServerRoom from './ServerRoom'
import Panel from './Panel'
import PixelAvatar from './PixelAvatar'

export default function Hero() {
  return (
    <header className="wrap hero">
      <div className="hero-top">
      <div className="hero-text">
        <span className="hello">&gt; hello, world</span>
        <h1>
          I’m {profile.name},
          <br />
          {profile.headline}
          <span className="cursor cursor-lg" />
        </h1>
        <p className="lede">{profile.intro}</p>
      </div>
      <Panel title="me.png" className="avatar-panel" bodyClassName="avatar-body">
        <PixelAvatar />
      </Panel>
      </div>
      <div className="px scene">
        <ServerRoom />
      </div>
    </header>
  )
}
