import styles from '../styles/Experience.module.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

export const Experience = () => {
    return (
        <div className='page-container'>

            <div className={styles.experience}>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    backgroundColor: '#e9ba38',
                    '& > :not(style)': {
                        m: 2,
                        mb: 3,
                        p: 1,
                    },
                }}>

                    <Paper elevation={3} className={styles.leftPaper}>
                        <div className={styles.paperHeader}>

                            <div className={styles.companyLogo}>
                                <Avatar sx={{ backgroundColor: '#23272A', width: '80px', height: '80px', fontWeight: 300, fontFamily: 'Montserrat, sans-serif', lineHeight: 1.5, margin: '20px' }}>KPIT</Avatar>
                            </div>
                            <div className={styles.jobTitle}>

                                <h1 className={styles.companyName}>KPIT Technologies Ltd, Pune</h1>
                                <p className={styles.jobRole}>Software Engineer, Feb 2018 - Aug 2021</p>
                            </div>
                        </div>
                        <div className={styles.jobDesc}>
                            <ul>
                                <li> Implemented a solution to perform statistical analysis on git commits, that generate performance insights for managers and their team members using Python and PostgreSQL</li>
                                <li> Developed an application for KPIT where managers can keep track of their team members productivity and discipline using ReactJS, NodeJS and Python </li>
                                <li> Authored Jenkins CICD pipelines for continuous build & deployment and integrated Junit and SonarQube plugins in Jenkins for
                                     automated testing and for Code quality check</li>
                                <li> Used Kubernetes to orchestrate the deployment, scaling and management of Docker Containers </li>
                            </ul>
                        </div>
                        <div className={styles.skills}>
                            <Chip label="Java" className={styles.chip} />
                            <Chip label="Spring MVC" className={styles.chip} />
                            <Chip label="Python" className={styles.chip} />
                            <Chip label="NodeJS" className={styles.chip} />
                            <Chip label="React" className={styles.chip} />
                            <Chip label="PostgresSQL" className={styles.chip} />
                            <Chip label="Docker" className={styles.chip} />
                            <Chip label="Kubernetes" className={styles.chip} />

                        </div>
                    </Paper>
                    <Paper elevation={3} className={styles.leftPaper}>
                        <div className={styles.paperHeader}>
                            <div className={styles.companyLogo}>
                                <Avatar sx={{ backgroundColor: '#23272A', width: '80px', height: '80px', fontWeight: 300, fontFamily: 'Montserrat, sans-serif', lineHeight: 1.5, margin: '20px' }}>TOBU</Avatar>
                            </div>
                            <div className={styles.jobTitle}>

                                <h1 className={styles.companyName}>EdWave, Pune </h1>
                                <p className={styles.jobRole}>Frontend Developer, Oct 2016 - Apr 2017</p>
                            </div>
                        </div>

                        <div className={styles.jobDesc}>
                            <ul>
                                <li> Designed and developed Career Page for TOBU to allow employers easily devise job openings and manage 1000s of resumes</li>
                                <li> Migrated TOBU application from AngularJS to Angular, improved the speed and performance of the application by 40%  </li>
                                <li> Implemented a resume parser, which will parse the entire resume and store the details on TOBU server </li>
                                <li> Created and maintained SQL procedures to ensure smooth working of the application</li>
                            </ul>
                        </div>
                        <div className={styles.skills}>
                            <Chip label="HTML5" className={styles.chip} />
                            <Chip label="CSS" className={styles.chip} />
                            <Chip label="JQuery" className={styles.chip} />
                            <Chip label="JavaScript" className={styles.chip} />
                            <Chip label="Angular" className={styles.chip} />
                            <Chip label="Redis" className={styles.chip} />
                            <Chip label="SQL" className={styles.chip} />

                        </div>
                    </Paper>
                </Box>
            </div>
        </div>
    )
};

export default Experience;