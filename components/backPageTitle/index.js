import BackButton from "../backButton"

const BackPageTitle = ({ title }) => {
    return (
        <>
            <BackButton />
            <h1 className="text-2xl my-3 lg:text-4xl capitalize">{title}</h1>
        </>
    )
}

export default BackPageTitle