import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
import { ServerStatus } from '@/types/ServerStatus'
import axios from 'axios'
import Card from '@/components/Card'
import Head from 'next/head'

const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Home({ data }: { data: ServerStatus }) {
  return (
    <>
      <Head>
        <title>CODE/+/CRAFT</title>
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center  p-24 ${firaCode.className}`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
          <Card>CODE/+/CRAFT</Card>
          <Card>
            Current Players: {data.players.now} / {data.players.max}
          </Card>
        </div>
        <div className="flex gap-2">
          {data.players.sample.map((player) => (
            <Card key={player.id} className="w-48 h-48 flex flex-col">
              <img
                src={`https://mineskin.eu/helm/${player.name}`}
                alt={player.name}
              />
              {player.name}
            </Card>
          ))}
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get<ServerStatus>(
    'https://mcapi.us/server/status?ip=mc.codeandtrust.dev&port=25565'
  )
  const data = res.data

  return { props: { data } }
}
