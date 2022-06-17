const Button = ({ label }) => {
    return (
        <>
            <button className={styles.button}>{label}</button>
        </>
    )
}

const styles = {
    button: `bg-[#000] text-[#fff] p-2 px-4 whitespace-nowrap rounded-md border hover:text-[#000] hover:bg-[#fff]`,
}

export default Button