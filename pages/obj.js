export async function getServerSideProps() {
    return {
        props: {
            user: {
                name: 'Bambang',
                location: {
                    country: 'Indonesia'
                }
            }
        }
    }
}

export default function Obj({ user }) {
    return (
        <div>{user.name} - {user.location.city}</div>
    );
}