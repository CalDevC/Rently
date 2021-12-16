const S3 = require('aws-sdk/clients/s3');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();

//For uploading images to AMazon S3 bucket

//Gt varables from .env file
const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

//Create S3 object
const s3 = new S3({
  region,
  accessKey,
  secretAccessKey,
  signatureVersion: 'v4'
});

//Function to upload the iamge
function uploadFile(file) {

  //Create a filestream
  const fileStream = fs.createReadStream(file.path);

  //Specify parameters for upload
  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename
  }

  //Make upload request
  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;