const express = require('express');
const { sendSigningLink } = require('../controllers/signaturelyController'); // Correct file path

const router = express.Router();

router.post('/send-signing-link', sendSigningLink);

module.exports = router;
