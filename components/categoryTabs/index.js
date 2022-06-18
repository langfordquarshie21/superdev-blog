const CategoryTabs = () => {
    return (
        <>
            <div className='border-b border-b-borderGray w-screen'>
                <ul className='flex items-center max-w-7xl m-auto overflow-x-scroll'>
                    <li className={styles.active}>Cryptocurrency</li>
                    <li className={styles.links}>Web3</li>
                    <li className={styles.links}>Frontend dev</li>
                    <li className={styles.links}>ReactJs</li>
                    <li className={styles.links}>Snippets</li>
                </ul>
            </div>
        </>
    )
}

const styles = {
    links: `p-5 px-2 mx-2 whitespace-nowrap cursor-pointer text-greyText hover:text-[#000] transition hover:border-b-2 hover:border-b-[#000] border-b-2 border-b-[#fff]`,
    active: `p-5 px-2 mx-2 whitespace-nowrap cursor-pointer border-b-[#000] transition border-b-2`,
}

export default CategoryTabs