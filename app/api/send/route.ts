import {Resend} from 'resend';
import {EmailTemplate} from "@/components/email-template";
import {NextRequest, NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Hello world',
            react: EmailTemplate({name: ''}),
            text: 'Hello world',
        });

        if (error) {
            return Response.json({error}, {status: 500});
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({error}, {status: 500});
    }
}
