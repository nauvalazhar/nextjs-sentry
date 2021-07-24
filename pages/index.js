import { captureException, setContext } from "@sentry/nextjs";

export async function getServerSideProps() {
  try {
    const a = await fetch('https://github.com/aksdjlaksjdklasd', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ajsdlkajslkdajsd alsdasd'
      }
    });
    const r = await a.json();
  } catch (e) {
    setContext("getUserInfo", {
      id: 12,
      token: 'asdasdajfl09123'
    });
    captureException(e);
  }

  return {
    props: {}
  }
}

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
