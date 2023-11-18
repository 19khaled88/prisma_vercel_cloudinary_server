import cloudinary from 'cloudinary'

const cloudinaryConnect = cloudinary.v2

cloudinaryConnect.config({
    cloud_name: process.env.CLOUDNARY_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET
})