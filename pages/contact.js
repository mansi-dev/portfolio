import styles from '../styles/Contact.module.css';
import Image from 'next/image';
import contact from '../public/contact.svg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
    return (
        <div className="page-container">
            <div className={styles.contactContainer}>
                <div className={styles.leftContainer}>
                    <Image src={contact}></Image>
                </div>
                <div className={styles.rightContainer}>
                    <h1 className={styles.companyName}>Contact</h1>

                    <TextField label="Name" id="outlined-size-normal" className={styles.txtfield} />
                    <TextField label="Email" id="outlined-size-normal" className={styles.txtfield} />
                    <TextField label="Contact Number" id="outlined-size-normal" className={styles.txtfield} />
                    <TextField id="standard-multiline-static" label="Message" multiline rows={4} className={styles.txtfield} />

                    <Button variant="contained" endIcon={<SendIcon />} className={styles.sendBtn}>
                        Send
                    </Button>
                </div>
            </div>

        </div>
    )
}
export default Contact;
