module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /node_modules\/@saas-ui\/(pro|billing|charts|date-picker|features|onboarding|router)\/.*\.tsx?/,
      use: [defaultLoaders.babel],
    })
    return config
  },
}