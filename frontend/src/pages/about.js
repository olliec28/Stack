import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';

const AboutContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: {
    sm: '720px',
    md: '1236px',
  },
  width: '100%',
  margin: '0 auto',
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
  zIndex: 1,
  fontSize: '125px',
  fontWeight: 'bold',
  whiteSpace: 'pre',
  animation: '$typing-effect 3s steps(40) 1s forwards',
}));

const WhiteTextBox = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '23.1%',
  left: '15%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.primary.main,
  width: '425px',
  height: '678px',
  borderRadius: '50px',
  zIndex: 1,
  color: theme.palette.text.secondary,
  padding: '28px',
}));

const ImageContainer = styled('div')(({ theme }) => ({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '40px',
  border: `8px solid ${theme.palette.primary.main}`, // Change the border thickness
  borderRadius: '50px',
  overflow: 'hidden',
}));

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  maxWidth: '1050px',
});

const CircleContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '50px',
  marginBottom: '320px', // Add margin bottom for increased space
}));

const Circle = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '295px',
  height: '295px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const IconContainer = styled('div')(({ theme }) => ({
  width: '250px', // Increase the icon container width
  height: '250px', // Increase the icon container height
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.secondary.main,
}));

const NumberContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-30px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const NumberText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '28px',
}));

const CircleText = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '-60px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: theme.palette.primary.main,
  width: '200px',
  height: '40px',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
  fontSize: '18px',
}));

const CircleDescription = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '-250px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '300px',
  textAlign: 'center',
  color: 'white',
}));

const HeaderContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  marginTop: '100px', // Adjust the marginTop to your preference
  marginBottom: '100px', // Adjust the marginBottom to your preference
}));

const Header = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: '20px 0',
}));

const Arrow = styled('div')(({ theme }) => ({
  position: 'relative',
  bottom: '0px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80px',
  height: '40px',
  backgroundColor: theme.palette.primary.main,
  clipPath: 'polygon(100% 0%, 0% 0%, 50% 100%)',
}));


const MeetTheTeamHeader = () => (
  <HeaderContainer>
    <Header>
      <Typography variant="h2" align="center">
        Meet the Team
      </Typography>
    </Header>
    <Arrow />
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ImageContainer style={{ marginRight: '40px' }}>
          <Image src="../images/Benson_Taylor.jpeg" alt="Team Image" sx={{ width: '700px', height: '800px' }} />
        </ImageContainer>
        <BlueBox style={{ marginLeft: '40px' }}>
          <Typography variant="h4" align="center" mb={2}>
            Benson Taylor
          </Typography>
          <Typography variant="body1" align="center">
            Description of our team members and their roles.
          </Typography>
        </BlueBox>
      </div>
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'flex-start' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BlueBox style={{ width: '440px', marginRight: '40px'}}>
            <Typography variant="h4" align="center" mb={2}>
              Graham Leslie
            </Typography>
            <Typography variant="body1" align="center">
              Description of the additional image.
            </Typography>
          </BlueBox>
          <ImageContainer style={{ marginLeft: '40px' }}>
            <Image src="../images/Graham_Leslie.jpeg" alt="Second Image" sx={{ width: '700px', height: '800px' }} />
          </ImageContainer>
        </div>
      </div>
    </div>
  </HeaderContainer>
);

const BlueBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: '22px',
  marginLeft: '20px',
  borderRadius: '50px',
  height: '810px',
  marginTop: '20px',
}));



const AboutPage = () => {
  const theme = useTheme();
  const [typedText, setTypedText] = useState('');
  const aboutText = 'What we are about.';

  useEffect(() => {
    let currentIndex = -1;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex === aboutText.length) {
        clearInterval(interval);
      } else {
        setTypedText((prevText) => prevText + aboutText.charAt(currentIndex));
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AboutContainer>
      <VideoContainer>
        {/* Replace the src attribute with your video source */}
        <Video src="../videos/about_music.mp4" autoPlay muted loop />
        <TypingEffect>{typedText}</TypingEffect>
      </VideoContainer>

      <WhiteTextBox>
        <Typography variant="h4" align="center" mb={2}>
          Who Are We
        </Typography>
        <Typography variant="body1" align="center">
          Description of who we are
        </Typography>
      </WhiteTextBox>

      <ImageContainer>
        <Image src="../images/warner_building.jpeg" alt="Image" />
      </ImageContainer>

      <Typography variant="h1" align="center" mt={20} mb={12} fontWeight={500}>
        Our Values
      </Typography>

      <CircleContainer>
        <Circle>
          <NumberContainer>
            <NumberText>1</NumberText>
          </NumberContainer>
          <IconContainer style={{ backgroundColor: theme.palette.background.default }}>
            <FavoriteIcon fontSize="large" sx={{ fontSize: 200 }} />
          </IconContainer>
          <CircleText>Passion</CircleText>
          <CircleDescription style={{ bottom: '-225px' }}> Passion is at the heart of everything we do. It fuels our commitment, dedication, and enthusiasm
            towards our work, allowing us to exceed expectations and deliver exceptional results. </CircleDescription>
        </Circle>
        <Circle>
          <NumberContainer>
            <NumberText>2</NumberText>
          </NumberContainer>
          <IconContainer style={{ backgroundColor: theme.palette.background.default }}>
            <PeopleAltIcon fontSize="large" sx={{ fontSize: 200 }} />
          </IconContainer>
          <CircleText>Collaboration</CircleText>
          <CircleDescription>Collaboration is the cornerstone of our success. We believe that working with Warner, leveraging diverse
            perspectives and skills, leads to innovative solutions and fosters a supportive and inclusive environment.</CircleDescription>
        </Circle>
        <Circle>
          <NumberContainer>
            <NumberText>3</NumberText>
          </NumberContainer>
          <IconContainer style={{ backgroundColor: theme.palette.background.default }}>
            <GroupIcon fontSize="large" sx={{ fontSize: 200 }} />
          </IconContainer>
          <CircleText>Teamwork</CircleText>
          <CircleDescription>Teamwork is our driving force. We believe that by fostering a collaborative and cooperative atmosphere,
            we can achieve remarkable results together, supporting and empowering each other along the way.</CircleDescription>
        </Circle>
        <Circle>
          <NumberContainer>
            <NumberText>4</NumberText>
          </NumberContainer>
          <IconContainer style={{ backgroundColor: theme.palette.background.default }}>
            <VisibilityIcon fontSize="large" sx={{ fontSize: 200 }} />
          </IconContainer>
          <CircleText>Focus</CircleText>
          <CircleDescription style={{ bottom: '-225px' }}> Focus is our guiding principle. By staying focused on our goals, we maintain clarity, drive, and efficiency
            in our work. We prioritize tasks, make informed decisions, and persist in the face of challenges.</CircleDescription>
        </Circle>
      </CircleContainer>
      <MeetTheTeamHeader></MeetTheTeamHeader>
    </AboutContainer>
  );
};

export default AboutPage;
