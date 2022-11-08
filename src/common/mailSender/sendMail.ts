import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv' 
const forMailUser = process.env.GMAIL_USER as string;
const forMailPass = process.env.GMAIL_PASS as string;
const fromUser = process.env.FROM as string;
const userSubject = process.env.SUBJECT as string;
dotenv.config();
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: forMailUser,
        pass: forMailPass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});
export = {
    sendEmail(from: string, to: string, subject: string, html: string): Promise<unknown> {
        return new Promise((resolve, reject) => {
            transport.sendMail(
                { from: fromUser, subject, to, html },
                (err, info) => {
                    if (err) reject(err);
                    resolve(info);
                },
            );
        });
    },
};