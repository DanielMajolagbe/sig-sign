const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const sendSigningLink = async (req, res) => {
  const userEmail = req.body.email;

  try {
    const response = await axios.post(
      'https://api.signaturely.com/api/v1/document_sign/api/request_by_template',
      {
        email: userEmail,
        template_id: process.env.SIGNATURELY_TEMPLATE_ID,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.SIGNATURELY_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).send({
      message: 'Signing link sent successfully',
      data: response.data,
    });
  } catch (error) {
    console.error('Error sending document:', error.response?.data || error.message || error);
    res.status(error.response?.status || 500).send({
      message: 'Error sending signing link',
      error: error.response?.data || error.message || error,
    });
  }
};

module.exports = { sendSigningLink };
