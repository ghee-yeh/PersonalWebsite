import styles from "./style.module.css";
import Image from "next/image";

export default function ExperienceCard(
    {company="Picnic", position="Chief Product Officer",image, description=" Built a cool social media product", year="2021", url}
) {
    return <div className={styles.container} onClick={() => {
        window.open(url, '_blank');
    }}>
        <div className={styles.left}>
            <Image 
                className={styles.image} 
                src={image} 
                alt={`${company} logo`}
                width={48}
                height={48}
            />
            <div className={styles.texts}>
                <div className={styles.textsTop}>
                <div className="b2" style={{fontWeight: "bold", lineHeight: "1.2"}}>{company}</div>
                <div className="b2" style={{lineHeight: "1.2"}}>{position}</div>
                </div>
                <div className={`b2 ${styles.description}`} style={{lineHeight: "1.2", color: "var(--tertiary)"}}>{description}</div>
                <div className={`b4 ${styles.year_column}`} style={{lineHeight: "1.2", color: "var(--tertiary)"}}>{year}</div>
            </div>
        </div>
        <div className={`b4 ${styles.year}`} style={{lineHeight: "1.2", color: "var(--tertiary)"}}>{year}</div>
    </div>;
}