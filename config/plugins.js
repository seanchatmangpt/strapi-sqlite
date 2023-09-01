module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  "measurement-protocol": {
    config: {
      apiSecret: "123",
      measurementId: "123",
      useValidationServer: false,
    },
  },
});
