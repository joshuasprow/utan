const https = require('https');
const key = 'AIzaSyAjqs_6QtnJU5p7dZMybfGhxDkNWXXZiNM';

export const getLocations = placeId => {
  return new Promise((resolve, reject) => {
    const request = https.get(
      'https://jsprow-cors.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?' +
        `placeid=${placeId}` +
        `&key=${key}`,
      res => {
        if (res.statusCode < 200 || res.statusCode > 299) {
          reject(
            new Error('Failed to load page, status code: ' + res.statusCode),
          );
        }

        let body = '';

        res.on('data', chunk => {
          body += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(body).result);
        });
      },
    );

    request.on('error', err => {
      reject(err);
    });
  });
};
