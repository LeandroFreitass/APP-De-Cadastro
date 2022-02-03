interface Iconfig {
  endpoint?: string
  whatsappendpoint?: string
  mysuiteendpoint?: String
}

const config: Iconfig = {}

// ------------------------ ENDPOINT OS DIGITAL API ------------------------ //

// OS DIGITAL API PRODUCTION
// config.endpoint = 'https://api.osdig.com.br/'

// OS DIGITAL API STAGING
// config.endpoint = 'https://stg.api.osdig.com.br/'

// OS DIGITAL API RELEASE
// config.endpoint = 'https://release.api.osdig.com.br/'

// OS DIGITAL API DEVELOPMENT VPS CARROOK
config.endpoint = 'https://osdigapi.carrook.com.br/'

// OS DIGITAL API LOCAL
// config.endpoint = 'http://localhost:21061/v1/'

// ---------------------------------------------

config.whatsappendpoint = 'https://wa.me/55'
config.mysuiteendpoint = 'http://workg.mysuite.com.br/client/chatan.php?h='

export default config
