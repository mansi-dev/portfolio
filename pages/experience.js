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
                                <Avatar sx={{ backgroundColor: '#23272A', width: '80px', height: '80px', fontWeight: 300, fontFamily: 'Montserrat, sans-serif !important', lineHeight: 1.5, margin: '20px' }}>Fidelity</Avatar>
                            </div>
                            <div className={styles.jobTitle}>

                                <h1 className={styles.companyName}>Fidelity Investments</h1>
                                <p className={styles.jobRole}>Software Engineer, May 2023 - Present</p>
                            </div>
                        </div>
    <br/>
                        <div className={styles.jobDesc}>
                            <ul>
                                <li> Implemented Kubernetes deployments for microservices architecture leveraging Docker for containerization,
optimizing scalability and resource management </li>
                                <li> Optimized application performance on Kubernetes, fine-tuning resource allocation, and container configurations,
resulting in a 30% reduction in infrastructure costs </li>
                                <li> Led the successful migration of a critical production application from Amazon ECS to EKS, ensuring a seamless
transition, zero downtime, and enhancing application performance by 40% </li>
                                <li> Developed comprehensive audit logging mechanisms for REST APIs in Spring Boot, enhancing traceability and
accountability </li>
    <li> Designed and implemented user-friendly screens using Angular within Fidelity’s Admin application for managing
data sources and their attributes, improving usability and reducing data management time by 30% </li>
                            </ul>
                        </div>
                        <div className={styles.skills}>
                            <Chip label="Java" className={styles.chip} />
                            <Chip label="Spring Boot" className={styles.chip} />
                            <Chip label="Angular" className={styles.chip} />
                            <Chip label="SQL" className={styles.chip} />
                            <Chip label="AWS EKS" className={styles.chip} />
                            <Chip label="Helm" className={styles.chip} />
                            <Chip label="Docker" className={styles.chip} />
                            <Chip label="Kubernetes" className={styles.chip} />
                            <Chip label="Jenkins" className={styles.chip} />

                        </div>
                    </Paper>

    <Paper elevation={3} className={styles.leftPaper}>
                        <div className={styles.paperHeader}>
                            <div className={styles.companyLogo}>
                                <Avatar sx={{ backgroundColor: '#23272A', width: '80px', height: '80px', fontWeight: 300, fontFamily: 'Montserrat, sans-serif !important', lineHeight: 1.5, margin: '20px' }}>Fidelity</Avatar>
                            </div>
                            <div className={styles.jobTitle}>

                                <h1 className={styles.companyName}>Fidelity Investments </h1>
                                <p className={styles.jobRole}>Software Engineer Intern, Jul. 2022 - Dec. 2022</p>
                            </div>
                        </div>
 <br/>
                        <div className={styles.jobDesc}>
                            <ul>
                                <li> Developed Helm charts for packaging and versioning Kubernetes applications, facilitating easy deployment,
rollback, and scalability, resulting in a 30% increase in development velocity </li>
                                <li> Integrated HashiCorp Vault for secrets management within Kubernetes environments, ensuring secure storage and
dynamic retrieval of sensitive credentials, enhancing overall system security and compliance </li>
                                <li> Built and maintained 15+ secured REST APIs in Spring Boot to help accelerate processing of customer
transactions </li>
                                <li> Optimized REST APIs to cache data leveraging Redis and achieved 25% faster computation time </li>
    <li> Collaborated with business stakeholders to get requirements, assess feasibility of suggested features and devise 10+
integrated modules </li>
                            </ul>
                        </div>
                        <div className={styles.skills}>
                            <Chip label="Java" className={styles.chip} />
                            <Chip label="Spring Boot" className={styles.chip} />
                            <Chip label="Angular" className={styles.chip} />
                            <Chip label="SQL" className={styles.chip} />
                            <Chip label="AWS EKS" className={styles.chip} />
                            <Chip label="Helm" className={styles.chip} />
                            <Chip label="Docker" className={styles.chip} />
                            <Chip label="Kubernetes" className={styles.chip} />
                            <Chip label="Jenkins" className={styles.chip} />

                        </div>
                    </Paper>
    

                    <Paper elevation={3} className={styles.leftPaper}>
                        <div className={styles.paperHeader}>

                            <div className={styles.companyLogo}>
                                <Avatar sx={{ backgroundColor: '#23272A', width: '80px', height: '80px', fontWeight: 300, fontFamily: 'Montserrat, sans-serif !important', lineHeight: 1.5, margin: '20px' }}>KPIT</Avatar>
                            </div>
                            <div className={styles.jobTitle}>

                                <h1 className={styles.companyName}>KPIT Technologies Ltd, Pune</h1>
                                <p className={styles.jobRole}>Software Engineer, Feb 2018 - Aug 2021</p>
                            </div>
                        </div>
     <br/>
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
                    
                </Box>
            </div>
        </div>
    )
};

export default Experience;
