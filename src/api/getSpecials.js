const https = require('https');
const url = 'https://cdn.contentful.com';
const spaceId = 'mgoknao9o6b6';
const token =
  '1043a6243e27b9d17435703aa82e53c1df87d842e4e4ddb64ac26c6237860cb4';

export const getSpecials = () => {
  return new Promise((resolve, reject) => {
    const request = https.get(
      `${url}/spaces/${spaceId}/entries?access_token=${token}&content_type=special`,
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
          resolve(JSON.parse(body));
        });
      },
    );

    request.on('error', err => {
      reject(err);
    });
  });
};
