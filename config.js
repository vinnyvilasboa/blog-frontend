import getConfig from 'next/config'

const {publicRuntimeConfig} = getConfig()

export const API = publicRuntimeConfig.PRODUCTION ? 'http://seoblog.com' : 'http://localhost:8000/api'
export const APP_NAME = publicRuntimeConfig.APP_NAME;

//this makes it easier to access our API route, just need to bring in API from config file.