import Image from 'next/image';
import img from '../public/profileImg.png';
import styles from '../styles/About.module.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import coder from '../public/coder.svg';
import personal from '../public/personalInfo.svg';


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const actions = [
    { icon: <LinkedInIcon />, name: 'LinkedIn' , url: 'https://www.linkedin.com/in/mansi-zope/'},
    { icon: <GitHubIcon />, name: 'Github', url: 'https://github.com/mansi-dev' },
];


export const About = () => {
    return (
        <div className='page-container'>
            <div className={styles.intro} id="intro">
                <div className={styles.left}>
                    <div className={styles.imgContainer}>
                        <Image src={img}></Image>
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        <h2 className={styles.greet}>Hello There, I am</h2>
                        <h1 className={styles.name}>Mansi Zope</h1>

                        <p className={styles.desc}>
                        A technology enthusiast with 3+ years of industry experience as a software developer. I am passionate about 
                        designing and building software products that would be helpful in solving real world issues. I enjoy learning and experimenting new things 
                        to keep myself up to date with the current technology trend. 
                        </p>
                    </div>
                    <div className={styles.coderImg}>
                    <Image src={coder}></Image>

                    </div>
                    {/* <a href="#portfolio">
                    <ArrowDownwardOutlined/>
                </a> */}
                </div>
                <Box sx={{ mt: 3, height: 320 }}>
                    <StyledSpeedDial
                        ariaLabel="SpeedDial playground example"
                        icon={<SpeedDialIcon />}
                        direction="left"
                        FabProps={{
                            sx: {
                                bgcolor: '#23272A',
                                '&:hover': {
                                    bgcolor: '#3C4348',
                                }
                            }
                        }}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={()=>(window.location.href = action.url)}
                            />
                        ))}
                    </StyledSpeedDial>
                </Box>
            </div>
        </div>
    );
};

export default About;

