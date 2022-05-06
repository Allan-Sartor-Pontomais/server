import { SendMailData } from './../mail.adapter';
import { MailAdapter } from "../mail.adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "baa9df93219b81",
    pass: "2b87f61fa65b9c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Allan Gustavo <allansartor@outlook.com>',
    subject,
    html: body, 
  })
  }

}