let hostUrl
let hostGatewayUrl
let domainUrl
let casHostUrl
let rewardHostUrl
let publicName

// development env for 'npm run dev'
if (process.env.NODE_ENV === 'development') {
  hostUrl = process.env.NEXT_PUBLIC_API_HOST_NAME_DEV
  hostGatewayUrl = process.env.NEXT_PUBLIC_API_HOST_GATEWAY_NAME_DEV
  domainUrl = process.env.NEXT_PUBLIC_DOMAIN_DEV
  casHostUrl = process.env.NEXT_PUBLIC_CAS_HOST_DEV
  rewardHostUrl = process.env.NEXT_PUBLIC_REWARD_HOST_DEV
  publicName = ''
  // testing env
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'testing') {
  hostUrl = process.env.NEXT_PUBLIC_API_HOST_NAME_TESTING
  hostGatewayUrl = process.env.NEXT_PUBLIC_API_HOST_GATEWAY_NAME_TESTING
  domainUrl = process.env.NEXT_PUBLIC_DOMAIN_TESTING
  casHostUrl = process.env.NEXT_PUBLIC_CAS_HOST_TESTING
  rewardHostUrl = process.env.NEXT_PUBLIC_REWARD_HOST_TESTING
  publicName = ''
  // uat env
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'uat') {
  hostUrl = process.env.NEXT_PUBLIC_API_HOST_NAME_UAT
  hostGatewayUrl = process.env.NEXT_PUBLIC_API_HOST_GATEWAY_NAME_UAT
  domainUrl = process.env.NEXT_PUBLIC_DOMAIN_UAT
  casHostUrl = process.env.NEXT_PUBLIC_CAS_HOST_UAT
  rewardHostUrl = process.env.NEXT_PUBLIC_REWARD_HOST_UAT
  publicName = ''
  // production env
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'prod') {
  hostUrl = process.env.NEXT_PUBLIC_API_HOST_NAME_PROD
  hostGatewayUrl = process.env.NEXT_PUBLIC_API_HOST_GATEWAY_NAME_PROD
  domainUrl = process.env.NEXT_PUBLIC_DOMAIN_PROD
  casHostUrl = process.env.NEXT_PUBLIC_CAS_HOST_PROD
  rewardHostUrl = process.env.NEXT_PUBLIC_REWARD_HOST_PROD
  publicName = ''
} else if (process.env.NEXT_PUBLIC_BUILD_ENV === 'ci') {
  hostUrl = process.env.NEXT_PUBLIC_API_HOST_NAME_CI
  hostGatewayUrl = process.env.NEXT_PUBLIC_API_HOST_GATEWAY_NAME_CI
  domainUrl = process.env.NEXT_PUBLIC_DOMAIN_CI
  casHostUrl = process.env.NEXT_PUBLIC_CAS_HOST_CI
  rewardHostUrl = process.env.NEXT_PUBLIC_REWARD_HOST_CI
  publicName = ''
}

export const ROOT = ''
export const PUBLIC_NAME = publicName
export const HOST_URL = hostUrl
export const HOST_GATEWAY_URL = hostGatewayUrl
export const DOMAIN_URL = domainUrl
export const CAS_HOST_URL = casHostUrl
export const REWARD_HOST_URL = rewardHostUrl
