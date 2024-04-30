import { createTransport } from 'nodemailer';

export const sendEmail = (req, res) => {
    const { subject, email, body } = req.body;

    // Create a Nodemailer transporter
    let transporter = createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        }
    });

    // Setup email data
    let mailOptions = {
        from: email,
        to: ['raghunandansharma615@gmail.com'],
        subject: subject,
        text: body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
};
