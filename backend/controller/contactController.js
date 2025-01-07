const  sendEmail  = require('../utlis/sendMail')

const handleContactForm = async (req, res) => {
    try {
      // 1. Extract form data from the request body
      const { name, email, phone, message } = req.body
  
      // 2. Validate the data (basic example)
      if (!name || !email || !message) {
        return res.status(200).json({ data:false, message:"Missing required fields", error: 'Missing required fields' })
      }
  
      // 3. Construct an email message (plain text or HTML)
      // Usually, you might send to your own inbox to notify you
      // or forward it to the user, etc.
      const subject = 'New Contact Form Submission'
      const html = `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
  
      // 4. Send the email using the utility
      // You could also send a confirmation email to the user, if needed
      await sendEmail({
        to: email,
        subject,
        html,
      })
  
      // 5. Return a success response to the client
      res.json({ data: true, message: 'Email sent successfully' })
    } catch (error) {
      res.status(500).json({ data:false, message:error.message, error: error.message })
    }
  }
  

  module.exports = {
    handleContactForm,
  }

