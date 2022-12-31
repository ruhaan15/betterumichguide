import Image from "next/image";

const SocialButton = ({ link, img, type }) => {
    const btnStyle =
        "align-middle mx-2 bg-white-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white";
    const btnStyleDisabled =
        "align-middle mx-2 bg-white-200 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded btn btn-white grayscale cursor-not-allowed";
    return (
        <button
            type="button"
            disabled={true}
            className={link ? btnStyle : btnStyleDisabled}
        >
            {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                    <Image src={img} alt={type} width={30} height={30} />
                </a>
            ) : (
                <Image src={img} alt={type} width={30} height={30} />
            )}
        </button>
    );
};

export default SocialButton;
