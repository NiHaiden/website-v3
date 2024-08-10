import * as React from 'react';

interface EmailTemplateProps {
    name?: string;
    email?: string;
    message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
                                                                          name,
                                                                          email, message
                                                                      }) => (
    <div>
        <h1>{name} has sent you a message!</h1>
        <p><strong>Their Email:</strong> {email}</p>
        <p><strong>Message:</strong> {message}</p>
    </div>
);