const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.post('/api/quotes', async (req, res) => {
  try {
    const {
      fullName, company, email, phone,
      serviceRequired, cargoType, origin,
      destination, estimatedWeight, preferredDate,
      additionalDetails
    } = req.body;

    const quote = await prisma.quote.create({
      data: {
        fullName,
        company,
        email,
        phone,
        serviceRequired,
        cargoType,
        origin,
        destination,
        estimatedWeight: parseFloat(estimatedWeight) || 0,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        additionalDetails,
      }
    });

    // In production, this would trigger email notifications via SendGrid/AWS SES
    console.log(`[IOM Transit] New Quotation Request: ${quote.id} from ${company}`);

    res.status(201).json({
      success: true,
      message: 'Quotation request received. A logistics expert will respond within 2 business hours.',
      id: quote.id
    });
  } catch (error) {
    console.error('Error creating quote:', error);
    res.status(500).json({ success: false, error: 'Internal logistics processing error.' });
  }
});

// Global Fleet API
app.get('/api/fleet', async (req, res) => {
  try {
    const fleet = await prisma.fleet.findMany({ orderBy: { order: 'asc' } });
    res.json(fleet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve fleet data.' });
  }
});

app.listen(PORT, () => {
  console.log(`IOM Transit Backend Authority running on port ${PORT}`);
});
