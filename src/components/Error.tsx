import { useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { errors } from "../store/errors";
import { useSelector } from "../store/store";

export const Error = () => {
    // Error Messageを表示
    const errorsMessage = useSelector(errors);

    useEffect(() => {
        console.log(errorsMessage);
    }, [errorsMessage]);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col justify-center">
                <div className="alert alert-error shadow-lg">
                    <div>
                        <RiCloseCircleLine className="text-xl" />
                        <span>{errorsMessage.ErrorMessageJP}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
