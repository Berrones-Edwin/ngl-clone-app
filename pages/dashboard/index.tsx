import { useUsername } from "@/hooks/useUsername"

export default function Dashboard() {

    const { username } = useUsername()
    return (
        <>
            <main>
                <h4>{`${username.toUpperCase()}'s Dashboard`}  </h4>

                <section>
                    <article>
                        <h3>Send me a message</h3>
                        <button>send</button>
                    </article>
                </section>
                <hr />
                <section>
                    <div>
                        <button>
                            copy link
                        </button>
                    </div>
                </section>
                <hr />
                <section>
                    <div><button>Share on social media</button></div>
                </section>
            </main>
        </>
    )
}