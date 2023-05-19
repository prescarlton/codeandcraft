export interface ServerStatus {
  status: string
  online: boolean
  motd: string
  motd_json: { text: string }
  favicon: string
  error: string | null
  players: {
    max: number
    now: number
    sample: { name: string; id: string }[]
  }
  server: { name: string; protocol: number }
  last_updated: string
  duration: string
}
