import React, { useState, useEffect, useRef } from 'react';
import { styled, keyframes } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const WhatWeDoContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: {
    sm: '720px',
    md: '1236px',
  },
  width: '100%',
  margin: '0 auto',
  marginBottom: '50px',
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

const Header = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(6),
  border: `6px solid ${theme.palette.primary.main}`,
  borderRadius: '20px',
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  zIndex: 1,
}));

const ItemButton = styled(Button)(({ theme }) => ({
  fontSize: '20px',
  padding: theme.spacing(2),
  marginRight: theme.spacing(12),
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}));

const GetStartedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  marginLeft: '60px',
  marginTop: '50px',
  border: `8px solid ${theme.palette.primary.main}`,
  borderRadius: '50px',
  height: '500px',
}));

const TextContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: '40px',
  marginTop: '70px',
  marginBottom: '70px',
}));

const StepTextContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(6),
}));

const StepNumber = styled(Typography)(({ theme }) => ({
  fontSize: '180px',
  fontWeight: 'bold',
  marginRight: theme.spacing(1),
  color: 'orange',
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  fontSize: '100px',
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const FlashingArrowsContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '40px',
 
});

const FlashingArrow1 = styled('div')(({ theme }) => ({
  fontSize: '300px',
  fontWeight: 'bold',
  color: 'orange',
  transition: 'opacity 0.8s ease-in-out',
  animation: `${arrowFlash1} 1.6s infinite`,
}));

const FlashingArrow2 = styled('div')(({ theme }) => ({
  fontSize: '300px',
  fontWeight: 'bold',
  color: 'orange',
  transition: 'opacity 0.8s ease-in-out',
  animation: `${arrowFlash2} 1.6s infinite`,
}));

const arrowFlash1 = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

const arrowFlash2 = keyframes({
  '0%': {
    opacity: 0,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

const JoinButton = styled(Button)(({ theme }) => ({
  fontSize: '60px',
  fontWeight: 'bold',
  padding: theme.spacing(3, 6),
  color: theme.palette.text.primary, // Set text color to the default text color
  backgroundColor: theme.palette.background.default, // Set background color to the default background color
  border: `8px solid ${theme.palette.primary.main}`,
  borderRadius: '50px',
  backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black,
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '8px solid ' + theme.palette.primary.main
            }
}));

const JoinButtonContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const WhatWeDo = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'What we do.';
  const imageTextRef = useRef(null);
  const uploadTextRef = useRef(null);
  const recordGigsTextRef = useRef(null);
  const collectRoyaltyTextRef = useRef(null);

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

  const handleRegisterClick = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = imageTextRef.current.offsetTop - headerHeight;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const handleUploadClick = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = uploadTextRef.current.offsetTop - headerHeight;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const handleGigClick = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = recordGigsTextRef.current.offsetTop - headerHeight;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const handleRoyaltyClick = () => {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = collectRoyaltyTextRef.current.offsetTop - headerHeight;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  return (
    <WhatWeDoContainer>
      <VideoContainer>
        <Video src="../videos/what_we_do.mp4" javascript autoPlay muted loop />
        <TypingEffect>{typedText}</TypingEffect>
      </VideoContainer>

      <div ref={imageTextRef}>
        <TextContainer>
          <Typography variant="h2">Your Text Here</Typography>
          <Typography variant="h3" color="white">
            Some brief text goes here
          </Typography>
        </TextContainer>
      </div>

      <header></header>

      <Header>
        <ItemButton variant="text" onClick={handleRegisterClick}>
          1. Register
        </ItemButton>
        <ItemButton variant="text" onClick={handleUploadClick}>
          2. Upload songs
        </ItemButton>
        <ItemButton variant="text" onClick={handleGigClick}>
          3. Record gigs
        </ItemButton>
        <ItemButton variant="text" onClick={handleRoyaltyClick}>
          4. Collect Royalty
        </ItemButton>
        <GetStartedButton variant="outlined">Get Started</GetStartedButton>
      </Header>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Image src="../images/sign in.png" alt="Image" ref={imageTextRef} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextContainer>
            <StepTextContainer>
              <StepNumber variant="h1">01</StepNumber>
              <StepTitle variant="h6">Register</StepTitle>
            </StepTextContainer>
            <Typography variant="body1" color="white" fontSize={'20px'}>
              How to register
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Image src="../images/upload music.png" alt="Image" ref={uploadTextRef} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextContainer>
            <StepTextContainer>
              <StepNumber variant="h1">02</StepNumber>
              <StepTitle variant="h6">Upload</StepTitle>
            </StepTextContainer>
            <Typography variant="body1" color="white" fontSize={'20px'}>
              Upload music
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Image src="../images/gig.jpg" alt="Image" ref={recordGigsTextRef} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextContainer>
            <StepTextContainer>
              <StepNumber variant="h1">03</StepNumber>
              <StepTitle variant="h6">Gigs</StepTitle>
            </StepTextContainer>
            <Typography variant="body1" color="white" fontSize={'20px'}>
              Record gigs
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Image src="../images/royalty.jpeg" alt="Image" ref={collectRoyaltyTextRef} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextContainer>
            <StepTextContainer>
              <StepNumber variant="h1">04</StepNumber>
              <StepTitle variant="h6">Royalty</StepTitle>
            </StepTextContainer>
            <Typography variant="body1" color="white" fontSize={'20px'}>
              Receive royalty
            </Typography>
          </TextContainer>
        </Grid>
      </Grid>

      <FlashingArrowsContainer>
        <FlashingArrow1 id="arrow1">&gt;</FlashingArrow1>
        <FlashingArrow2 id="arrow2">&gt;</FlashingArrow2>
        <FlashingArrow2 id="arrow3">&gt;</FlashingArrow2>
        <JoinButton variant="contained">
          <JoinButtonContent>
            <GroupAddIcon fontSize="inherit" />
            <Typography variant="h3">Join Luco</Typography>
          </JoinButtonContent>
        </JoinButton>
        <FlashingArrow2 id="arrow4">&lt;</FlashingArrow2>
        <FlashingArrow1 id="arrow5">&lt;</FlashingArrow1>
        <FlashingArrow1 id="arrow6">&lt;</FlashingArrow1>
      </FlashingArrowsContainer>
    </WhatWeDoContainer>
  );
};

export default WhatWeDo;

