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
    button: `bg-[#fff] text-brand transition text-[#fff] p-2 px-4 whitespace-nowrap rounded-full border border-brand hover:text-brand hover:bg-[#fff]`,
}

export default WhiteButton