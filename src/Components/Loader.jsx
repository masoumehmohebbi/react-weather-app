import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Oval
        height={80}
        width={80}
        color="#d946ef"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#db2777"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
export default Loader;
