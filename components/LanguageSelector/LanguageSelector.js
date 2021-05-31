import { useRouter } from 'next/router'

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
        <div>
            <select name="languages" id="language-selector" onChange={onSelectChange}>
                {router.locales.map((language) =>(
                    <option value={language}>
                        {language === "en" ? "EN" : language === "fr" ? "FR" : null}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default LanguageSelector;  