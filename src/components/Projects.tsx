import { projects, type Project } from '../data'
import Panel from './Panel'

function Icon({ kind }: { kind: Project['icon'] }) {
  return (
    <svg width="64" height="64" viewBox="0 0 16 16" shapeRendering="crispEdges" aria-hidden="true">
      <rect width="16" height="16" fill="#0B1630" />
      {kind === 'grid' && (
        <>
          <g fill="#26457F">
            <rect x="0" y="5" width="16" height="1" />
            <rect x="0" y="10" width="16" height="1" />
            <rect x="5" y="0" width="1" height="16" />
            <rect x="10" y="0" width="1" height="16" />
          </g>
          <g fill="#7DFFA8">
            <rect x="1" y="7" width="5" height="2" />
            <rect x="5" y="3" width="2" height="6" />
            <rect x="5" y="3" width="6" height="2" />
            <rect x="9" y="3" width="2" height="9" />
            <rect x="9" y="11" width="5" height="2" />
          </g>
          <rect x="12" y="11" width="3" height="3" fill="#FF7A93" />
        </>
      )}
      {kind === 'search' && (
        <>
          <rect x="2" y="2" width="8" height="8" fill="#07101F" />
          <g fill="#5ED4E8">
            <rect x="3" y="1" width="6" height="1" />
            <rect x="3" y="10" width="6" height="1" />
            <rect x="1" y="3" width="1" height="6" />
            <rect x="10" y="3" width="1" height="6" />
            <rect x="2" y="2" width="1" height="1" />
            <rect x="9" y="2" width="1" height="1" />
            <rect x="2" y="9" width="1" height="1" />
            <rect x="9" y="9" width="1" height="1" />
            <rect x="10" y="10" width="2" height="2" />
            <rect x="12" y="12" width="2" height="2" />
          </g>
          <g fill="#7DFFA8">
            <rect x="4" y="4" width="5" height="1" />
            <rect x="4" y="6" width="3" height="1" />
            <rect x="4" y="8" width="4" height="1" />
          </g>
          <rect x="8" y="6" width="1" height="1" fill="#FFC46B" />
        </>
      )}
      {kind === 'mapreduce' && (
        <>
          <g fill="#3E6AA8">
            <rect x="4" y="2" width="1" height="11" />
            <rect x="11" y="2" width="1" height="11" />
            <rect x="4" y="2" width="2" height="1" />
            <rect x="4" y="7" width="2" height="1" />
            <rect x="4" y="12" width="2" height="1" />
            <rect x="10" y="2" width="2" height="1" />
            <rect x="10" y="7" width="2" height="1" />
            <rect x="10" y="12" width="2" height="1" />
          </g>
          <g fill="#7DFFA8">
            <rect x="1" y="6" width="3" height="3" />
            <rect x="12" y="6" width="3" height="3" />
          </g>
          <g fill="#FFC46B">
            <rect x="6" y="1" width="4" height="3" />
            <rect x="6" y="6" width="4" height="3" />
            <rect x="6" y="11" width="4" height="3" />
          </g>
        </>
      )}
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="wrap section">
      <h2>PROJECTS</h2>
      <div className="grid">
        {projects.map((p) => (
          <Panel key={p.id} title={p.id} className="card" bodyClassName="card-body">
            <Icon kind={p.icon} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <div className="card-foot">
              <a className="btn" href={p.href}>
                &gt; open repo
              </a>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  )
}
