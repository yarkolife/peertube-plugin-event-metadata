async function register ({
  registerHook,
  storageManager
}) {

  {
    registerHook({
      target: 'action:api.video.updated',
      handler: ({ video, body }) => {
        const pluginData = body.pluginData
        if (!pluginData) return

        const json = {
          senderResponsible: pluginData.senderResponsible,
          authorName: pluginData.authorName
        }

        storageManager.storeData('event-metadata-' + video.uuid, json)
      }
    })

    registerHook({
      target: 'filter:api.video.get.result',
      handler: async (video) => {
        if (!video) return video
        if (!video.pluginData) video.pluginData = {}

        const result = await storageManager.getData('event-metadata-' + video.uuid)
        if (result) Object.assign(video.pluginData, result)

        return video
      }
    })
  }
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
