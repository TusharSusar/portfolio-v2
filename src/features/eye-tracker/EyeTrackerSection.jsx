import Eye from './Eye.jsx'

export default function EyeTrackerSection() {
  return (
    <section className="eye-tracker-section" aria-label="Interactive eye tracker">
      <h2>Eye tracker concept</h2>
      <div className="eye-trackers">
        <Eye />
        <Eye />
      </div>
    </section>
  )
}
