import Link from "next/link"

const WhiteButton = ({ label, page, action }) => {
    return (
        <>
            {action ? <button onClick={action} className={styles.button}>{label}</button> : null}
            {page
                ? <Link href={page} passHref>
                    <button className={styles.button}>{label}</button>
                </Link>
                : null}
        </>
    )
}

const styles = {
    button: `bg-[#fff] hover:bg-brand hover:text-[#fff] text-brand transition p-2 px-4 whitespace-nowrap rounded-full border border-brand`,
}

export default WhiteButton