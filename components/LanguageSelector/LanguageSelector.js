import { useRouter } from 'next/router'
import styles from '../../styles/LanguageSelector.module.css'

const LanguageSelector = () => {
    const router = useRouter();

    const onSelectChange = (e) => {
        const locale = e.target.value;
        router.push(router.asPath, router.asPath, {
            locale,
            scroll:false
        })
    }

    return (
        <div className={styles.languageselectorcontainer}>
            <select className={styles.languageselector} name="languages" id="language-selector" onChange={onSelectChange}>
                {router.locales.map((language) =>(
                    <option key={language} className={styles.languageoption} value={language}>
                        {language === "en" ? "EN" : language === "fr" ? "FR" : null}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelector;  