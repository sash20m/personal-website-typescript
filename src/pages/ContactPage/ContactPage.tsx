import React, { useState } from 'react';
import { Button } from 'ui/atoms/Button/Button';
import { Input } from 'ui/atoms/Input/Input';
import { Textarea } from 'ui/atoms/Textarea/Textarea';
import { Layout } from 'ui/organisms/Layout/Layout';

import './ContactPage.scss';

const defaultErrorState = {
  firstName: '',
  lastName: '',
  subject: '',
  email: '',
  message: '',

  status: 0,
};

export const ContactPage = (): React.ReactElement => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [errors, setErrors] = useState(defaultErrorState);

  const onSubmit = () => {
    const data = {
      firstName,
      lastName,
      subject,
      email,
      message,
    };

    setIsButtonLoading(true);
    setTimeout(() => setIsButtonLoading(false), 3000);
    const fakeErrors = {
      firstName: 'too short',
      lastName: 'too short',
      subject: 'its too long',
      email: 'not an email type',
      message: 'too short',

      status: 400,
    };

    setErrors(fakeErrors);

    console.log(data, 'this is the form');
    // API CALL
  };

  return (
    <Layout>
      <div className="contact">
        <div className="contact__form">
          <div className="contact__form__title"> Shoot me an email</div>
          <div className="contact__form__name">
            <div className="mr-20">
              <Input
                placeholder="First Name"
                className="mr-20"
                value={firstName}
                errorMessage={errors.firstName}
                onChange={setFirstName}
              />
            </div>
            <div>
              <Input
                placeholder="Last Name"
                value={lastName}
                errorMessage={errors.lastName}
                onChange={setLastName}
              />
            </div>
          </div>
          <Input
            placeholder="Subject"
            className="mt-20"
            value={subject}
            errorMessage={errors.subject}
            onChange={setSubject}
          />
          <Input
            placeholder="Email"
            className="mt-20"
            value={email}
            errorMessage={errors.email}
            onChange={setEmail}
          />
          <Textarea
            placeholder="Message"
            className="mt-20"
            value={message}
            errorMessage={errors.message}
            onChange={setMessage}
          />
        </div>

        <Button text="Send" loading={isButtonLoading} onClick={onSubmit} />
      </div>
    </Layout>
  );
};
