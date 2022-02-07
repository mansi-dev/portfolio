import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import signLanguage from '../public/signlanguage.png';
import newspoint from '../public/newspoint.png';
import bloodbank from '../public/bloodbank.png';
import ecommerce from '../public/ecommerce.png';
import scraper from '../public/scraper.svg';


export const Projects = () => {
    return (
        <div className="page-container">
            <div className={styles.projectscontainer}>
                <div className={styles.title}>

                    <h1 className={styles.companyName}>Projects</h1>
                </div>
                <div className={styles.rightContainer}>

                    {/* <div  className={styles.imageContainer}>
                    <Image src={girlImg}></Image>

                    </div> */}
                    <div className={styles.projects}>
                        <Paper elevation={3} className={styles.leftPaper}>
                            <h3 className={styles.projectName} onClick={()=>window.location.href ='https://medium.com/@zgnxwky/sign-language-detection-using-lstm-model-5258ed3e5e34'}>Real Time Sign Language Detection using LSTM</h3>
                            <div className={styles.signContainer}>
                                <Image src={signLanguage} ></Image>

                            </div>

                        </Paper>
                        <Paper elevation={3} className={styles.leftPaper}>
                            <h3 className={styles.projectName} onClick={()=>window.location.href ='https://github.com/mansi-dev/AED-Final--Project'}>ERP Application for Blood Bank Management System</h3>
                            <div className={styles.signContainer}>
                                <Image src={bloodbank} ></Image>

                            </div>
                        </Paper>
                        <Paper elevation={3} className={styles.leftPaper}>
                            <h3 className={styles.projectName}>Job Portal Scraper</h3>
                            <div className={styles.signContainer}>
                                <Image src={scraper}></Image>

                            </div>
                        </Paper>
                        <Paper elevation={3} className={styles.leftPaper}>
                            <h3 className={styles.projectName} onClick={()=>window.location.href ='https://github.com/mansi-dev/ecommerce-app'}>E-Commerce Web Application</h3>
                            <div className={styles.signContainer}>
                                <Image src={ecommerce}></Image>

                            </div>
                        </Paper>
                        <Paper elevation={3} className={styles.leftPaper}>
                            <h3 className={styles.projectName} onClick={()=>window.location.href ='https://the-news-point.vercel.app/'}>The News Point</h3>
                            <Image src={newspoint}></Image>
                        </Paper>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects;
