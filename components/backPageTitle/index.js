import BackButton from "../backButton"

const BackPageTitle = ({ title }) => {
    return (
      <>
        <div className="mb-20 -mt-10">
          <BackButton />
        </div>
        <h1 className="text-2xl my-3 -mt-16 mb-10 lg:text-4xl">#{title}</h1>
      </>
    );
}

export default BackPageTitle