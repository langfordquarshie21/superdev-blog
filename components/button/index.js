import Link from "next/link"

const Button = ({ label, page, action }) => {
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
    button: `bg-[#000] transition text-[#fff] p-2 px-4 whitespace-nowrap rounded-md border border-[#000] hover:text-[#000] hover:bg-[#fff]`,
}

export default Button