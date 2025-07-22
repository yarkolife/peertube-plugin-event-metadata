function register ({ registerHook }) {
  registerHook({
    target: 'filter:video-watch.video-plugin-metadata.result',
    handler: (metadata, { video }) => {
      const pd = video.pluginData
      if (!pd) return metadata

      if (pd.senderResponsible) {
        const value = pd.senderResponsible
        const link = `/search?search=${encodeURIComponent(value)}`
        metadata.push({
          label: 'Sendeverantwortung',
          safeHTML: `<a href="${link}">${value}</a>`
        })
      }

      if (pd.authorName) {
        metadata.push({
          label: 'Имя автора',
          value: pd.authorName
        })
      }

      return metadata
    }
  })
}

export {
  register
}
