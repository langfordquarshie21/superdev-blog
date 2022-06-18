import Link from "next/link"

const CategoryTabs = () => {
    const tags = [
        'Cryptocurrency',
        "Frontend",
        'BTC',
        'Software',
        'Web3',
        'JavaScript',
        'Internet'
    ]

    return (
        <>
            <div className='border-b border-b-borderGray w-screen'>
                <ul className='flex items-center max-w-7xl m-auto overflow-x-scroll'>
                    {tags.map((tag, i) => {
                        return <Link key={i} href={`/tag?${tag.toLocaleLowerCase().replace(' ', '-')}`}>
                            <li className={styles.link}>{tag}</li>
                        </Link>
                    })}
                </ul>
            </div>
        </>
    )
}

const styles = {
    link: `p-5 px-2 mx-2 whitespace-nowrap cursor-pointer text-greyText hover:text-[#000] transition hover:border-b-2 hover:border-b-[#000] border-b-2 border-b-[#fff]`,
    active: `p-5 px-2 mx-2 whitespace-nowrap cursor-pointer border-b-[#000] transition border-b-2`,
}

export default CategoryTabs