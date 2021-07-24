export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => {
        throw new Error("Sentry Frontend Error");
      }}>
        Throw error
      </button>
    </div>
  )
}
