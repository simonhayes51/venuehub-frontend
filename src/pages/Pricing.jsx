export default function Pricing(){
  return (
    <div className="wrapper section">
      <h2>Pricing</h2>
      <div className="card-grid">
        <div className="retro-card">
          <h3>Starter</h3>
          <p>Free shortlist, basic search.</p>
          <div className="row" style={{marginTop:8}}>
            <button className="tape-btn"><span className="dot" />Get Started</button>
          </div>
        </div>
        <div className="retro-card">
          <h3>Pro</h3>
          <p>Advanced search, priority listing, messaging.</p>
          <div className="row" style={{marginTop:8}}>
            <button className="tape-btn primary"><span className="dot" />Go Pro – £9/mo</button>
          </div>
        </div>
        <div className="retro-card">
          <h3>Agency</h3>
          <p>Team accounts, multi-venue tools, API access.</p>
          <div className="row" style={{marginTop:8}}>
            <button className="tape-btn"><span className="dot" />Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  )
}
