import React, { useState, useEffect } from 'react';
import { styled, keyframes } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';


const ContactContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: {
    sm: '720px',
    md: '1236px',
  },
  width: '100%',
  margin: '0 auto',
  marginBottom: '1600px',
}));

const VideoContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxHeight: '600px',
  overflow: 'hidden',
  border: `6px solid ${theme.palette.primary.main}`,
}));

const Video = styled('video')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

const TypingEffect = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: theme.palette.text.primary,
  zIndex: 2,
  fontSize: '125px',
  fontWeight: 'bold',
  whiteSpace: 'pre',
  animation: '$typing-effect 3s steps(40) 1s forwards',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + -1285px)',
  right: 10,
  width: '50%',
  height: '500px',
  borderRadius: '35% 0 0 0',
  overflow: 'hidden',
  border: `6px solid ${theme.palette.primary.main}`,
}));

const CurvedImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'relative',
}));

const IconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + -455px)',
  left: '50px',
  transform: 'translateY(-100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CircleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '200px',
}));

const Circle = styled('div')(({ theme }) => ({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  border: `6px solid ${theme.palette.primary.main}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '60px',
}));


const LocationIcon = styled(LocationOnIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '150px',
}));

const PhoneIconCircle = styled(PhoneIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '150px',
}));

const EmailIconCircle = styled(EmailIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '150px',
}));

const FaintBlueTint = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.primary.main,
  opacity: 0.4,
}));

const BoxContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex',
  marginTop: '180px',
  marginLeft: '285px', // Adjust the left margin
}));

const Box = styled('div')(({ theme }) => ({
  width: '35%',
  padding: '20px',
  border: `6px solid ${theme.palette.primary.main}`,
  borderRadius: '10px',
  marginBottom: '80px',
}));

const BoxHeader = styled('h2')(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  marginBottom: '10px',
  textAlign: 'center'
}));

const BoxText = styled('p')(({ theme }) => ({
  fontSize: '18px',
  textAlign: 'center'
}));

const ClickablePhoneNumber = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'underline',
  cursor: 'pointer',
}));

const ClickableAddress = styled(ClickablePhoneNumber)({
  color: 'inherit',
  textDecoration: 'none',
});

const Text = styled('p')(({ theme }) => ({
  fontSize: '124px',
  fontWeight: 'bold',
  textAlign: 'center', // Center the text horizontally
  width: '100%', // Set the width to 100%
  marginTop: '0px',
  marginLeft: '-125px',
  color: 'orange',
  textDecorationColor: theme.palette.primary.main
}));

const FormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-85px',
  marginLeft: '120px',
  border: `6px solid orange`,
  width: '600px',
  height: '600px'
}));

const FormInput = styled('input')(({ theme }) => ({
  width: '400px',
  height: '65px',
  marginBottom: '20px',
  padding: '5px',
  fontSize: '16px',
  borderRadius: '5px',
  border: `2px solid ${theme.palette.primary.main}`,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const FormField = styled('div')(({ theme }) => ({
  marginBottom: '20px',
}));

const FormRow = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  width: '100%',
}));

const FormLabel = styled('label')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '5px',
}));

const SubmitButton = styled('button')(({ theme }) => ({
  width: '180px',
  height: '50px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontSize: '28px',
  fontWeight: 'bold',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '120px',
}));

const MessageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '175px',
  marginBottom: '20px',
}));

const MessageTextArea = styled('textarea')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: `2px solid ${theme.palette.primary.main}`,
}));

const Contact = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'Get in touch.';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    let currentIndex = -1;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex === textToType.length) {
        clearInterval(interval);
      } else {
        setTypedText((prevText) => prevText + textToType.charAt(currentIndex));
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();
  // Check if any fields are empty
  if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
    // Set formSubmitted to true to trigger the field highlighting
    setFormSubmitted(true);
  } else {
  }
  };
  
  return (
    <ContactContainer>
      <VideoContainer>
        <Video src="../videos/contact.mp4" javascript autoPlay muted loop />
        <TypingEffect>{typedText}</TypingEffect>
      </VideoContainer>
      <ImageContainer>
        <CurvedImage src="../images/huddersfield.png" alt="Image" />
        <FaintBlueTint />
      </ImageContainer>
      <IconContainer>
        <CircleContainer>
          <Circle>
            <LocationIcon />
          </Circle>
          <Circle>
            <PhoneIconCircle />
          </Circle>
          <Circle>
            <EmailIconCircle />
          </Circle>
        </CircleContainer>
      </IconContainer>
      <BoxContainer>
        <Box>
          <BoxHeader>ADDRESS</BoxHeader>
          <BoxText>
            <ClickableAddress
              href="https://www.google.com/maps/search/?api=1&query=Queensgate%2C+Huddersfield+HD1+3DH"
              target="_blank"
              rel="noopener noreferrer"
            >
              Queensgate, Huddersfield HD1 3DH
            </ClickableAddress>
          </BoxText>
        </Box>
        <Box>
          <BoxHeader>PHONE</BoxHeader>
          <BoxText>
            <ClickablePhoneNumber href="tel:+447939804915">
              + 44 07939 804915
            </ClickablePhoneNumber>
          </BoxText>
        </Box>
        <Text>OR EMAIL US!</Text>
        <FormContainer>
  <form onSubmit={handleSubmit} noValidate>
    <FormField>
      <FormRow>
        <div>
          <FormLabel sx={{ color: formSubmitted && firstName.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined }}>First Name</FormLabel>
          <FormInput type="text" placeholder="First Name" required style={{ marginRight: '5px', width: '195px', backgroundColor: formSubmitted && firstName.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined }} value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
        </div>
        <div>
          <FormLabel sx={{marginLeft: '5px', color: formSubmitted && lastName.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined}}>Last Name</FormLabel>
          <FormInput type="text" placeholder="Last Name" required style={{ marginLeft: '5px', width: '195px', backgroundColor: formSubmitted && lastName.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} />
        </div>
      </FormRow>
    </FormField>
    <FormField>
      <FormLabel sx={{color: formSubmitted && email.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined}}>Email associated with account</FormLabel>
      <FormInput type="email" placeholder="Email" required style={{ backgroundColor: formSubmitted && email.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
    </FormField>
    <FormField>
      <FormLabel sx={{color: formSubmitted && message.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined}}>Message</FormLabel>
      <MessageContainer>
    <MessageTextArea placeholder="Message" required style={{ backgroundColor: formSubmitted && message.trim() === '' ? 'rgba(255, 91, 91, 0.7)' : undefined }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
  </MessageContainer>
    </FormField>
    <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
  </form>
</FormContainer>
      </BoxContainer>
    </ContactContainer>
  );
};

export default Contact;
