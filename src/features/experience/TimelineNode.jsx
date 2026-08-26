export default function TimelineNode({ item }) {
  return (
    <li className="timeline-item">
      <div className="timeline-dot" aria-hidden="true" />
      <div>
        <p className="timeline-period">{item.period}</p>
        <h3>{item.role}</h3>
        <p className="timeline-company">{item.company}</p>
        <p>{item.description}</p>
      </div>
    </li>
  )
}
