module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('doe4mucdz'),
        api_key: env('992987985328476'),
        api_secret: env('g2OSMsPS9hjVe0gNH6jNPreeADw'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
  });