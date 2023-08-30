import ky from 'ky'

export async function getUserInfoByName(name: string) {
  // delay 1s to show loading demo
  await new Promise(resolve => setTimeout(resolve, 1000))
  const res = await ky.get(`https://api.github.com/users/${name}`).json<UserInfo>()
  return res
}

interface UserInfo {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email?: any
  hireable?: any
  bio: string
  twitter_username?: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}
