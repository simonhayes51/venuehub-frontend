export default function ErrorPanel({error}){
  return (
    <div className="card p-4 border border-red-500/30">
      <div className="text-red-300">Error</div>
      <pre className="text-sm text-white/70 mt-1 whitespace-pre-wrap">{String(error)}</pre>
    </div>
  );
}